"use client";

import React from "react";
import { DataGrid as Dx } from "devextreme-react";
import { exportDataGrid } from "devextreme/excel_exporter";
import { Workbook } from "exceljs";
import saveAs from "file-saver";
import { Column, Export } from "devextreme-react/cjs/data-grid";
import { clubs } from "@/constants/clubs";
import { Journee } from "@/types";

type Props = {
  journees: Journee[];
};

export const Datagrid = (props: Props) => {
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
      <Column caption="Journee" dataField="number" fixed />
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
      />
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
