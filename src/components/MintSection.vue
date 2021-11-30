<template>
  <div class="mint-section-wrapper">
    <div class="mint-title">Start Your Journey!</div>
    <Mint />
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-unused-vars
import Mint from "./web3/Mint.vue";
</script>

<style>
.mint-section-wrapper {
  width: 100%;
  height: 25vh;
  border-top: 2px solid #fe019a;
  border-bottom: 2px solid #fe019a;
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
}
.mint-title {
  font-family: "Press Start 2P", cursive;
  text-align: center;
  line-height: 30px;
  color: #92d3cd;
  padding-top: 1em;
  filter: drop-shadow(0 0 0.75rem #92d3cd);
  padding: 1em 1em 2em 1em;
}
@media screen and (min-width: 1024px) {
  .mint-title {
    font-size: 2em;
  }
}
</style>
