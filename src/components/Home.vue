<template>
  <div class="home">
    <Landing />
    <Stars />
  </div>
</template>

<script setup lang="ts">
import Landing from "./Landing.vue";
import Stars from "./Stars.vue";
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 100%;
  height: 100vh;
  background: transparent;
  position: relative;
  z-index: 10;
}
</style>
