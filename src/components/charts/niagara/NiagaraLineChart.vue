<template>
  <div id="niagaraSeries">
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
const schema = [
  {
    name: 'Time',
    type: 'date',
    format: '%d-%b-%y %-I:%-M:%-S %p', // 15-Aug-20 11:55:52 AM
  },
  {
    name: 'Temperature',
    type: 'number',
  },
];
export default {
  data() {
    return {
      historyData: [],
      width: '100%',
      height: '400',
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
        plotConfig: {
          generic: {
            connectNullData: true,
          },
        },
        caption: {
          text: 'Fake Ramp Data',
        },
        subcaption: {
          text: 'subcaption',
        },
        yAxis: [
          {
            plot: {
              value: 'Temperature',
              type: 'line',
            },
            format: {
              suffix: ' °F',
            },
            title: 'Temperature',
          },
        ],
        xAxis: {
          outputTimeFormat: {
            day: '%d-%b-%y %-I:%-M:%-S %p CDT',
          },
        },
      },
    };
  },
  mounted: function() {
    const that = this;
    that.$baja.Ord.make(
      // 'history:/ABSSupervisor/Ramp?period=timeRange;start=2020-08-19T00:00:00.000-8:00;end=2020-08-20T00:00:00.000-8:00',
      'history:/ABSSupervisor/Ramp?period=monthToDate'
    )
      .get({
        lease: true,
      })
      .then(function(result) {
        result
          .cursor({
            limit: 500,
            each: function() {
              let longStr = this.get().$map.$map.timestamp.$display.toString();
              let str = longStr.substring(0, longStr.indexOf(' CDT'));
              //console.log(str);
              let val = +this.get().$map.$map.value.$val.toFixed(2);
              let arr = [str, val];
              that.historyData.push(arr);
            },
            after: function() {
              const fusionTable = new FusionCharts.DataStore().createDataTable(
                that.historyData,
                schema
              );
              that.dataSource.data = fusionTable;
            },
          })
          .then(function(cursor) {
            return;
          });
      });
  },
};
</script>

<style></style>
