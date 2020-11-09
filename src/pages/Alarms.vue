<template>
  <iframe
    id="alarms"
    src="/ord?station:%7Cslot:/Services/AlarmService/MainAlarmConsole"
    name="alarms"
  ></iframe>
</template>

<script>
export default {};
</script>

<style>
#alarms {
  margin-top: 30px;
  width: 100%;
  height: 100%;
  height: 85vh;
}
</style>
