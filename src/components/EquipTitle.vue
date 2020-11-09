<template id="deviceTitle">
  <div>
    <span id="deviceName">{{ name }}</span
    ><span id="controlGroup">
      <span id="control" @click="controlPoints">Control | </span>
      <span id="config" @click="configPoints">Config | </span
      ><span @click="schedulePoints">Schedule</span>
    </span>
  </div>
</template>

<script>
export default {
  props: ['name'],
  data() {
    return {
      Control: true,
      Config: false,
      Schedule: false,
    };
  },
  methods: {
    controlPoints(event) {
      const that = this;
      that.$emit('controlGroupEnabled', 1);
    },
    configPoints(event) {
      const that = this;
      that.$emit('controlGroupEnabled', 2);
    },
    schedulePoints(event) {
      const that = this;
      that.$emit('controlGroupEnabled', 3);
    },
  },
};
</script>

<style>
#deviceName {
  padding-left: 1rem;
}
#controlGroup {
  cursor: pointer;
  float: right;
}
#deviceTitle {
  margin: 0;
  background-color: #4e4d4d;
  display: inline-block;
}
</style>
