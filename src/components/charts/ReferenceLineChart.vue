<template>
  <div id="refLine">
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
import data from './config/RefLineConfig';
const schema = [
  {
    name: 'Time',
    type: 'date',
    format: '%-m/%-d/%Y %H:%M:%S',
  },
  {
    name: 'Temperature',
    type: 'number',
  },
];
export default {
  data() {
    return {
      width: '100%',
      height: '370',
      type: 'timeseries',
      dataFormat: 'json',
      dataSource: {
        navigator: {
          enabled: false,
        },
        chart: {
          theme: 'zune',
          palleteColors: '#67BEB3',
          style: {
            canvas: {
              // fill: '#67BEB3',
              alpha: '20',
            },
          },
        },
        data: null,
        caption: {
          text: 'Chilled Water Supply Temperatures',
        },
        yAxis: [
          {
            plot: {
              value: 'Temperature',
              type: 'area',
            },
            title: 'Temperature',
            format: {
              suffix: '°F',
            },
            style: {
              title: {
                'font-size': '14px',
              },
            },
            referenceZone: [
              {
                label: 'Controlled Temperature',
                valuemin: '18',
                valuemax: '9999',
                style: {
                  marker: {
                    fill: '#B71C1C',
                    stroke: '#ff0000',
                  },
                },
              },
            ],
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
