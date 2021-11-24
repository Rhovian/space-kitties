<template>
  <div class="footer-wrapper">
    <div class="footer-content-wrapper">
      <img class="icon" src="../assets/discord.svg" alt=""/>
      <img class="icon icon-alternate " src="../assets/twitter.svg" alt=""/>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>


<style>
.footer-wrapper {
  width: 100vw;
  height: 10vh;
  background: rgb(133, 61, 189, 0.2);
  filter: drop-shadow(0 0 0.1rem #BA87FF);
}
.footer-content-wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
  color: white;
}
.icon-wrapper {
  width: max-content;
}
.icon {
  width: 1.5em;
  padding: 0.5em;
  border-radius: 50%;
  border: 2px inset #d9fbff;
  cursor: pointer;

}
.icon-alternate {
  border: 2px outset #d9fbff;
}
</style>
