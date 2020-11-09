<template>
  <div id="columnLine">
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
import data from './config/ColumnLineConfig';
const schema = [
  {
    name: 'Time',
    type: 'date',
    format: '%e-%b-%Y',
  },
  {
    name: 'kW Usage',
    type: 'number',
  },
  {
    name: 'OATemp',
    type: 'number',
  },
];
export default {
  data() {
    return {
      width: '100%',
      height: '380',
      type: 'timeseries',
      dataFormat: 'json',
      dataSource: {
        chart: {
          theme: 'candy',
        },
        navigator: {
          enabled: false,
        },
        data: null,
        caption: {
          text: 'Outside Air Temperature and kW Usage',
        },
        subcaption: {
          text: 'since 2015',
        },
        yAxis: [
          {
            plot: [
              {
                value: 'kW Usage',
                type: 'column',
              },
              {
                value: 'OATemp',
                type: 'line',
              },
            ],
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
