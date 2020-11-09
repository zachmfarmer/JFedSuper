<template
  ><div id="_msAreaChart">
    <v-card>
      <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="dataSource"
      ></fusioncharts>
    </v-card>
  </div>
</template>

<script>
const dataSource = {
  chart: {
    caption: 'Supply Return Water Temp Comparison',
    subCaption: 'Supply Temp vs Return Temp',
    xAxisName: 'Day',
    yAxisName: 'Temperature',
    numberSuffix: ' °F',
    plotFillAlpha: '50',
    theme: 'fusion',
    // showValues: false,
  },
  categories: [
    {
      category: [
        {
          label: 'Mon',
        },
        {
          label: 'Tue',
        },
        {
          label: 'Wed',
        },
        {
          label: 'Thu',
        },
        {
          label: 'Fri',
        },
        {
          label: 'Sat',
        },
        {
          label: 'Sun',
        },
      ],
    },
  ],
  dataset: [
    {
      color: '#4E7755',
      seriesname: 'Supply Temp',
      data: [
        {
          value: '46',
        },
        {
          value: '45',
        },
        {
          value: '41',
        },
        {
          value: '40',
        },
        {
          value: '47',
        },
        {
          value: '49',
        },
        {
          value: '53',
        },
      ],
    },
    {
      // color: '#CD2E31',
      seriesname: 'Return Temp',
      data: [
        {
          value: '51',
        },
        {
          value: '51',
        },
        {
          value: '48',
        },
        {
          value: '47',
        },
        {
          value: '52',
        },
        {
          value: '56',
        },
        {
          value: '59',
        },
      ],
    },
  ],
};

export default {
  data() {
    return {
      width: '100%',
      height: '245',
      type: 'MSArea',
      dataFormat: 'json',
      dataSource: dataSource,
    };
  },
  mounted: function() {},
};
</script>

<style>
#_msAreaChart {
  padding-right: 25px;
}
</style>
