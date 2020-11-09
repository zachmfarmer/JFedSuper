<template>
  <div id="niagaraBarChart">
    <v-card>
      <fusioncharts
        id="_niagaraBarChart"
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="dataSource"
      >
      </fusioncharts>
    </v-card>
  </div>
</template>

<script>
// STEP 3: Configure your chart
// const dataSource = {
//   chart: {
//     caption: 'Countries With Most Oil Reserves [2017-18]',
//     subcaption: 'In MMbbl = One Million barrels',
//     xaxisname: 'Country',
//     yaxisname: 'Reserves (MMbbl)',
//     numbersuffix: 'K',
//     theme: 'fusion',
//   },
//   data: chartData,
// };
export default {
  name: 'NiagaraBarChart',
  data() {
    return {
      type: 'column2d',
      chartData: [],
      renderAt: 'chart-container',
      width: '100%',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        data: null,
        chart: {
          caption: 'Four Month KW Usage',
          subcaption: '',
          xaxisname: 'Month',
          yaxisname: 'Usage (kW)',
          numbersuffix: 'kW',
          theme: 'candy',
        },
      },
    };
  },
  mounted() {
    const that = this;

    const ordList = that.$baja.OrdList.make([
      'history:/ABSSupervisor/Bar1',
      'history:/ABSSupervisor/Bar2',
      'history:/ABSSupervisor/Bar3',
      'history:/ABSSupervisor/Bar4',
    ]);
    let dataForChart = [];
    ordList.getOrds().forEach((element) => {
      let dataValues = [];
      element
        .get({
          lease: true,
        })
        .then(function(result) {
          result
            .cursor({
              each: function() {
                const that = this;
                let longStr = this.get().$map.$map.timestamp.$display.toString();
                let str = longStr.substring(0, longStr.indexOf(' CDT'));
                let val = this.get().$map.$map.value.$val.toFixed(2);

                // let data = {
                //   label: 'Bar1',
                //   value: val,
                // };
                dataValues.push(+val);
                //dataForChart.push(data);
              },
              after: function() {
                const name = this.$source.$tableData.config.s[0].v.toString();
                let data = {
                  label: name.substr(name.length - 4),
                  value: arrAvg(dataValues),
                };
                dataForChart.push(data);
              },
            })
            .then(function(cursor) {
              that.dataSource.data = dataForChart;
            });
        });
    });
  },
  created() {
    const that = this;
  },
};

const arrAvg = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
</script>

<style></style>
