<template>
  <div id="updateAttrs">
    <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataFormat="dataFormat"
      :dataSource="dataSource"
    ></fusioncharts>
    <button @click="changeBackground">Change Chart Background</button>
    <button @click="makeCaptionLeft">Make Caption text left-aligned</button>
    <button @click="resetAttr">Reset Attributes</button>
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
      width: '40%',
      height: '400',
      type: 'column2d',
      dataFormat: 'json',
      dataSource: dataSource,
    };
  },
  created: function() {
    this.originalData = JSON.parse(JSON.stringify(this.dataSource)); //for deep copy
  },
  methods: {
    // Changes chart background
    changeBackground: function() {
      const data = Object.assign({}, this.dataSource); //copy of object
      data.chart.bgColor = '#efefef';
      this.dataSource = data;
    },
    // Resets all the chart data to it's initial verison
    resetAttr: function() {
      this.dataSource = JSON.parse(JSON.stringify(this.originalData));
    },
    // Makes the caption text left aligned
    makeCaptionLeft: function() {
      const data = Object.assign({}, this.dataSource);
      data.chart.captionAlignment = 'left';
      this.dataSource = data;
    },
  },
};
</script>

<style></style>
