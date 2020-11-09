<template
  ><div id="areaChart">
    <v-card>
      <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="dataSource"
      ></fusioncharts>
    </v-card>
  </div>
</template>

<script>
// import data from './config/AreaChartConfig';
const data = {
  chart: {
    caption: 'Sales of Liquor',
    subCaption: 'Previous week vs current week',
    xAxisName: 'Day',
    yAxisName: 'Sales (In USD)',
    numberPrefix: '$',
    plotFillAlpha: '60',
    theme: 'zune',
  },
  categories: [
    {
      category: [
        {
          label: 'Mon',
        },
        {
          label: 'Tue',
        },
        {
          label: 'Wed',
        },
        {
          label: 'Thu',
        },
        {
          label: 'Fri',
        },
        {
          label: 'Sat',
        },
        {
          label: 'Sun',
        },
      ],
    },
  ],
  dataset: [
    {
      seriesname: 'Previous Week',
      data: [
        {
          value: '13000',
        },
        {
          value: '14500',
        },
        {
          value: '13500',
        },
        {
          value: '15000',
        },
        {
          value: '15500',
        },
        {
          value: '17650',
        },
        {
          value: '19500',
        },
      ],
    },
    {
      seriesname: 'Current Week',
      data: [
        {
          value: '8400',
        },
        {
          value: '9800',
        },
        {
          value: '11800',
        },
        {
          value: '14400',
        },
        {
          value: '18800',
        },
        {
          value: '24800',
        },
        {
          value: '30800',
        },
      ],
    },
  ],
};
const schema = [
  {
    name: 'Time',
    type: 'date',
    format: '%Y-%m-%d',
  },
  {
    name: 'Daily Visitors',
    type: 'number',
  },
];
export default {
  data() {
    return {
      width: '100%',
      height: '245',
      type: 'timeseries',
      dataFormat: 'json',
      dataSource: {
        navigator: {
          enabled: false,
        },
        caption: { text: 'Online Sales of a SuperStore in the US' },
        data: null,
        chart: {
          showLegend: 0,
          theme: 'zune',
        },
        caption: {
          text: 'Daily Visitors Count of a Website',
        },
        yAxis: [
          {
            plot: {
              value: 'Daily Visitors',
              type: 'area',
            },
            title: 'Daily Visitors (in thousand)',
          },
        ],
      },
    };
  },
  mounted: function() {
    const fusionTable = new FusionCharts.DataStore().createDataTable(
      data,
      schema
    );
    this.dataSource.data = fusionTable;
  },
};
</script>

<style></style>
