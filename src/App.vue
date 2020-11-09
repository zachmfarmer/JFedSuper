<template>
  <v-app>
    <NavBar />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  created() {
    const that = this;
    // console.log(that.$mq);
  },
};
</script>

<style>
html {
  overflow: hidden;
}
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden !important;
}
iframe {
  border: none !important;
}
#main {
  height: 100%;
  width: 100%;
  font-family: "Rage Italic", "Roboto Condensed";
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 25px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(94, 94, 94);
  border-radius: 25px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(255, 255, 255);
}
</style>
