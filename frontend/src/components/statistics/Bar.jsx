import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisTitle,
    ChartCategoryAxisItem,
  } from "@progress/kendo-react-charts";
  import { COLORS } from "../../constants";
  
  const series = [
    {
      status: "Total",
      data: [43, 30, 59],
      color: COLORS.total,
    },
    {
      status: "Pending",
      data: [25, 15, 30],
      color: COLORS.pending,
    },
    {
      status: "Interviewed",
      data: [3, 5, 1],
      color: COLORS.interviewed,
    },
    {
      status: "Rejected",
      data: [14, 10, 25],
      color: COLORS.rejected,
    },
    {
      status: "Accepted",
      data: [1, 3, 2],
      color: COLORS.accepted,
    },
  ];