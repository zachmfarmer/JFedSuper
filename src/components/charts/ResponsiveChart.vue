<template>
  <div id="responsive">
    <div>
      <div id="container" ref="container">
        <fusioncharts
          :type="type"
          :width="width"
          :height="height"
          :dataFormat="dataFormat"
          :dataSource="dataSource"
          ref="fc"
        ></fusioncharts>
      </div>
    </div>
    <br />
    <div class="change-type">
      <div>
        <input
          name="chartSize"
          type="radio"
          @change="onChartSizeChange"
          value="100x100"
        />
        <label>100 X 100</label>
      </div>
      <div>
        <input
          name="chartSize"
          type="radio"
          @change="onChartSizeChange"
          value="70x70"
          checked
        />
        <label>70 X 70</label>
      </div>
      <div>
        <input
          name="chartSize"
          type="radio"
          @change="onChartSizeChange"
          value="30x30"
        />
        <label>30 X 30</label>
      </div>
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
      width: '100%',
      height: '100%',
      type: 'column2d',
      dataFormat: 'json',
      dataSource: dataSource,
    };
  },
  methods: {
    // changes the height and width of the parent container of FusionCharts
    onChartSizeChange: function(e) {
      const container = this.$refs.container,
        size = e.target.value.split('x');
      container.style.width = size[0] + 'px';
      container.style.height = size[1] + 'px';
    },
  },
};
</script>

<style></style>
