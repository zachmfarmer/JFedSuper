<template>
  <div id="_stacked3d">
    <v-card>
      <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="dataSource"
      >
      </fusioncharts>
    </v-card>
  </div>
</template>

<script>
const dataSource = {
  chart: {
    caption: 'Multizone Satisfied Zones',
    subCaption: 'Corparate Office',
    xAxisname: 'Multizone',
    yAxisName: 'Number Of Zones',
    // numberPrefix: '$',
    theme: 'zune',
  },
  categories: [
    {
      category: [
        {
          label: 'MZ1',
        },
        {
          label: 'MZ2',
        },
        {
          label: 'MZ3',
        },
        {
          label: 'MZ4',
        },
        {
          label: 'MZ5',
        },
        {
          label: 'MZ6',
        },
        {
          label: 'MZ7',
        },
        {
          label: 'MZ8',
        },
      ],
    },
  ],
  dataset: [
    {
      color: '#B71C1C',
      alpha: '60',
      seriesname: 'Unsatisfied',
      data: [
        {
          value: '3',
        },
        {
          value: '4',
        },
        {
          value: '2',
        },
        {
          value: '1',
        },
        {
          value: '0',
        },
        {
          value: '0',
        },
        {
          value: '3',
        },
        {
          value: '2',
        },
      ],
    },
    {
      color: '#67BEB3',
      seriesname: 'Satisfied',
      data: [
        {
          value: '5',
        },
        {
          value: '4',
        },
        {
          value: '6',
        },
        {
          value: '8',
        },
        {
          value: '7',
        },
        {
          value: '5',
        },
        {
          value: '4',
        },
        {
          value: '5',
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
      type: 'stackedColumn2d',
      dataFormat: 'json',
      dataSource: dataSource,
    };
  },
};
</script>

<style>
#_stacked3d {
  padding-right: 25px;
}
</style>
