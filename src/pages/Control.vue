<template>
  <div>
    <h3>Control</h3>
    <ul>
      <li v-for="point in controlPoints" :key="point.$handle">
        {{ point.getSlotPath() }}
      </li>
    </ul>
    <!-- <PointWidget /> -->
    <h2>{{ outDisplay }}</h2>
  </div>
</template>

<script>
import PointWidget from '../components/PointWidget.vue';
export default {
  components: {
    PointWidget,
  },
  data() {
    return {
      controlPoints: [],
      batchObjects: '',
      outDisplay: '',
    };
  },
  mounted() {
    const that = this;
    that.$baja.Ord.make(that.$router.history.current.name)
      .get()
      .then(function(device) {
        const values = device.$map.$map;
        const keyArray = Object.keys(values);
        //console.log(values);
        //console.log(keyArray.length);
        for (let i = 0; i < keyArray.length; i++) {
          if (
            values[keyArray[i]].$val.getType().$typeSpec.includes('control')
          ) {
            //console.log(values[keyArray[i]].$val);
            values[keyArray[i]].$val.tags().then(function(tagList) {
              const tags = tagList.getImpliedTags().$tags;
              //console.log(tags);
              for (let y = 0; y < tags.length; y++) {
                if (tags[y].$id.$name === 'control') {
                  that.controlPoints.push(values[keyArray[i]].$val);
                }
              }
            });
          }
        }
      });

    var r = new that.$baja.BatchResolve([
      'station:|slot:/test/SupplyAirSetpoint',
      'station:|slot:/test/SupplyAirTemp',
    ]);
    var sub = new that.$baja.Subscriber();

    r.resolve({ subscriber: sub })
      .then(function() {
        // Get resolved objects
        var obj = r.getTargetObjects();
        that.outDisplay = obj[1].getOutDisplay();
        console.log(obj[0].getOutDisplay());

        //Called whenever the Ramp changes.
        sub.attach('changed', function(prop) {
          if (prop.getName() === 'out') {
            that.outDisplay = obj[1].getOutDisplay();
          }
        });
      })
      .catch(function(err) {
        // Called if any of the ORDs fail to resolve
      })
      .finally(function() {
        // sub.unsubscribeAll();
        // sub.detach();
      });
  },
};
</script>

<style></style>
