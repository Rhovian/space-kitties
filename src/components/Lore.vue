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
    </div>
    <img class ="comet" src="../assets/comet_2.png" alt="">
    <img class ="comet2" src="../assets/comet_2.png" alt="">

  </div>
</template>

<style>
.lore-wrapper {
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 10;
  position: relative;
  padding-top: 2.5em;
  background: url('../assets/Stars.png');
  background-color: black;
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
.comet {
  position: absolute;
  top: -30%;
  right: -30%;
  -webkit-animation: falling 5s 0s infinite;
  z-index: 10;
  display: none;
}
.comet2 {
  position: absolute;
  top: -30%;
  right: -30%;
  -webkit-animation: falling2 5s 3s infinite;
  z-index: 10;
  display: none;
}
@-webkit-keyframes falling {

  0% {
    -webkit-transform: translate3d(0px, 0px, 0px);
  }

  3% {
    -webkit-transform:
    translate3d(0px,0px, 0); 
    opacity: 0.5;
  }
  75% {
    -webkit-transform:
    translate3d(-350px,900px,0) rotate(-30deg);
    opacity: 0.25;
  }
  100% {
    -webkit-transform:
    translate3d(-350px,1200px,0) rotate(-30deg);
    opacity: 0;
  }
}
@-webkit-keyframes falling2 {

  0% {
    -webkit-transform: translate3d(0px, 0px, 0px);
  }

  3% {
    -webkit-transform:
    translate3d(0px,0px, 0); 
    opacity: 0.5;
  }
  100% {
    -webkit-transform:
    translate3d(-850px,900px,0) rotate(-30deg);
    opacity: 0;
  }
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
  .comet {
    display: unset;
  }
  .comet2 {
    display: unset;
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
