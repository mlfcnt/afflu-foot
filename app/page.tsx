"use client";

import { Column, DataGrid, Export } from "devextreme-react/data-grid";
import "devextreme/dist/css/dx.light.css";
import { Workbook } from "exceljs";
import saveAs from "file-saver";
import { exportDataGrid } from "devextreme/excel_exporter";
import { Club, fakeJournees } from "./fakes";

type Affluence = {
  [club in (typeof Clubs)[number]]: number;
};

const Clubs = [
  "Stade Brestois 29",
  "Clermont Foot 63",
  "Havre AC",
  "RC Lens",
  "Lille OSC",
  "FC Lorient",
  "Olympique Lyonnais",
  "Olympique de Marseille",
  "FC Metz",
  "AS Monaco FC",
  "Montpellier Hérault SC",
  "FC Nantes",
  "OGC Nice",
  "Paris Saint-Germain FC",
  "Stade de Reims",
  "Stade Rennais FC",
  "RC Strasbourg Alsace",
  "Toulouse FC",
] as const;

export default function Home() {
  // Function to get the highest and lowest values in each column

  type CellRenderData = {
    data: any;
    value: number;
    column: {
      dataField: string;
    };
  };

  const getHighestAndLowest = (
    club: Club
  ): { highest: number; lowest: number } => {
    const values = fakeJournees.map((j) => j.affluences[club]);
    const highest = Math.max(...values);
    const lowest = Math.min(...values);
    return { highest, lowest };
  };

  // Custom cell render to apply conditional styling
  const cellRender = (cellData: CellRenderData) => {
    const { column, value } = cellData;
    const club = column.dataField.split(".")[1];
    const { highest, lowest } = getHighestAndLowest(club);
    let backgroundColor = "#FFFFFF"; // Default background

    if (value === highest) {
      backgroundColor = "#00FF00"; // Green for the highest value
    } else if (value === lowest) {
      backgroundColor = "#FF0000"; // Red for the lowest value
    }

    return (
      <div style={{ backgroundColor, width: "100%", height: "100%" }}>
        {value}
      </div>
    );
  };

  return (
    <DataGrid<(typeof fakeJournees)[0]>
      dataSource={fakeJournees}
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
      <Column caption="Journee" dataField="number" />
      {Clubs.map((club) => (
        <Column
          key={club}
          caption={club}
          dataField={`affluences.${club}`}
          cellRender={cellRender}
        />
      ))}
      <Column
        caption="Total"
        allowSorting
        calculateCellValue={(data) => {
          let total = 0;
          for (const club of Clubs) {
            total += data.affluences[club];
          }
          return total;
        }}
      />
      <Export enabled={true} />
    </DataGrid>
  );
}
