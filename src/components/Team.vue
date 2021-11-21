<template>
  <div class="team-wrapper">
    <div class="team-content-wrapper">
      <h2 class="lore-title">Meet the Team</h2>
      <div class="team-inner-wrapper">
        <img class="about-img" src="../assets/sk_8.png" alt="" />
        <div class="team-text">Team member 1</div>
      </div>
      <div class="team-inner-wrapper">
        <img class="about-img" src="../assets/sk_8.png" alt="" />
        <div class="team-text">Team member 2</div>
      </div>
      <div class="team-inner-wrapper">
        <img class="about-img" src="../assets/sk_8.png" alt="" />
        <div class="team-text">Team member 3</div>
      </div>
      <div class="team-inner-wrapper">
        <img class="about-img" src="../assets/sk_8.png" alt="" />
        <div class="team-text">Team member 4</div>
      </div>
    </div>
    <Stars />
  </div>
</template>

<script setup lang="ts">
import Stars from "./Stars.vue";
</script>

<style>
.team-wrapper {
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 10;
  position: relative;
}
.team-content-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  width: 100%;
  color: white;
}
.team-text {
  width: 100%;
  font-family: "Orbitron", sans-serif;
  font-size: 1em;
  text-align: center;
}
.team-inner-wrapper {
  padding: 2em 0;
}
</style>
