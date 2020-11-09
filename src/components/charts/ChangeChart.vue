<template>
  <div id="change">
    <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataFormat="dataFormat"
      :dataSource="dataSource"
      ref="fc"
    ></fusioncharts>
    <div>
      <div>
        <input
          name="chartType"
          type="radio"
          @change="onChartTypeChange"
          value="Column2d"
          checked
        />
        <label>Column 2D Chart</label>
      </div>
      <div>
        <input
          name="chartType"
          type="radio"
          @change="onChartTypeChange"
          value="Bar2d"
        />
        <label>Bar 2D Chart</label>
      </div>
      <div>
        <input
          name="chartType"
          type="radio"
          @change="onChartTypeChange"
          value="Pie2d"
        />
        <label>Pie 2D Chart</label>
      </div>
    </div>
  </div>
</template>

<script>
const dataSource = {
  chart: {
    caption: 'Recommended Portfolio Split',
    subCaption: 'For a net-worth of $1M',
    showValues: '1',
    showPercentInTooltip: '0',
    numberPrefix: '$',
    enableMultiSlicing: '1',
    theme: 'fusion',
  },
  data: [
    {
      label: 'Equity',
      value: '300000',
    },
    {
      label: 'Debt',
      value: '230000',
    },
    {
      label: 'Bullion',
      value: '180000',
    },
    {
      label: 'Real-estate',
      value: '270000',
    },
    {
      label: 'Insurance',
      value: '20000',
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
    // uses the chartInstance API 'chartType' to change the chart type after render
    onChartTypeChange: function(e) {
      const chart = this.$refs.fc.chartObj,
        type = e.target.value.toLowerCase();
      chart.chartType(type);
    },
  },
};
</script>

<style></style>
