<template>
  <div class="team-wrapper">
    <div class="team-content-wrapper">
      <h2 class="team-title">Meet the Team</h2>
      <div class="team-content-inner-wrapper">
        <div class="team-inner-wrapper">
          <img class="team-img" src="../assets/ultra.png" alt="" />
          <div class="team-text">
            <div class="team-role">Project Lead</div>
            <div class="team-name">0xUltra</div>
          </div>
        </div>
        <div class="team-inner-wrapper">
          <img class="team-img" src="../assets/headvillian.png" alt="" />
          <div class="team-text">
            <div class="team-role">Marketing</div>
            <div class="team-name">HeadAnimeVillain</div>
          </div>
        </div>
        <div class="team-inner-wrapper">
          <img class="team-img" src="../assets/yoree.png" alt="" />
          <div class="team-text">
            <div class="team-role">Web3</div>
            <div class="team-name">Darkviet</div>
          </div>
        </div>
        <div class="team-inner-wrapper">
          <img class="team-img" src="../assets/dim.png" alt="" />
          <div class="team-text">
            <div class="team-role">Artist</div>
            <div class="team-name">Dim</div>
          </div>
        </div>
      </div>
    </div>
    <img class="planet-brown" src="../assets/Planet_yellow.png" alt="" />
    <!-- 
      <img class="cloud2" src="../assets/Cloud_1.png" alt="" />
    -->
    <img class="buildings" src="../assets/Buildings_Foreground.png" alt="" />
  </div>
</template>

<style>
.team-wrapper {
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 10;
  position: relative;
  margin: 0;
  overflow-x: hidden;
  background: url("../assets/Clouds_1.gif");
  background-color: black;
  padding-top: 5em;
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
  font-size: 0.35em;
  text-align: center;
  color: #d9fbff;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 2.5em 1em;
  text-align: center;
  letter-spacing: 1px;
  filter: drop-shadow(0 0 0.75rem #92d3cd);
}
.team-title {
  font-family: "Press Start 2P", cursive;
  text-align: center;
  line-height: 30px;
  color: #92d3cd;
  width: 100%;
  filter: drop-shadow(0 0 0.75rem #92d3cd);
}
.team-content-inner-wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.team-inner-wrapper {
  padding: 2em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
}
.team-img {
  width: 100%;
}
.team-role {
  padding-top: 1em;
}
.planet-brown {
  position: absolute;
  top: -1%;
  left: -5%;
  z-index: 1000;
  display: none;
}
.cloud2 {
  background-size: contain;
  width: 100%;
  position: absolute;
  top: -5em;
  left: 0;
  z-index: -1;
  opacity: 0.2;
  display: none;
}
.buildings {
  width: 100%;
  background-size: contain;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
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
    width: 75%;
  }
}
@media screen and (min-width: 1000px) {
  .planet-brown {
    display: unset;
  }
  .cloud2 {
    display: unset;
  }
}
/** desktop */
@media screen and (min-width: 1200px) {
  .team-img {
    width: 75%;
  }
  .team-title {
    font-size: 3em;
  }
  .team-text {
    font-size: 1em;
  }
  .team-inner-wrapper {
    width: 25%;
  }
  .team-wrapper {
    padding-bottom: 10em;
  }
  .planet-brown {
    left: 2%;
  }
}
@media screen and (min-width: 1500px) {
  .team-text {
    padding-top: 1em;
  }
}
@media screen and (min-width: 1900px) {
  .team-text {
    font-size: 1.25em;
  }
}
</style>
