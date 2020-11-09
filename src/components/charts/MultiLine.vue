<template
  ><div id="_msSplineChart">
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
    caption: 'Multizone Supply Air Temperatures',
    xAxisName: 'Day',
    yAxisName: 'Supply Temperature',
    theme: 'zune',
    showValues: false,
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
      seriesname: 'MZ_1',
      data: [
        {
          value: '15123',
        },
        {
          value: '14233',
        },
        {
          value: '25507',
        },
        {
          value: '9110',
        },
        {
          value: '15529',
        },
        {
          value: '20803',
        },
        {
          value: '19202',
        },
      ],
    },
    {
      seriesname: 'MZ_2',
      data: [
        {
          value: '13400',
        },
        {
          value: '12800',
        },
        {
          value: '22800',
        },
        {
          value: '12400',
        },
        {
          value: '15800',
        },
        {
          value: '19800',
        },
        {
          value: '21800',
        },
      ],
    },
    {
      seriesname: 'MZ_3',
      data: [
        {
          value: '12402',
        },
        {
          value: '12200',
        },
        {
          value: '32800',
        },
        {
          value: '10000',
        },
        {
          value: '16600',
        },
        {
          value: '23000',
        },
        {
          value: '19800',
        },
      ],
    },
    {
      seriesname: 'MZ_4',
      data: [
        {
          value: '12000',
        },
        {
          value: '25000',
        },
        {
          value: '20000',
        },
        {
          value: '18000',
        },
        {
          value: '29654',
        },
        {
          value: '25768',
        },
        {
          value: '21800',
        },
      ],
    },
    {
      seriesname: 'MZ_5',
      data: [
        {
          value: '13400',
        },
        {
          value: '12800',
        },
        {
          value: '22800',
        },
        {
          value: '12400',
        },
        {
          value: '15800',
        },
        {
          value: '19800',
        },
        {
          value: '21800',
        },
      ],
    },
    {
      seriesname: 'MZ_6',
      data: [
        {
          value: '12000',
        },
        {
          value: '25000',
        },
        {
          value: '20000',
        },
        {
          value: '18000',
        },
        {
          value: '29654',
        },
        {
          value: '25768',
        },
        {
          value: '21800',
        },
      ],
    },
    {
      seriesname: 'MZ_7',
      data: [
        {
          value: '13400',
        },
        {
          value: '12800',
        },
        {
          value: '22800',
        },
        {
          value: '12400',
        },
        {
          value: '15800',
        },
        {
          value: '19800',
        },
        {
          value: '21800',
        },
      ],
    },
    {
      seriesname: 'MZ_8',
      data: [
        {
          value: '12000',
        },
        {
          value: '25000',
        },
        {
          value: '20000',
        },
        {
          value: '18000',
        },
        {
          value: '29654',
        },
        {
          value: '25768',
        },
        {
          value: '21800',
        },
      ],
    },
  ],
};

export default {
  data() {
    return {
      width: '100%',
      height: '515',
      type: 'msline',
      dataFormat: 'json',
      dataSource: dataSource,
    };
  },
  mounted: function() {},
};
</script>

<style>
#_msSplineChart {
  padding-left: 20px;
}
</style>
