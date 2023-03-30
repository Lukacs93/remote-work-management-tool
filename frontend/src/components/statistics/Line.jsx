import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTitle,
    ChartLegend,
  } from "@progress/kendo-react-charts";
  import { COLORS } from "../../constants";
  
  export const series = [
    {
      name: "Total",
      data: [19, 9, 20],
      color: COLORS.total,
    },
    {
      name: "Pending",
      data: [12, 6, 15],
      color: COLORS.pending,
    },
    {
      name: "Fulfilled",
      data: [7, 3, 5],
      color: COLORS.accepted,
    },
  ];
  