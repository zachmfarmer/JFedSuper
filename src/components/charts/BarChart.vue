<template>
  <div id="chart">
    <div id="chart-container">
      <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="dataSource"
      >
      </fusioncharts>
    </div>
  </div>
</template>

<script>
const chartData = [
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
];

// STEP 3: Configure your chart
const dataSource = {
  chart: {
    caption: 'Countries With Most Oil Reserves [2017-18]',
    subcaption: 'In MMbbl = One Million barrels',
    xaxisname: 'Country',
    yaxisname: 'Reserves (MMbbl)',
    numbersuffix: 'K',
    theme: 'fusion',
  },
  data: chartData,
};
export default {
  name: 'chart',
  data() {
    return {
      type: 'column2d',
      renderAt: 'chart-container',
      width: '35%',
      height: '350',
      dataFormat: 'json',
      dataSource,
    };
  },
};
</script>

<style></style>
