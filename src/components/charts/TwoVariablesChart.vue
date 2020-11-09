<template>
  <div id="twoVariables">
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
import data from './config/TwoVariablesChartConfig';
const schema = [
  {
    name: 'Date',
    type: 'date',
    format: '%-m/%d/%Y',
  },
  {
    name: 'O2 concentration',
    type: 'number',
  },
  {
    name: 'Surface Temperature',
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
        data: null,
        caption: {
          text: 'Cariaco Basin Sampling',
        },
        subcaption: {
          text: 'Analysis of O₂ Concentration and Surface Temperature',
        },
        yAxis: [
          {
            plot: 'O2 concentration',
            min: '3',
            max: '6',
            title: 'O₂ Concentration (mg/L)',
          },
          {
            plot: 'Surface Temperature',
            min: '18',
            max: '30',
            title: 'Surface Temperature (°C)',
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
