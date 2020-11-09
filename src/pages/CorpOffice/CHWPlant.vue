<template id="frame">
  <iframe
    src="/ord?station:|slot:/Drivers/NiagaraNetwork/Jewish_Federation/virtual|virtual:/Navigation/CHWSys|view:Graphic"
    name="floor1CHWSys"
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
  height: 85vh;
  width: 100%;
  overflow: hidden;
}
</style>
