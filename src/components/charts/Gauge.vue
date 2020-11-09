<template>
  <div id="gauge">
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
    caption: "Nordstorm's Customer Satisfaction Score for 2017",
    lowerLimit: '0',
    upperLimit: '100',
    showValue: '1',
    numberSuffix: '%',
    theme: 'fusion',
    showToolTip: '0',
  },
  colorRange: {
    color: [
      {
        minValue: '0',
        maxValue: '50',
        code: '#F2726F',
      },
      {
        minValue: '50',
        maxValue: '75',
        code: '#FFC533',
      },
      {
        minValue: '75',
        maxValue: '100',
        code: '#62B58F',
      },
    ],
  },
  dials: {
    dial: [
      {
        value: '81',
      },
    ],
  },
};
export default {
  data() {
    return {
      width: '100%',
      height: '245',
      type: 'angulargauge',
      dataFormat: 'json',
      dataSource: dataSource,
    };
  },
};
</script>

<style></style>
