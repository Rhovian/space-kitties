<template>
  <div class="navbar-wrapper">
    <div class="navbar-inner-wrapper">
      <Connect />
      <div class="navbar-spacer"></div>
      <div class="navbar-socials-wrapper">
        <a href="https://discord.gg/fpkXATuucr">
          <img class="icon" src="../assets/discord.svg" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Connect from "./web3/Connect.vue";
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

@media screen and (min-width: 900px) {
  .navbar-socials-wrapper {
    width: 22.5%;
  }
}
@media screen and (min-width: 1200px) {
  .navbar-wrapper {
    padding-top: 1em;
  }
}
</style>
