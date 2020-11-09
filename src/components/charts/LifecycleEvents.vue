<template>
  <div id="lifecycle">
    <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataFormat="dataFormat"
      :dataSource="dataSource"
      @beforeDataUpdate="beforeDataUpdate"
      @dataUpdated="dataUpdated"
      @drawComplete="drawComplete"
      @renderComplete="renderComplete"
    ></fusioncharts>
    <div v-html="displayValue"></div>
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
      displayValue: '<b>Status: </b>',
    };
  },
  methods: {
    // Binding Life Cycle events
    beforeDataUpdate: function() {
      let prevValue = this.displayValue;
      this.displayValue = prevValue + ' beforeDataUpdate';
    },
    dataUpdated: function() {
      let prevValue = this.displayValue;
      this.displayValue = prevValue + ', dataUpdated';
    },
    drawComplete: function() {
      let prevValue = this.displayValue;
      this.displayValue = prevValue + ', drawComplete';
    },
    renderComplete: function() {
      let prevValue = this.displayValue;
      this.displayValue = prevValue + ', renderComplete';
    },
  },
};
</script>

<style></style>
