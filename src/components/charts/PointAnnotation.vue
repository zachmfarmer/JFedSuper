<template>
  <div id="_pointAnnotation">
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
    caption: 'Weeks kW',
    subCaption: 'Last week',
    xAxisName: 'Day',
    yAxisName: 'kW',
    showValues: '0',
    theme: 'zune',
  },
  annotations: {
    groups: [
      {
        id: 'anchor-highlight',
        items: [
          {
            id: 'high-star',
            type: 'circle',
            x: '$dataset.0.set.2.x',
            y: '$dataset.0.set.2.y',
            radius: '12',
            color: '#6baa01',
            border: '2',
            borderColor: '#f8bd19',
          },
          {
            id: 'label',
            type: 'text',
            text: 'Highest Peak kW 25.5K',
            fillcolor: '#6baa01',
            rotate: '90',
            x: '$dataset.0.set.2.x+75',
            y: '$dataset.0.set.2.y-2',
          },
        ],
      },
    ],
  },
  data: [
    {
      label: 'Mon',
      value: '15123',
    },
    {
      label: 'Tue',
      value: '14233',
    },
    {
      label: 'Wed',
      value: '25507',
    },
    {
      label: 'Thu',
      value: '9110',
    },
    {
      label: 'Fri',
      value: '15529',
    },
    {
      label: 'Sat',
      value: '20803',
    },
    {
      label: 'Sun',
      value: '19202',
    },
  ],
};
export default {
  data() {
    return {
      width: '100%',
      height: '245',
      type: 'spline',
      dataFormat: 'json',
      dataSource: dataSource,
    };
  },
};
</script>

<style>
#_pointAnnotation {
  padding-right: 25px;
}
</style>
