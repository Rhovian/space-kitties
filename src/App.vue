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
html {
  overflow-x: hidden;
}

body {
  background: black;
  margin: 0;
  overflow-x: hidden;
}
.app-footer-wrapper {
  position: relative;
  height: 25vh;
}
</style>
