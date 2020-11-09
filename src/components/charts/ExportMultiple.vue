<template>
  <div id="exportMultiple">
    <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataFormat="dataFormat"
      :dataSource="dataSource.columnData"
    ></fusioncharts>
    <fusioncharts
      width="800"
      height="600"
      type="stackedcolumn2d"
      dataFormat="json"
      :dataSource="dataSource.stackedColumnData"
    >
    </fusioncharts>
    <div>
      <button @click="exportToPdf">Export both charts as a single PDF</button>
    </div>
  </div>
</template>

<script>
import dataSource from './config/ExportMultiple';
export default {
  data() {
    return {
      width: '800',
      height: '400',
      type: 'column2d',
      dataFormat: 'json',
      dataSource: dataSource,
    };
  },
  methods: {
    // Export to pdf
    exportToPdf: function() {
      FusionCharts.batchExport({
        exportFormat: 'pdf',
      });
    },
  },
};
</script>

<style></style>
