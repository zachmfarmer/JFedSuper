<template id="textContainer">
  <div id="notFound">
    <h3> Oh Snap! 404 Not Found!</h3>
  </div>
</template>

<script>
export default {
  computed: {
    displayText() {
      return this.$mq === "md" ? "I am small" : "I am large";
    },
  },
  methods: {
    dropDown: function () {
      var x = document.getElementById("Demo");
      if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
      } else {
        x.className = x.className.replace(" w3-show", "");
      }
    },
  },
};
</script>

<style>
.textContainer {
  align-content: center;
}
#notFound {
  margin: 0;
  height: 91vh;
  width: 100%;
  background-color: yellow;
}
</style>
