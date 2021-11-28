<template>
  <div class="team-wrapper">
    <div class="team-content-wrapper">
      <h2 class="team-title">Meet the Team</h2>
      <div class="team-content-inner-wrapper">
        <div class="team-inner-wrapper">
          <img class="team-img" src="../assets/sk_8.png" alt="" />
          <div class="team-text">Team member 1</div>
        </div>
        <div class="team-inner-wrapper">
          <img class="team-img" src="../assets/sk_8.png" alt="" />
          <div class="team-text">Team member 2</div>
        </div>
        <div class="team-inner-wrapper">
          <img class="team-img" src="../assets/sk_8.png" alt="" />
          <div class="team-text">Team member 3</div>
        </div>
        <div class="team-inner-wrapper">
          <img class="team-img" src="../assets/sk_8.png" alt="" />
          <div class="team-text">Team member 4</div>
        </div>
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
  margin: 0;
  overflow-x: hidden;
  background: black;
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
  font-family: "Press Start 2P", cursive;
  font-size: 0.8em;
  text-align: center;
  color: #d9fbff;
}
.team-title {
  font-family: "Press Start 2P", cursive;
  text-align: center;
  line-height: 30px;
  color: #92d3cd;
  width: 100%;
  filter: drop-shadow(0 0 0.75rem #92d3cd);
}
.team-inner-wrapper {
  padding: 2em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.team-content-inner-wrapper {
  width: 100%;
}
.team-img {
  width: 75%;
}
.team-text {
  font-size: 1.15em;
  padding: 0.5em 1em;
  text-align: center;
  letter-spacing: 2px;
  filter: drop-shadow(0 0 0.75rem #92d3cd);
}
/** general media queries */
@media screen and (min-width: 601px) {
  .team-text {
    font-size: 1.25em;
  }
  .team-title {
    font-size: 2em;
    line-height: 1.5em;
  }
}
/** tablet landscape */
@media screen and (min-height: 600px) and (max-width: 1080px) {
  .team-img {
    width: 50%;
  }
}
/** desktop */
@media screen and (min-width: 1200px) {
  .team-img {
    width: 50%;
  }
  .team-title {
    font-size: 3.25em;
  }
  .team-text {
    font-size: 1.75em;
  }
  .team-content-inner-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
  }
  .team-inner-wrapper {
    width: auto;
  }
  .team-wrapper {
    padding-bottom: 10em;
  }
}
@media screen and (min-width: 1500px) {
  .team-text {
    font-size: 2.5em;
    padding-top: 1em;
  }
  .team-inner-wrapper {
    width: 40%;
  }
  .team-img {
    width: 50%;
  }
}
</style>
