<template>
  <div id="app">
    <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataFormat="dataFormat"
      :dataSource="dataSource"
      @disposed="disposed"
    ></fusioncharts>
    <div v-html="message"></div>
    <br />
    <div>
      <button v-bind:class="{ disabled: listen }" @click="attachHandler">
        Add/Listen to dataplotclick event
      </button>
      <button v-bind:class="{ disabled: remove }" @click="removeHandler">
        Remove dataplotclick event
      </button>
    </div>
  </div>
</template>

<script>
var dataSource = {
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
var handler = function(e) {
    this.message = `You have clicked plot <b>${e.data.categoryLabel}</b> whose value is <b>${e.data.displayValue}</b>.`;
  },
  attached = false,
  defaultMessage =
    'Click the below buttons to add an event dynamically to the chart.';
export default {
  data() {
    return {
      width: '50%',
      height: '400',
      type: 'column2d',
      dataFormat: 'json',
      dataSource: dataSource,
      listen: false,
      remove: true,
      message: defaultMessage,
    };
  },
  methods: {
    // attach event handler to 'dataPlotClick' event once
    attachHandler: function() {
      if (attached) return;
      attached = true;
      this.listen = true;
      this.remove = false;
      handler = handler.bind(this);
      this.message = 'Click on a plot to see the value along with the label';
      FusionCharts.addEventListener('dataPlotClick', handler);
    },
    // removes the event handler of 'dataPlotClick' when not required
    removeHandler: function() {
      attached = false;
      this.listen = false;
      this.remove = true;
      this.message = defaultMessage;
      FusionCharts.removeEventListener('dataPlotClick', handler);
    },
    // removes the event handler of 'dataPlotClick' when chart get disposed
    disposed: function() {
      FusionCharts.removeEventListener('dataPlotClick', handler);
    },
  },
};
</script>

<style></style>
