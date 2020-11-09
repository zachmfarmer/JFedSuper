<template>
  <div id="_mainApp">
    <!-- <BarChart />
    <SimpleTimeSeries />
    <ColumnChart />
    <AreaChart />
    <Pie3d />
    <Gauge />
    <ColumnLine />
    <TwoVariables />
    <UpdateChartData />
    <UpdateChartAttrs />
    <ChartHover />
    <ChartPercentage />
    <DrillDownChart />
    <ReferenceLineChart />
    <AnnotateSingle />
    <SingleEventChart />
    <RangeEventChart />
    <WorldMap />
    <ExportMultiple />
    <SpecialEvent />
    <LifecycleEvents />
    <EventListener />
    <SliceDataPie />
    <ResponsiveChart />
    <ChangeChart />
    <PointAnnotation />
    <APIMethodChart />
    <MultiSeries />
    <ThemeChart />
    <CandlestickChart /> -->
    <v-row>
      <!-- <v-col cols="6">
        <NiagaraMultiSeries />
      </v-col> -->
      <v-col cols="12">
        <ReferenceLineChart />
        <!-- <CarouselTest /> -->
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <MultiLine />
      </v-col>
      <v-col cols="6" class="pa-0">
        <v-row>
          <v-col cols="12">
            <Stacked3dChart />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <MSAreaChart />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col cols="4" class="pa-4">
        <NiagaraPieChart />
      </v-col>
      <v-col cols="4" class="pa-4">
        <NiagaraBarChart />
      </v-col>
      <v-col cols="4" class="pa-4">
        <NiagaraLineChart />
      </v-col>
    </v-row> -->

    <!-- <ColumnLineAreaChart /> -->
  </div>
</template>

<script>
import BarChart from './charts/BarChart.vue';
import SimpleTimeSeries from './charts/SimpleTimeSeries.vue';
import ColumnChart from './charts/ColumnChart.vue';
import AreaChart from './charts/AreaChart.vue';
import Pie3d from './charts/PieChart3d.vue';
import Gauge from './charts/Gauge.vue';
import ColumnLineAreaChart from './charts/ColumnLineAreaChart.vue';
import ColumnLine from './charts/ColumnLine.vue';
import MultiSeries from './charts/MultipleSeriesChart.vue';
import TwoVariables from './charts/TwoVariablesChart.vue';
import UpdateChartData from './charts/UpdateChartData.vue';
import UpdateChartAttrs from './charts/UpdateChartAttrs.vue';
import ChartHover from './charts/ChartHover.vue';
import ChartPercentage from './charts/ChartPercentage.vue';
import DrillDownChart from './charts/DrillDownChart.vue';
import ReferenceLineChart from './charts/ReferenceLineChart.vue';
import AnnotateSingle from './charts/AnnotateSingle.vue';
import SingleEventChart from './charts/SingleEventChart.vue';
import RangeEventChart from './charts/RangeEventChart.vue';
import WorldMap from './charts/WorldMap.vue';
import ExportMultiple from './charts/ExportMultiple.vue';
import SpecialEvent from './charts/SpecialEvent.vue';
import LifecycleEvents from './charts/LifecycleEvents.vue';
import EventListener from './charts/EventListener.vue';
import SliceDataPie from './charts/SliceDataPie.vue';
import ResponsiveChart from './charts/ResponsiveChart.vue';
import ChangeChart from './charts/ChangeChart.vue';
import PointAnnotation from './charts/PointAnnotation.vue';
import APIMethodChart from './charts/APIMethodChart.vue';
import ThemeChart from './charts/ThemeChart.vue';
import CandlestickChart from './charts/CandlestickChart.vue';
import NiagaraLineChart from './charts/niagara/NiagaraLineChart.vue';
import NiagaraBarChart from './charts/niagara/NiagaraBarChart.vue';
import NiagaraPieChart from './charts/niagara/NiagaraPieChart.vue';
import NiagaraMultiSeries from './charts/niagara/NiagaraMultiSeries.vue';
import SimpleSlider from './sliders/SimpleSlider.vue';
import ThreeDSlider from './sliders/ThreeDSlider.vue';
import CarouselTest from './sliders/Carousel.vue';
import HeatMap from './charts/HeatMap.vue';
import Stacked3dChart from './charts/Stacked3dChart.vue';
import MSAreaChart from './charts/MultiseriesArea.vue';
import MultiLine from './charts/MultiLine.vue';
import axios from 'axios';
export default {
  components: {
    BarChart,
    SimpleTimeSeries,
    ColumnChart,
    AreaChart,
    Pie3d,
    Gauge,
    ColumnLineAreaChart,
    ColumnLine,
    MultiSeries,
    TwoVariables,
    UpdateChartData,
    UpdateChartAttrs,
    ChartHover,
    ChartPercentage,
    DrillDownChart,
    ReferenceLineChart,
    AnnotateSingle,
    SingleEventChart,
    RangeEventChart,
    WorldMap,
    ExportMultiple,
    SpecialEvent,
    LifecycleEvents,
    EventListener,
    SliceDataPie,
    ResponsiveChart,
    ChangeChart,
    PointAnnotation,
    APIMethodChart,
    ThemeChart,
    CandlestickChart,
    NiagaraLineChart,
    NiagaraBarChart,
    NiagaraPieChart,
    NiagaraMultiSeries,
    HeatMap,
    SimpleSlider,
    ThreeDSlider,
    CarouselTest,
    Stacked3dChart,
    MSAreaChart,
    MultiLine,
  },
  props: ['sourceFrame'],
  data: function() {
    return {
      point: '',
    };
  },
  mounted() {
    // const that = this;
    // //Call API and invoke method on a string
    // axios.get('https://dog.ceo/api/breeds/list/all').then(function(res) {
    //   that.$baja.Ord.make('station:|slot:/dog')
    //     .get({ lease: true })
    //     .then(function(dog) {
    //       const names = Object.keys(res.data.message);
    //       dog.invoke({
    //         slot: 'set',
    //         value: names[2].toString(),
    //       });
    //     });
    // });
    // //Subcribe to point and update when point changes
    // var sub = new that.$baja.Subscriber();
    // sub.attach('changed', function(prop) {
    //   if (prop.getName() === 'out') {
    //     that.point = point.getOut();
    //   }
    // });
    // that.$baja.Ord.make('station:|slot:/test')
    //   .get({ subscriber: sub })
    //   .then(function(point) {
    //     that.point = point.getOut();
    //   });
    // //Query Histories
    // var historyArray = [];
    // that.$baja.Ord.make('history:/BSI_programs/Ramp')
    //   .get({
    //     lease: true,
    //   })
    //   .then(function(result) {
    //     result
    //       .cursor({
    //         limit: 50,
    //         each: function() {
    //           var obj = {
    //             status: this.get().$map.$map.status.$display,
    //             timestamp: this.get().$map.$map.timestamp.$display,
    //             value: this.get().$map.$map.value.$val,
    //           };
    //           historyArray.push(obj);
    //         },
    //       })
    //       .then(function(cursor) {
    //         //console.log(historyArray);
    //       });
    //   });
    // Query the value of points under device with certain tags
    // let device = 'AHU1';
    // that.$baja.Ord.make(`station:|slot:/Drivers/BacnetNetwork/${device}`)
    //   .get({
    //     lease: true,
    //   })
    //   .then(function(result) {
    //     //console.log(result.getPoints());
    //   });
  },
  methods: {
    routerPush() {
      const that = this;
      //console.log(that.$router);
      that.$router.push({
        path: that.$router.options.routes[1].path,
      });
    },
  },
};
</script>

<style>
#_mainApp {
  height: 100%;
}

#mainFrame {
  width: 100%;
  height: 100%;
  height: 91vh;
  width: 100%;
  overflow: hidden;
  /* background-color: #c0c0c0; */
}
</style>
