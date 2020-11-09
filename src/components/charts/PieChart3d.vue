<template>
  <div id="3dPie">
    <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataFormat="dataFormat"
      :dataSource="dataSource"
    ></fusioncharts>
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
      type: 'pie3d',
      width: '100%',
      height: '400',
      dataFormat: 'json',
      dataSource: dataSource,
    };
  },
};
</script>

<style></style>
