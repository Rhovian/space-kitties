<template>
  <Navbar />
  <Home />
  <About />
  <Lore />
  <Roadmap />
  <Faq />
  <Team />
</template>

<script setup lang="ts">
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Lore from "./components/Lore.vue";
import Roadmap from "./components/Roadmap.vue";
import Faq from "./components/Faq.vue";
import Team from "./components/Team.vue";
// import FooterVue from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
</script>

<style>
body {
  margin: 0;
  overflow-x: hidden;
  padding: 0 0.75em;
  background: black;
}
</style>
