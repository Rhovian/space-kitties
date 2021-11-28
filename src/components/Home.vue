<template>
  <div class="home">
    <Landing />
  </div>
</template>

<script setup lang="ts">
import Landing from "./Landing.vue";
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 100%;
  height: 100vh;
  background: transparent;
  position: relative;
  z-index: 10;
  margin: 0;
  overflow-x: hidden;
  background: url("../assets/Space_kitties.gif");
  background-size: cover;
}
</style>
