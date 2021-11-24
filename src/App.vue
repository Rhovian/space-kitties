<template>
  <Navbar />
  <div class="app-inner-wrapper">
    <Home />
    <About />
    <Lore />
    <Faq />
    <Roadmap />
    <Team />
  </div>
  <FooterVue />
</template>

<script setup lang="ts">
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Lore from "./components/Lore.vue";
import Roadmap from "./components/Roadmap.vue";
import Faq from "./components/Faq.vue";
import Team from "./components/Team.vue";
import FooterVue from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
</script>

<style>
body {
  background: black;
  margin: 0;
}
.app-inner-wrapper {
  margin: 0;
  overflow-x: hidden;
  padding: 0 0.75em;
  background: black;
}
.app-footer-wrapper {
  position: relative;
  height: 25vh;
}
@media screen and (min-width: 600px) {
  .app-inner-wrapper {
    padding: 0 1em;
  }
}
@media screen and (min-height: 600px) and (min-width: 950px) {
  .app-inner-wrapper {
    padding: 0 2em;
  }
}
@media screen and (min-width: 700px) {
  .app-inner-wrapper {
    padding: 0 3em;
  }
}
@media screen and (min-width: 1000px) {
  .app-inner-wrapper {
    padding: 0 5em;
  }
}
</style>
