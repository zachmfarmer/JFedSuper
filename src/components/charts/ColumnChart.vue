<template>
  <div id="columnChart">
    <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataFormat="dataFormat"
      :dataSource="dataSource"
    ></fusioncharts></div
></template>

<script>
import data from './config/ColumnChartConfig';
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
      height: '400',
      type: 'timeseries',
      dataFormat: 'json',
      dataSource: {
        caption: { text: 'Online Sales of a SuperStore in the US' },
        data: null,
        chart: {
          showLegend: 0,
        },
        caption: {
          text: 'Daily Visitors Count of a Website',
        },
        yAxis: [
          {
            plot: {
              value: 'Daily Visitors',
              type: 'column',
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
