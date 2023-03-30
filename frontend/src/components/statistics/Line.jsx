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
  import { COLORS } from "./constants";
  
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

  const categories = ["January", "February", "March"];
  
  const Line = props => {
    return (
      <Chart pannable zoomable style={{ height: 350 }}>
        <ChartTitle text="Application status - last 3 months" />
        <ChartLegend position="top" orientation="horizontal" />
        <ChartValueAxis>
          <ChartValueAxisItem title={{ text: "Job Positions" }} min={0} max={30} />
        </ChartValueAxis>
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={categories} />
        </ChartCategoryAxis>        
      </Chart>
    );
  };
  
  export default Line;