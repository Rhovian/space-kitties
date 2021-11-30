<template>
  <div class="lore-wrapper">
    <div class="lore-content-wrapper">
      <h2 class="lore-title" data-aos="fade-right">Lore</h2>
      <div class="lore-text" data-aos="fade-left">
        In a metaverse far far away the ongoing battle between decentralized
        good and evil has torn space time apart, splitting and fusing realities
        together. Wormholes have formed as a result of the intense fighting and
        now Villains from various timezones and parallel universes have been
        transported into our universe.
      </div>
      <br />
      <div class="lore-text" data-aos="fade-left">
        After careful observation, Earth authorities have categorized each
        villain by their ‘Disaster Rank’ ranging from C to SSS. Authorities have
        also labelled these villains to be extremely disruptive to society and
        set out a world-wide warrant for all Time-Travelling Anime Villains to
        be captured, dead or alive.
      </div>
      <br />
      <div class="lore-text" data-aos="fade-left">
        Equipped with their own unique stat sheets, equipment and weapons, each
        and every Villain has an undeniable thirst for power. To increase their
        own stats and rank Villains seek out and complete missions throughout
        the city to plot their ascent to the Legendary SSS rank and become the
        dominant villains of their story.
      </div>
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
  color: #601b9f;
  filter: drop-shadow(0 0 0.75rem #601b9f);
}
.lore-text {
  font-family: "Orbitron", sans-serif;
  font-size: 1.15em;
  padding: 0.5em 2em;
  text-align: center;
  letter-spacing: 2px;
  color: #d9fbff;
}
.lore-img {
  width: 85%;
  padding: 2em;
}
@media screen and (min-width: 600px) {
  .lore-text {
    font-size: 1.25em;
  }
  .lore-title {
    font-size: 2em;
    line-height: 1.5em;
  }
}
/** desktop */
@media screen and (min-width: 1000px) {
  .lore-text {
    padding: 0.5em 7.5em;
  }
}
@media screen and (min-width: 1200px) {
  .lore-img {
    width: 75%;
  }
  .lore-title {
    font-size: 2.5em;
  }
  .lore-text {
    font-size: 1.75em;
  }
}
/** desktop */
@media screen and (min-width: 1600px) {
  .lore-img {
    width: 65%;
  }
}
/** desktop */
@media screen and (min-width: 1900px) {
  .lore-img {
    width: 60%;
  }
  .lore-title {
    font-size: 3.25em;
  }
  .lore-text {
    font-size: 2.25em;
  }
}
</style>
