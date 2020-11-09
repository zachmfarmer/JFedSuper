<template>
  <div id="theme">
    <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataFormat="dataFormat"
      :dataSource="dataSource"
      ref="fc"
    ></fusioncharts>
    <div style="display: flex; position: absolute; bottom: 2px;">
      <div id="select-text">Choose a theme:</div>
      <div class="change-type">
        <input
          name="theme"
          type="radio"
          @change="onChangeTheme"
          value="Fusion"
          checked
        />
        <label>Fusion</label>
      </div>
      <div>
        <input
          name="theme"
          type="radio"
          @change="onChangeTheme"
          value="Gammel"
        />
        <label>Gammel</label>
      </div>
      <div>
        <input
          name="theme"
          type="radio"
          @change="onChangeTheme"
          value="Candy"
        />
        <label>Candy</label>
      </div>
      <div>
        <input name="theme" type="radio" @change="onChangeTheme" value="Zune" />
        <label>Zune</label>
      </div>
      <div>
        <input
          name="theme"
          type="radio"
          @change="onChangeTheme"
          value="Ocean"
        />
        <label>Ocean</label>
      </div>
      <div>
        <input
          name="theme"
          type="radio"
          @change="onChangeTheme"
          value="Carbon"
        />
        <label>Carbon</label>
      </div>
    </div>
  </div></template
>

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
    // sets the theme attribute through FusionCharts API 'setChartAttribute'
    onChangeTheme: function(e) {
      const chart = this.$refs.fc.chartObj,
        theme = e.target.value.toLowerCase();
      chart.setChartAttribute('theme', theme);
    },
  },
};
</script>

<style></style>
