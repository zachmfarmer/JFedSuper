<template>
  <div id="chartPercent">
    <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataFormat="dataFormat"
      :dataSource="dataSource"
      @dataplotRollover="dataplotRollover"
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
      displayValue: 'Hover on the plot to see the value along with the label',
    };
  },
  created: function() {
    let myData = this.dataSource.data;
    this.total = myData.reduce((p, c) => p + Number(c.value), 0);
  },
  methods: {
    // uses the data info of the event 'dataplotrollover' and represents it
    dataplotRollover: function(e) {
      let value = ((e.data.value / this.total) * 100).toFixed(2);
      this.displayValue = `<strong>${e.data.categoryLabel}</strong> is <strong>${value}%</strong> of top 8 oil reserve countries`;
    },
  },
};
</script>

<style></style>
