<template>
  <div id="updateChart">
    <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataFormat="dataFormat"
      :dataSource="dataSource"
    ></fusioncharts>
    <button @click="updateData">Click to Update Data</button>
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
    updateAnimDuration: '0.4',
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
      type: 'column2d',
      width: '40%',
      height: '400',
      dataFormat: 'json',
      dataSource: dataSource,
    };
  },
  methods: {
    // Updates the chart data
    updateData: function() {
      const data = Object.assign({}, this.dataSource); //clones data
      data.data[2].value = this.getRandomNumber();
      data.data[3].value = this.getRandomNumber();
      this.dataSource = data;
    },
    // Generates a random number between min and max
    getRandomNumber: function() {
      var max = 300,
        min = 50;
      return Math.round((max - min) * Math.random() + min);
    },
  },
};
</script>

<style></style>
