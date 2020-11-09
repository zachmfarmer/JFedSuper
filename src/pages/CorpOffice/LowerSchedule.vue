<template id="frame">
  <iframe
    src="/ord?station:|slot:/Drivers/NiagaraNetwork/Jewish_Federation/virtual|virtual:/Drivers/Schedules/Lower_Floor"
    name="lowerScheduleCorpOffice"
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

<style scoped>
iframe {
  width: 100%;
  margin-top: 20px;
  margin-left: 5px;
  height: 85vh;
  width: 100%;
  overflow: hidden;
}
</style>
