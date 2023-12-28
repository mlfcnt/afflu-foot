"use client";

import React, { useMemo } from "react";
import { DataGrid as Dx } from "devextreme-react";
import { exportDataGrid } from "devextreme/excel_exporter";
import { Workbook } from "exceljs";
import saveAs from "file-saver";
import {
  Column,
  Export,
  Summary,
  TotalItem,
} from "devextreme-react/cjs/data-grid";
import { clubs } from "@/constants/clubs";
import { Journee } from "@/types";
import "./dx.styles.css";
import {
  clubWithHighestAverage as clubWithHighestAverageFn,
  clubWithHighestTotal as clubWithHighestTotalFn,
  clubWithLowestAverage as clubWithLowestAverageFn,
  clubWithLowestTotal as clubWithLowestTotalFn,
  journeeWithHighestTotal as journeeWithHighestTotalFn,
  journeeWithLowestTotal as journeeWithLowestTotalFn,
} from "./helpers";

type Props = {
  journees: Journee[];
};

export const Datagrid = (props: Props) => {
  const clubWithHighestAverage = useMemo(() => {
    return clubWithHighestAverageFn(clubs, props.journees);
  }, [props.journees]);

  const clubWithHighestTotal = useMemo(() => {
    return clubWithHighestTotalFn(clubs, props.journees);
  }, [props.journees]);

  const clubWithLowestAverage = useMemo(() => {
    return clubWithLowestAverageFn(clubs, props.journees);
  }, [props.journees]);

  const clubWithLowestTotal = useMemo(() => {
    return clubWithLowestTotalFn(clubs, props.journees);
  }, [props.journees]);

  const journeeWithHighestTotal = useMemo(() => {
    return journeeWithHighestTotalFn(props.journees);
  }, [props.journees]);
  const journeeWithLowestTotal = useMemo(() => {
    return journeeWithLowestTotalFn(props.journees);
  }, [props.journees]);

  return (
    <Dx<Journee>
      dataSource={props.journees}
      rowAlternationEnabled
      columnWidth={75}
      onExporting={(e) => {
        const workbook = new Workbook();
        const worksheet = workbook.addWorksheet("Main sheet");
        exportDataGrid({
          component: e.component,
          worksheet: worksheet,
          customizeCell: function (options) {
            options.excelCell.font = { name: "Arial", size: 12 };
            options.excelCell.alignment = { horizontal: "left" };
          },
        }).then(function () {
          workbook.xlsx.writeBuffer().then(function (buffer) {
            saveAs(
              new Blob([buffer], { type: "application/octet-stream" }),
              "DataGrid.xlsx"
            );
          });
        });
      }}
    >
      {" "}
      <Column caption="J" dataField="number" fixed width={"auto"} />
      {clubs.map((club) => (
        <Column
          key={club.name}
          caption={club.alias}
          dataField={`affluences.${club.name}.number`}
          cellRender={(e) => cellRender(e, props.journees)}
        />
      ))}
      <Column
        caption="Total"
        allowSorting
        calculateCellValue={(data) => {
          let total = 0;
          for (const club of clubs) {
            total += data.affluences[club.name]?.number || 0;
          }
          return total;
        }}
        cellRender={(e) => {
          if (e.data.number === journeeWithHighestTotal.number) {
            return (
              <div
                style={{
                  backgroundColor: "#00FF00",
                  width: "100%",
                  height: "100%",
                }}
              >
                {e.value}
              </div>
            );
          } else if (e.data.number === journeeWithLowestTotal.number) {
            return (
              <div
                style={{
                  backgroundColor: "#FF0000",
                  width: "100%",
                  height: "100%",
                  color: "#FFFFFF",
                }}
              >
                {e.value}
              </div>
            );
          } else {
            return (
              <div style={{ width: "100%", height: "100%" }}>{e.value}</div>
            );
          }
        }}
      />
      <Summary>
        {clubs.map((club) => (
          <TotalItem
            key={club.name}
            column={`affluences.${club.name}.number`}
            summaryType="sum"
            customizeText={(e) => {
              return e.value.toLocaleString();
            }}
            cssClass={
              club.name === clubWithHighestTotal.name
                ? "highest_sum"
                : clubWithLowestTotal.name === club.name
                ? "lowest_sum"
                : ""
            }
          />
        ))}
        {clubs.map((club) => (
          <TotalItem
            key={club.id}
            column={`affluences.${club.name}.number`}
            summaryType="avg"
            customizeText={(e) => {
              return e.value.toLocaleString();
            }}
            cssClass={
              club.name === clubWithHighestAverage.name
                ? "highest_avg"
                : clubWithLowestAverage.name === club.name
                ? "lowest_avg"
                : ""
            }
          />
        ))}
      </Summary>
      <Export enabled={true} />
    </Dx>
  );
};

type CellRenderData = {
  data: any;
  value: number;
  column: {
    dataField: string;
  };
};

const getHighestAndLowest = (
  journees: Journee[],
  clubName: string
): { highest: number; lowest: number } => {
  const values = journees
    .map((j) => j.affluences[clubName]?.number)
    .filter(Boolean);
  const highest = Math.max(...values);
  const lowest = Math.min(...values);
  return { highest, lowest };
};

const cellRender = (cellData: CellRenderData, journees: Journee[]) => {
  const { column, value } = cellData;
  const clubName = column.dataField.split(".")[1];
  const { highest, lowest } = getHighestAndLowest(journees, clubName);
  let backgroundColor = "initial"; // Default background
  let color = "initial"; // Default background

  if (value === highest) {
    backgroundColor = "#00FF00";
  } else if (value === lowest) {
    backgroundColor = "#FF0000";
    color = "#FFFFFF";
  }

  return (
    <div
      style={{
        backgroundColor,
        width: "100%",
        height: "100%",
        color,
        padding: 0,
      }}
    >
      {value}
    </div>
  );
};
