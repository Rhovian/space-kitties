<template>
  <div class="lore-wrapper">
    <div class="lore-content-wrapper">
      <h2 class="lore-title">Lore</h2>
      <div class="lore-text">
        In a metaverse far far away the ongoing battle between decentralized
        good and evil has torn space time apart, splitting and fusing realities
        together. Wormholes have formed as a result of the intense fighting and
        now Villains from various timezones and parallel universes have been
        transported into our universe.
      </div>
      <br />
      <div class="lore-text">
        After careful observation, Earth authorities have categorized each
        villain by their ‘Disaster Rank’ ranging from C to SSS. Authorities have
        also labelled these villains to be extremely disruptive to society and
        set out a world-wide warrant for all Time-Travelling Anime Villains to
        be captured, dead or alive.
      </div>
      <br />
      <div class="lore-text">
        Equipped with their own unique stat sheets, equipment and weapons, each
        and every Villain has an undeniable thirst for power. To increase their
        own stats and rank Villains seek out and complete missions throughout
        the city to plot their ascent to the Legendary SSS rank and become the
        dominant villains of their story.
      </div>
    </div>
    <div class="lore-content-wrapper">
      <img class="about-img" src="../assets/sk_6.png" alt="" />
    </div>
    <Stars />
  </div>
</template>

<script setup lang="ts">
import Stars from "./Stars.vue";
</script>

<style>
.lore-wrapper {
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 10;
  position: relative;
  padding-top: 2.5em;
}
.lore-content-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  color: white;
}
.lore-title {
  font-family: "Press Start 2P", cursive;
  text-align: center;
  line-height: 30px;
  color: #92d3cd;
}
.lore-text {
  font-family: "Orbitron", sans-serif;
  font-size: 0.8em;
}
.lore-img {
  width: 90%;
  padding: 1em;
}
</style>
