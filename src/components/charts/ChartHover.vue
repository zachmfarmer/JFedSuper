<template>
  <div id="hoverChart">
    <v-card>
      <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="dataSource"
        @dataplotRollover="dataplotRollover"
      ></fusioncharts>
      <div v-html="displayValue" id="_displayText"></div>
    </v-card>
  </div>
</template>

<script>
const dataSource = {
  chart: {
    caption: 'Multizone Runtimes',
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
      height: '490',
      type: 'column2d',
      dataFormat: 'json',
      dataSource: dataSource,
      displayValue: 'Hover on the plot to see the value along with the label',
    };
  },
  methods: {
    // uses the data info of the event 'dataplotrollover' and represents it
    dataplotRollover: function(e) {
      this.displayValue = `You are currently hovering over <strong>${e.data.categoryLabel}</strong> whose value is <strong>${e.data.displayValue}</strong>`;
    },
  },
};
</script>

<style>
#_displayText {
  text-align: center;
}
</style>
