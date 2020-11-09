<template id="frame">
  <iframe
    src="/ord?station:|slot:/Drivers/NiagaraNetwork/Jewish_Federation/virtual|virtual:/Navigation/ERV|view:Graphic"
    name="ervUnitCorpOffice"
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
