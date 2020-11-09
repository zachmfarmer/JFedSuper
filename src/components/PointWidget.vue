<template>
  <div id="widget">
    <button @click="setValueOff" id="set">Off</button>
    <button @click="setValueOn" id="set">On</button>
    <button @click="setValueAuto" id="set">Auto</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: '',
    };
  },
  mounted() {
    const that = this;
    that.$baja.Ord.make('station:|slot:/setMe')
      .get({ lease: true })
      .then(function(setValue) {
        that.status = setValue.getOutDisplay();
      });
  },
  methods: {
    setValueOff() {
      const that = this;
      that.$baja.Ord.make('station:|slot:/setMe')
        .get({ lease: true })
        .then(function(set) {
          set.invoke({
            slot: 'inactive',
            value: false,
          });
        });
    },
    setValueOn() {
      const that = this;
      that.$baja.Ord.make('station:|slot:/setMe')
        .get({ lease: true })
        .then(function(set) {
          set.active('true');
        });
    },
    setValueAuto() {
      const that = this;
      that.$baja.Ord.make('station:|slot:/setMe')
        .get({ lease: true })
        .then(function(set) {
          set.invoke({
            slot: 'auto',
          });
        });
    },
  },
};
</script>

<style>
#set {
  height: 30%;
  width: 30%;
}
#widget {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  width: 25%;
  height: 25%;
  background-color: beige;
  border-radius: 25px;
}
</style>
