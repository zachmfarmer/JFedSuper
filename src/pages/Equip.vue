<template>
  <div id="equipContainer">
    <EquipTitle
      :name="name"
      id="equipTitle"
      @controlGroupEnabled="openedGroup"
      @configGroupEnabled="openedGroup"
      @scheduleGroupEnabled="openedGroup"
    />
    <iframe id="equipFrame" :src="path" name="equipFrame"></iframe>
    <Control id="control" class="lowerPanel" v-if="groupOpen === 1" />
    <Config id="config" class="lowerPanel" v-if="groupOpen === 2" />
    <Schedule id="schedule" class="lowerPanel" v-if="groupOpen === 3" />
  </div>
</template>

<script>
import Control from './Control.vue';
import Config from './Config.vue';
import Schedule from '../components/Schedule.vue';
import EquipTitle from '../components/EquipTitle.vue';

export default {
  data() {
    return {
      path: '',
      name: '',
      groupOpen: 1,
    };
  },
  computed: {
    deviceName() {
      const that = this;
      that.$baja.Ord.make(that.path)
        .get()
        .then(function(device) {
          that.name = device;
          //console.log(device);
        });
    },
  },
  components: {
    Control,
    Config,
    Schedule,
    EquipTitle,
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const that = this;
      that.path = that.$router.history.current.name;
      that.$baja.Ord.make(that.path)
        .get()
        .then(function(device) {
          that.name = device.getNavDisplayName();
          //console.log(device);
        });
    },
    openedGroup(val) {
      const that = this;
      that.groupOpen = val;
    },
  },
};
</script>

<style scoped>
iframe {
  border: none;
  overflow: hidden !important;
}
.lowerPanel {
  grid-area: lowerPanel;
}
#schedule {
  width: 100%;
  height: 100%;
}
#equipTitle {
  grid-area: ahuTitle;
  background-color: #4e4d4d;
}
#equipFrame {
  grid-area: ahuFrame;
  height: 100%;
  width: 100%;
  overflow: hidden !important;
}
#pointContainer {
  grid-area: pointContainer;
}
#equipContainer {
  background-color: #c0c0c0;
  height: 100%;
  height: 91vh;
  overflow: hidden;
  display: grid;
  /* grid-template-columns: auto; */
  grid-template-rows: 5% 40% auto;
  grid-template-areas:
    'ahuTitle'
    'ahuFrame'
    'lowerPanel';
}
</style>
