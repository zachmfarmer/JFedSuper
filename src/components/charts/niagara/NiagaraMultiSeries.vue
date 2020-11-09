<template>
  <div id="multiSeries">
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
import data from '../config/MultiSeriesConfig';
const schema = [
  {
    name: 'Time',
    type: 'date',
    format: '%d-%b-%y',
  },
  {
    name: 'Type',
    type: 'string',
  },
  {
    name: 'Sales Value',
    type: 'number',
  },
];
export default {
  data() {
    return {
      width: '100%',
      height: '475',
      type: 'timeseries',
      dataFormat: 'json',
      dataSource: {
        data: null,
        caption: {
          text: 'Sales Analysis',
        },
        subcaption: {
          text: 'Grocery & Footwear',
        },
        series: 'Type',
        yAxis: [
          {
            plot: 'Sales Value',
            title: 'Sale Value',
            format: {
              prefix: '$',
            },
          },
        ],
      },
    };
  },
  mounted() {
    const fusionTable = new FusionCharts.DataStore().createDataTable(
      data,
      schema
    );
    this.dataSource.data = fusionTable;
  },
};
</script>

<style></style>
