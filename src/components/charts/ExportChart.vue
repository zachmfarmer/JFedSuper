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
export default {};
</script>

<style></style>
