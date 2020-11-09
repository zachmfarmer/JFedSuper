<template id="frame">
  <iframe
    src="/ord?station:%7Cfile:^px/navigation/floorplans/Floor3/Floor3_3.px"
    name="floor3CorpOffice"
  ></iframe>
</template>

<script>
export default {
  props: ['sourceFrame'],
  mounted() {
    const that = this;
  },
};
</script>

<style>
iframe {
  width: 100%;
  height: 100%;
  height: 91vh;
  width: 100%;
  overflow: hidden;
}
</style>
