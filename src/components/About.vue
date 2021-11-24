<template>
  <div class="about-wrapper">
    <div class="about-content-wrapper">
      <h3 class="about-title" data-aos="fade-left">What are Space Kitties?</h3>
      <div class="about-text" data-aos="fade-right">
        The Time Traveling Anime Villains are a collection of 10,000 NFTs -
        unique digital collectibles that live on the Ethereum blockchain.
      </div>
      <br />
      <div class="about-text" data-aos="fade-right">
        Your villain doubles as a membership pass that grants you access to the
        Den, an exclusive club where Villains will get assigned missions, earn
        prizes, and much more. Future features and perks will be integrated with
        roadmap unlocks.
      </div>
    </div>
    <div class="about-content-wrapper about-img-wrapper">
      <div class="about-img-row">
        <img class="about-img" src="../assets/sk_1.jpg" alt="">
        <img class="about-img" src="../assets/sk_2.jpg" alt="">
        <img class="about-img" src="../assets/sk_2.jpg" alt="">
      </div>
      <div class="about-img-row">
        <img class="about-img" src="../assets/sk_1.jpg" alt="">
        <img class="about-img" src="../assets/sk_2.jpg" alt="">
        <img class="about-img" src="../assets/sk_2.jpg" alt="">
      </div>
    </div>
    <Stars />
  </div>
</template>

<script setup lang="ts">
import Stars from "./Stars.vue";
// @ts-ignore
// eslint-disable-next-line no-unused-vars
import { sk_1 } from "../assets/sk_6.png";
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
  padding-top: 3em;
}
.about-img-wrapper {
  align-items: center;
}
.about-img-row {
  display: flex;
  width: 100%;
  line-height: 0;
  animation: scroll 25s linear infinite;
}
.about-img {
  width: 50vw;
}
.about-title {
  font-family: "Press Start 2P", cursive;
  text-align: center;
  line-height: 30px;
  color: #e0249f;
  filter: drop-shadow(0 0 0.75rem #e0249f);
  width: 100%;
}
.about-text {
  font-family: "Orbitron", sans-serif;
  font-size: 1.15em;
  padding: 0.5em 1.5em;
  text-align: center;
  letter-spacing: 2px;
  color: #d9fbff;
}

@keyframes scroll {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-50%);
  }
}
/** tablet portrait */
@media screen and (min-width: 600px) {
  .about-text {
    font-size: 1.25em;
  }
  .about-title {
    font-size: 2em;
    line-height: 1.5em;
  }
}
/** tablet landscape */
@media screen and (min-height: 600px) and (min-width: 950px) {
}
/** desktop */
@media screen and (min-width: 1200px) {
  .about-img {
    width: 75%;
  }
  .about-title {
    font-size: 2.5em;
  }
  .about-text {
    font-size: 1.75em;
  }
}

/** desktop */
@media screen and (min-width: 1600px) {
  .about-img {
    width: 65%;
  }
}
/** desktop */
@media screen and (min-width: 1900px) {
  .about-img {
    width: 65%;
  }
  .about-title {
    font-size: 3.25em;
  }
  .about-text {
    font-size: 2.25em;
  }
}
</style>
