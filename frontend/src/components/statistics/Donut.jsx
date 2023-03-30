import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
  } from "@progress/kendo-react-charts";
  import { COLORS } from "./constants";

  const applicationsStatusThisMonth = [
    {
      status: "Accepted",
      value: 14,
      color: COLORS.accepted,
    },
    {
      status: "Interviewing",
      value: 14,
      color: COLORS.interviewing,
    },
    {
      status: "Rejected",
      value: 40,
      color: COLORS.rejected,
    },
    {
      status: "Pending",
      value: 32,
      color: COLORS.pending,
    },
  ];

  const labelContent = e => e.category;
  
  const Charts = props => {
    return (
      <Chart>
        <ChartTitle text="Applications status - this month" />
        <ChartLegend visible={false} />
        <ChartSeries>
          <ChartSeriesItem
            type="donut"
            data={applicationsStatusThisMonth}
            categoryField="status"
            field="value"
          >
            <ChartSeriesLabels
              color="#fff"
              background="none"
              content={labelContent}
            />
          </ChartSeriesItem>
        </ChartSeries>
      </Chart>
    );
  };
  
  export default Charts;