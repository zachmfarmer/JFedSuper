<template>
  <div>
    <v-navigation-drawer app v-model="drawer" width="300" id="_navDrawer" dark>
      <v-list class="_sansFont">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            <router-link to="/ord/file:^app/index.html" class="link" exact
              >DASHBOARD</router-link
            >
          </v-list-item-title>
        </v-list-item>

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon>mdi-city-variant-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Jewish Federation G.D.</v-list-item-title>
          </template>

          <v-list-item link>
          <v-list-item-title>
            <router-link to="/ChillerPlantCorporateOffice" class="linkmargin">CHW SYSTEM</router-link>
          </v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-title>
            <router-link to="/ERVCorporateOffice" class="linkmargin">ERV UNIT</router-link>
          </v-list-item-title>
        </v-list-item>

          <v-list-group no-action sub-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>FLOOR PLANS</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="(floorplan, i) in FloorPlansJewFed"
              :key="i"
              link
            >
              <v-list-item-title>
                <router-link :to="floorplan.path" class="link">
                  {{ floorplan.name }}
                </router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list-group>

          <!-- <v-list-group sub-group no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>NETWORK MAPS</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(network, i) in NetworksJewFed"
              :key="i"
              link
            >
              <v-list-item-title>
                <router-link :to="network.path" class="link">
                  {{ network.name }}
                </router-link></v-list-item-title
              >
            </v-list-item>
          </v-list-group> -->

          <v-list-group sub-group no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>SCHEDULES</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(schedule, i) in SchedulesJewFed" :key="i" link>
              <v-list-item-title>
                <router-link :to="schedule.path" class="link">
                  {{ schedule.name }}
                </router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list-group>

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon>mdi-cog</v-icon>
            </v-list-item-icon>
            <v-list-item-title>ADMIN</v-list-item-title>
          </template>
          <v-list-item link>
            <v-list-item-title>
              <router-link to="/Users" class="link _adminSublink"
                >USERS</router-link
              >
            </v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>
              <router-link to="/Alarms" class="link _adminSublink"
                >ALARMS</router-link
              >
            </v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>
              <router-link to="/Trends" class="link _adminSublink"
                >TRENDS</router-link
              >
            </v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>
              <router-link to="/Audit" class="link _adminSublink"
                >AUDIT LOG</router-link
              >
            </v-list-item-title>
          </v-list-item>
        </v-list-group>

        <!-- <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-magnify</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            <router-link to="/Search" class="link">SEARCH</router-link>
          </v-list-item-title>
        </v-list-item> -->

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-question-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            <router-link to="/Help" class="link">HELP</router-link>
          </v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            <router-link to="/Logout" class="link">LOGOUT</router-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#005282">
      <img
        src="/ord/file:^app/src/assets/Logo.svg"
        id="_navLogo"
        @click.stop="drawer = !drawer"
      />

      <v-toolbar-title class="_sansFont" id="_mainTitle">{{
        fullPath
      }}</v-toolbar-title>
    </v-app-bar>
    <v-main id="_main">
      <router-view :key="$route.fullPath"></router-view>
    </v-main>
    <mq-layout mq="md+">
      <v-footer app color="#005282" id="_footer">
        <span id="_footerText"
          >Jewish Federation of Greater Dallas - 7800 Northaven Rd, Dallas, TX
          75230
        </span>
      </v-footer>
    </mq-layout>
  </div>
</template>

<script>
// import HelloWorld from './HelloWorld.vue';
export default {
  components: {
    // HelloWorld,
  },
  props: {
    source: String,
  },
  mounted() {},
  data: () => ({
    isActiveHome: false,
    drawer: null,
    FloorPlansJewFed: [
      { name: "Lower Level", path: "/FloorOneCorporateOffice" },
      { name: "Upper Level", path: "/FloorTwoCorporateOffice" },
    ],
    // NetworksCorpOffice: [
    //   { name: 'Network One', path: '/network1CorpOffice' },
    //   { name: 'Network two', path: '/network2CorpOffice' },
    // ],
    SchedulesJewFed: [
      { name: "Upper Level", path: "/UpperSchedule" },
      { name: "Lower Level", path: "/LowerSchedule" },
      { name: "Conference", path: "/ConferenceSchedule" },
    ],
  }),
  computed: {
    fullPath: function() {
      if (this.$route.path === "/ord/file:^app/index.html") {
        return "Dashboard";
      } else {
        return this.$route.name;
          // .slice(1)
          // .match(/[A-Z][a-z]+/g)
          // .join(" ");
        // .toUpperCase();
      }
    },
  },
};
</script>

<style scoped>
#_main {
  border: none !important;
}
.v-app-bar__nav-icon:hover {
  background-color: none !important;
}
#_navDrawer {
  background-image: url("/ord/file:^app/src/assets/NavDrawer.png");
  background-color: #005282 !important;
  background-position: bottom;
  font-family: "Roboto Condensed";
}
#_navLogo {
  position: relative;
  left: 5px;
  top: 25px;
  height: 100px;
  cursor: pointer;
}
#_navLogo:hover {
  /* border: 5px solid #4e7755; */
  border-radius: 25px;
  background-color: rgba(57, 95, 63, 0.322);
}

#_footerText {
  margin-left: 42%;
  margin-bottom: 5px;
  font-size: 16px;
  color: white;
  font-family: "Rage Italic";
}

#_footer {
  height: 30px;
  text-align: center;
}

._adminSublink {
  margin-left: 23%;
}
/* .v-list-item__title {
  font-size: 24px;
} */

iframe {
  height: 91vh;
}
#_mainTitle {
  font-size: 30px;
  color: rgb(255, 255, 255);
  margin-left: 30px;
  margin-top: 20px;
  font-family: "Roboto Condensed";
}
.subGroup {
  padding-left: 50%;
}
#_mainLogo {
  padding-left: 20%;
}

.link {
  text-decoration: none !important;
  color: white;
}

.linkmargin {
  text-decoration: none !important;
  color: white;
  margin-left: 58px;
}
.router-link-active,
.router-link-exact-active {
  /* background-color: rgba(255, 255, 255, 0.2); */
  text-decoration: none !important;
  cursor: pointer;
}
.v-list-group--active.primary--text {
  /* color:  !important; */
  color: white !important;
  background-color: rgba(190, 206, 236, 0.151) !important;
}
</style>
