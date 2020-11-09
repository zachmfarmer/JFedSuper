<template>
  <div id="3dPie">
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
const data = [
  {
    label: 'Building 1',
    value: '300000',
  },
  {
    label: 'Building 2',
    value: '230000',
  },
  {
    label: 'Building 3',
    value: '210000',
  },
  {
    label: 'Building 4',
    value: '270000',
  },
  {
    label: 'Building 5',
    value: '222000',
  },
];
export default {
  data() {
    return {
      type: 'pie3d',
      width: '100%',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        data: data,
        chart: {
          caption: 'Energy Usage per Building',
          subCaption: '',
          showValues: '1',
          showPercentInTooltip: '0',
          numberPrefix: '$',
          enableMultiSlicing: '1',
          theme: 'zune',
        },
      },
    };
  },
  mounted() {},
};
</script>

<style></style>
