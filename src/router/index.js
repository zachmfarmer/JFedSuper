import Vue from 'vue';
import VueRouter from 'vue-router';
//import HelloWorld from '../components/HelloWorld.vue';
//import Dashboard from '../pages/Dashboard.vue';
import Home from '../pages/Home.vue';
import Users from '../pages/Users.vue';
import Alarms from '../pages/Alarms.vue';
import Trends from '../pages/Trends.vue';
import AuditLog from '../pages/Audit.vue';
import Search from '../pages/Search.vue';
import Help from '../pages/Help.vue';
import Logout from '../pages/Logout.vue';
import NotFound from '../pages/404.vue';

import Floor1CorpOffice from '../pages/CorpOffice/Floor1.vue';
import Floor2CorpOffice from '../pages/CorpOffice/Floor2.vue';
import AtticCorpOffice from '../pages/CorpOffice/Attic.vue';
import CHWSysCorpOffice from '../pages/CorpOffice/CHWPlant.vue';
import UpperSchedule from '../pages/CorpOffice/UpperSchedule.vue';
import LowerSchedule from '../pages/CorpOffice/LowerSchedule.vue';
import ConferenceSchedule from '../pages/CorpOffice/ConferenceSchedule.vue';
import ERVCorpOffice from '../pages/CorpOffice/ERV.vue';
// import Network1350 from '../pages/350WestPark/NetworkMap1.vue';
// import Network2350 from '../pages/350WestPark/NetworkMap2.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/ord/file:^app/index.html',
    name: '/ord/file:^app/index.html',
    component: Home,
  },
  {
    path: '/Users',
    name: 'Users',
    component: Users,
  },
  {
    path: '/Alarms',
    name: 'Alarm Console',
    component: Alarms,
  },
  {
    path: '/Trends',
    name: 'History & Trends',
    component: Trends,
  },
  {
    path: '/Audit',
    name: 'Audit Log',
    component: AuditLog,
  },
  {
    path: '/Search',
    name: 'search',
    component: Search,
  },
  {
    path: '/Help',
    name: 'System Help',
    component: Help,
  },
  {
    path: '/Logout',
    name: 'Logout',
    component: Logout,
  },
  {
    path: '/FloorOneCorporateOffice',
    name: 'Lower Level',
    component: Floor1CorpOffice,
  },
  {
    path: '/FloorTwoCorporateOffice',
    name: 'Upper Level',
    component: Floor2CorpOffice,
  },
  {
    path: '/AtticCorporateOffice',
    name: 'atticCorporateOffice',
    component: AtticCorpOffice,
  },
  {
    path: '/ChillerPlantCorporateOffice',
    name: 'CHW Plant',
    component: CHWSysCorpOffice,
  },
  {
    path: '/UpperSchedule',
    name: 'Upper Level',
    component: UpperSchedule,
  },
  {
    path: '/LowerSchedule',
    name: 'Lower Level',
    component: LowerSchedule,
  },
  {
    path: '/ConferenceSchedule',
    name: 'Conference',
    component: ConferenceSchedule,
  },
  {
    path: '/ERVCorporateOffice',
    name: 'ERV Unit',
    component: ERVCorpOffice,
  },
  // {
  //   path: '/network1CorpOffice',
  //   name: 'network1CorpOffice',
  //   component: Network1350,
  // },
  // {
  //   path: '/network2CorpOffice',
  //   name: 'network2CorpOffice',
  //   component: Network2350,
  // },
  { path: '/404', component: NotFound },
  { path: '*', redirect: '/404' },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
