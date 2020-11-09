<template>
  <div id="api">
    <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataFormat="dataFormat"
      :dataSource="dataSource"
      ref="fc"
    ></fusioncharts>
    <div>
      <button @click="changeCaption">CHANGE CAPTION TO: CAPTION</button>
      <button @click="changeXAxisName">
        CHANGE X_AXIS NAME TO: X-AXIS NAME
      </button>
      <button @click="changeYAxisName">
        CHANGE Y_AXIS NAME TO: Y-AXIS NAME
      </button>
      <button @click="resetAttr">RESET</button>
    </div>
  </div>
</template>

<script>
const dataSource = {
  chart: {
    caption: 'Countries With Most Oil Reserves [2017-18]',
    subCaption: 'In MMbbl = One Million barrels',
    xAxisName: 'Country',
    yAxisName: 'Reserves (MMbbl)',
    numberSuffix: 'K',
    theme: 'fusion',
  },
  data: [
    {
      label: 'Venezuela',
      value: '290',
    },
    {
      label: 'Saudi',
      value: '260',
    },
    {
      label: 'Canada',
      value: '180',
    },
    {
      label: 'Iran',
      value: '140',
    },
    {
      label: 'Russia',
      value: '115',
    },
    {
      label: 'UAE',
      value: '100',
    },
    {
      label: 'US',
      value: '30',
    },
    {
      label: 'China',
      value: '30',
    },
  ],
};
export default {
  data() {
    return {
      width: '50%',
      height: '400',
      type: 'column2d',
      dataFormat: 'json',
      dataSource: dataSource,
    };
  },
  methods: {
    // chnages caption text
    changeCaption: function() {
      const chart = this.$refs.fc.chartObj;
      chart.setChartAttribute('caption', 'Caption');
    },
    // changes x axis name
    changeXAxisName: function() {
      const chart = this.$refs.fc.chartObj;
      chart.setChartAttribute('xAxisName', 'X-Axis Name');
    },
    // changes y axis name
    changeYAxisName: function() {
      const chart = this.$refs.fc.chartObj;
      chart.setChartAttribute('yAxisName', 'Y-Axis Name');
    },
    // resets all chart attributes to default
    resetAttr: function() {
      const chart = this.$refs.fc.chartObj;
      Object.entries(this.dataSource.chart).forEach((el) =>
        chart.setChartAttribute(el[0], el[1])
      );
    },
  },
};
</script>

<style></style>
