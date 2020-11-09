<template>
  <div id="candlestick">
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
// import data from './config/CandlestickChartConfig';
// const schema = [
//   {
//     name: 'Date',
//     type: 'date',
//     format: '%Y-%m-%d',
//   },
//   {
//     name: 'Open',
//     type: 'number',
//   },
//   {
//     name: 'High',
//     type: 'number',
//   },
//   {
//     name: 'Low',
//     type: 'number',
//   },
//   {
//     name: 'Close',
//     type: 'number',
//   },
//   {
//     name: 'Volume',
//     type: 'number',
//   },
// ];
var jsonify = (res) => res.json();
var dataFetch = fetch(
  'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/candlestick-chart-data.json'
).then(jsonify);
var schemaFetch = fetch(
  'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/candlestick-chart-schema.json'
).then(jsonify);
export default {
  data() {
    return {
      width: '50%',
      height: '400',
      type: 'timeseries',
      dataFormat: 'json',
      dataSource: {
        caption: {
          text: 'Apple Inc. Stock Price',
        },
        data: null,
        subcaption: {
          text: 'Stock prices from January 1980 - November 2011',
        },
        yaxis: [
          {
            plot: {
              value: {
                open: 'Open',
                high: 'High',
                low: 'Low',
                close: 'Close',
              },
              type: 'candlestick',
            },
            format: {
              prefix: '$',
            },
            title: 'Stock Value',
          },
        ],
      },
    };
  },
  mounted: function() {
    Promise.all([dataFetch, schemaFetch]).then((res) => {
      const data = res[0];
      const schema = res[1];
      const fusionTable = new FusionCharts.DataStore().createDataTable(
        data,
        schema
      );
      this.dataSource.data = fusionTable;
    });
  },
};
</script>

<style></style>
