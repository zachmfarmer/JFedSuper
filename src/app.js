//load environment
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueMq from 'vue-mq';
import vuetify from './plugins/vuetify';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import Charts from 'fusioncharts/fusioncharts.charts';
import World from 'fusioncharts/maps/fusioncharts.world';
import Maps from 'fusioncharts/fusioncharts.maps';
import PowerCharts from 'fusioncharts/fusioncharts.powercharts';

//import the themes
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import GammelTheme from 'fusioncharts/themes/fusioncharts.theme.gammel';
import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
import ZuneTheme from 'fusioncharts/themes/fusioncharts.theme.zune';
import OceanTheme from 'fusioncharts/themes/fusioncharts.theme.ocean';
import CarbonTheme from 'fusioncharts/themes/fusioncharts.theme.carbon';

//Swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
Vue.use(VueAwesomeSwiper /* { default options with global component } */);

//Carousel 3d
import Carousel3d from 'vue-carousel-3d';
Vue.use(Carousel3d);

Vue.use(VueMq, {
  breakpoints: {
    sm: 735,
    md: 1250,
    lg: Infinity,
  },
});

Vue.use(
  VueFusionCharts,
  FusionCharts,
  Column2D,
  FusionTheme,
  TimeSeries,
  Widgets,
  Charts,
  World,
  Maps,
  PowerCharts,
  GammelTheme,
  CandyTheme,
  ZuneTheme,
  OceanTheme,
  CarbonTheme
);

function appFunc({ baja }) {
  Vue.prototype.$baja = baja;
  new Vue({
    el: '#app',
    router,
    vuetify,
    render: (h) => h(App),
  });
}

requirejs(['baja!'], (baja) => appFunc({ baja }));
