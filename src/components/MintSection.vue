<template>
  <div class="mint-wrapper">
    <div class="mint-section-wrapper">
      <div class="mint-title">Start Your Journey!</div>
      <div class="mint-text-wrapper">
        <div class="mint-text">
          <div class="mint-text-title">Mint 1</div>
          <div class="mint-text-text">.08 ETH</div>
        </div>
        <div class="mint-text">
          <div class="mint-text-title">Mint 3</div>
          <div class="mint-text-text">.24 ETH</div>
        </div>
        <div class="mint-text">
          <div class="mint-text-title">Mint 5</div>
          <div class="mint-text-text">.45 ETH</div>
        </div>
      </div>
      <div class="mint-text">
        <div class="mint-text-title minted">0/6666 Minted</div>
      </div>
      <Mint />
    </div>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-unused-vars
import Mint from "./web3/Mint.vue";
</script>

<style>
.mint-wrapper {
  background: url("../assets/Clouds_1.gif");
}
.mint-section-wrapper {
  width: 75%;
  height: 60vh;
  margin: 10em auto;
  border: 2px solid #fe019a;
  filter: drop-shadow(0 0 0.1rem #fe019a);
  display: flex;
  flex-direction: column-reverse;
  padding: 2em 0;
  background: rgb(254, 1, 154, 0.1)
    url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top
    center;
  line-height: 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
}
.mint-title {
  font-family: "Press Start 2P", cursive;
  text-align: center;
  line-height: 30px;
  color: #92d3cd;
  padding-top: 1em;
  filter: drop-shadow(0 0 0.75rem #92d3cd);
  padding: 0.5em 1em 3em 1em;
}
.mint-text-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 75%;
  line-height: unset;
}
.mint-text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.mint-text-title {
  font-family: "Orbitron", sans-serif;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #92d3cd;
}
.mint-text-text {
  width: 100%;
  font-family: "Orbitron", sans-serif;
  display: flex;
  justify-content: center;
  color: #92d3cd;
}
@media screen and (min-width: 1024px) {
  .mint-title {
    font-size: 2em;
  }
  .mint-text-wrapper {
    flex-direction: row;
  }
  .mint-text {
    flex-direction: column;
    height: 100%;
  }
  .mint-text-text {
    height: 100%;
    font-size: 1.25em;
  }
  .mint-text-title {
    height: 100%;
    font-size: 1.25em;
  }
  .minted {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25em;
  }
}
@media screen and (min-width: 1200px) {
  .mint-text-text {
    font-size: 1.75em;
    align-items: center;
  }
  .mint-text-title {
    font-size: 1.75em;
    align-items: center;
  }
}
@media screen and (min-width: 1400px) {
  .mint-section-wrapper {
    padding: 3em 0;
  }
}
@media screen and (min-width: 1600px) {
  .mint-title {
    font-size: 2.5em;
  }
  .mint-text-text {
    font-size: 2.25em;
  }
  .mint-text-title {
    font-size: 2.25em;
  }
}
@media screen and (min-width: 1900px) {
  .mint-text-text {
    font-size: 2.5em;
  }
  .mint-text-title {
    font-size: 2.5em;
  }
  .mint-section-wrapper {
    padding: 3.5em 0;
  }
  .mint-title {
    font-size: 3em;
  }
}
</style>
