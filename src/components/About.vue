<template>
  <div class="about-wrapper">
    <div class="about-content-wrapper">
      <h3 class="about-title">What are Space Kitties?</h3>
      <div class="about-text">
        The Time Traveling Anime Villains are a collection of 10,000 NFTs -
        unique digital collectibles that live on the Ethereum blockchain.
      </div>
      <br />
      <div class="about-text">
        Your villain doubles as a membership pass that grants you access to the
        Den, an exclusive club where Villains will get assigned missions, earn
        prizes, and much more. Future features and perks will be integrated with
        roadmap unlocks.
      </div>
    </div>
    <div class="about-content-wrapper">
      <img class="about-img" src="../assets/sk_8.png" alt="" />
    </div>
    <Stars />
  </div>
</template>

<script setup lang="ts">
import Stars from "./Stars.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap");

.about-wrapper {
  width: 100%;
  height: 100%;
  background: transparent;
  padding: 0.5em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  position: relative;
}
.about-content-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 50%;
  width: 100%;
  color: white;
}
.about-title {
  font-family: "Press Start 2P", cursive;
  text-align: center;
  line-height: 30px;
  color: #92d3cd;
}
.about-text {
  font-family: "Orbitron", sans-serif;
  font-size: 0.8em;
}
.about-img {
  width: 90%;
  padding: 1em;
}
</style>
