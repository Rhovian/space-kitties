<template>
  <div class="navbar-wrapper">
    <div class="navbar-inner-wrapper">
      <Mint />
    </div>
  </div>
</template>

<script setup lang="ts">
import Mint from "./web3/Mint.vue";
</script>

<style>
.navbar-wrapper {
  width: 95%;
  height: 12.5%;
  max-height: 80px;
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.navbar-inner-wrapper {
  width: 100%;
  height: 100%;
}
</style>
