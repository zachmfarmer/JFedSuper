<template>
  <div id="specialEvent">
    <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataFormat="dataFormat"
      :dataSource="dataSource"
      @dataplotdragend="dataplotdragend"
    ></fusioncharts>
    <div v-html="message"></div>
  </div>
</template>

<script>
const dataSource = {
  chart: {
    caption: 'Android and iOS Devices Sales Projections',
    subCaption: 'Drag the top of columns to adjust projections for 2017 & 2018',
    numberPrefix: '$',
    numberSuffix: 'M',
    yaxismaxvalue: '200',
    theme: 'fusion',
    plotToolText: '<b>$label</b><br>$seriesName: <b>$dataValue</b>',
  },
  categories: [
    {
      category: [
        {
          label: '2014',
          fontItalic: '0',
        },
        {
          label: '2015',
          fontItalic: '0',
        },
        {
          label: '2016',
          fontItalic: '0',
        },
        {
          label: '2017 (Projected)',
        },
        {
          label: '2018 (Projected)',
        },
      ],
    },
  ],
  dataset: [
    {
      seriesname: 'Android Devices',
      data: [
        {
          value: '73',
          alpha: '100',
          allowDrag: '0',
        },
        {
          value: '80',
          alpha: '100',
          allowDrag: '0',
        },
        {
          value: '97',
          alpha: '100',
          allowDrag: '0',
        },
        {
          value: '110',
          toolText: '<b>$label</b><br>$seriesName: <b>$dataValue</b>',
        },
        {
          value: '180',
          toolText: '<b>$label</b><br>$seriesName: <b>$dataValue</b>',
        },
      ],
    },
    {
      seriesname: 'iOS Devices',
      data: [
        {
          value: '63.2',
          alpha: '100',
          allowDrag: '0',
        },
        {
          value: '68',
          alpha: '100',
          allowDrag: '0',
        },
        {
          value: '82',
          alpha: '100',
          allowDrag: '0',
        },
        {
          value: '99',
          toolText: '<b>$label</b><br>$seriesName: <b>$dataValue</b>',
        },
        {
          value: '150',
          toolText: '<b>$label</b><br>$seriesName: <b>$dataValue</b>',
        },
      ],
    },
  ],
};
export default {
  data() {
    return {
      width: '40%',
      height: '400',
      type: 'dragcolumn2d',
      dataFormat: 'json',
      dataSource: dataSource,
      message:
        'Drag any column for years 2017 or 2018 to see updated value along with the label',
    };
  },
  methods: {
    // uses the data of the event 'dataPlotDragEnd' and formats them using FusionCharts formatNumber API
    dataplotdragend: function(e) {
      let label = JSON.parse(this.sourceData).categories[0].category[
        e.data.dataIndex
      ].label;
      let startValue = FusionCharts.formatNumber(e.data.startValue, {
          decimals: 2,
        }),
        endValue = FusionCharts.formatNumber(e.data.endValue, { decimals: 2 });
      this.message = `<b>${e.data.datasetName}</b> is modified to <b>${endValue}M</b> from <b>${startValue}M</b> or <b>${label}</b>`;
    },
  },
};
</script>

<style></style>
