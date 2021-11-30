<template>
  <div class="navbar-wrapper">
    <div class="navbar-inner-wrapper">
      <Mint />
      <div class="navbar-spacer"></div>
      <div class="navbar-socials-wrapper">
        <img class="icon" src="../assets/discord.svg" alt="" />
        <img class="icon icon-alternate" src="../assets/twitter.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Mint from "./web3/Mint.vue";
</script>

<style>
.navbar-wrapper {
  width: 100%;
  height: 12.5%;
  max-height: 80px;
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 0.5em;
}
.navbar-inner-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
}
.navbar-spacer {
  flex-grow: 1;
}
.navbar-socials-wrapper {
  width: 50%; /** desktop - 22.5% */
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
}
</style>
