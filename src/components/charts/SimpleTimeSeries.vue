<template>
  <div id="simpleseries">
    <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataFormat="dataFormat"
      :dataSource="dataSource"
    ></fusioncharts>
  </div>
</template>

<script>
import data from './config/SimpleTimeSeriesConfig';
const schema = [
  {
    name: 'Time',
    type: 'date',
    format: '%d-%b-%y',
  },
  {
    name: 'Grocery Sales Value',
    type: 'number',
  },
];
export default {
  data() {
    return {
      width: '60%',
      height: '400',
      type: 'timeseries',
      dataFormat: 'json',
      dataSource: {
        data: null,
        caption: {
          text: 'Sales Analysis',
        },
        subcaption: {
          text: 'Grocery',
        },
        yAxis: [
          {
            plot: {
              value: 'Grocery Sales Value',
              type: 'line',
            },
            format: {
              prefix: '$',
            },
            title: 'Sale Value',
          },
        ],
      },
    };
  },
  mounted: function() {
    // Promise.all([dataFetch, schemaFetch]).then((res) => {
    // const data = res[0];
    // const schema = res[1];
    const fusionTable = new FusionCharts.DataStore().createDataTable(
      data,
      schema
    );
    this.dataSource.data = fusionTable;
    //});
  },
};
</script>

<style></style>
