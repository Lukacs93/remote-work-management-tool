import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    ChartTooltip,
  } from "@progress/kendo-react-charts";
  import { COLORS } from "./constants";

  const renderTooltip = context => {
    const { category, value } = context.point || context;
    return (
      <div>
        {category}: {value}%
      </div>
    );
  };
  const applicationsStatusThisMonth = [
    {
      status: "Done",
      value: 14,
      color: COLORS.accepted,
    },
    {
      status: "In Progress",
      value: 14,
      color: COLORS.interviewing,
    },
    {
      status: "Not started",
      value: 40,
      color: COLORS.rejected,
    },
    {
      status: "Review",
      value: 32,
      color: COLORS.pending,
    },
  ];

  const labelContent = e => e.category;
  
  const Charts = props => {
    return (
      <Chart>
        <ChartTitle text="Projects" />
        <ChartLegend visible={false} />
        <ChartTooltip render={renderTooltip} />
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