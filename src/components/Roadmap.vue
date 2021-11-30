<template>
  <div class="roadmap-wrapper">
    <div class="roadmap-content-wrapper">
      <div class="roadmap">
        <div class="roadmap-title" data-aos="fade-up">Kitties Odyssey</div>

        <section id="cd-timeline" class="cd-container" data-aos="fade-up">
          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-movie">
              <img class="roadmap-moon" src="../assets/saturn.svg" alt="" />
            </div>
            <div class="cd-timeline-content" data-aos="fade-right">
              <div class="rm-top">
                <div class="rm-text">
                  <h2>20% Sold</h2>
                </div>
              </div>
              <p>
                Access to the den will be opened, and all the TTAV holders will
                gain access.
              </p>
            </div>
          </div>

          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-movie">
              <img
                class="roadmap-moon"
                src="../assets/green_planet.svg"
                alt=""
              />
            </div>
            <div class="cd-timeline-content" data-aos="fade-left">
              <div class="rm-top">
                <div class="rm-text">
                  <h2>40% Sold</h2>
                </div>
              </div>
              <p>
                Whitelist access granted to all original minters for future
                projects.
              </p>
            </div>
          </div>

          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-movie">
              <img class="roadmap-moon" src="../assets/jupiter.svg" alt="" />
            </div>
            <div class="cd-timeline-content" data-aos="fade-right">
              <div class="rm-top">
                <div class="rm-text">
                  <h2>60% Sold</h2>
                </div>
              </div>
              <p>
                All current holders at snapshot time will be airdropped a
                special character stat sheet (similar to loot).
                <br />
                <br />
                Epic or legendary villains will receive epic stat sheets.
              </p>
            </div>
          </div>
          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-movie">
              <img class="roadmap-moon" src="../assets/uranus.svg" alt="" />
            </div>
            <div class="cd-timeline-content" data-aos="fade-left">
              <div class="rm-top">
                <div class="rm-text">
                  <h2>80% Sold</h2>
                </div>
              </div>
              <p>
                Founders receive ttav tattoos, development on the p2e card game,
                the villainverse will begin.
              </p>
            </div>
          </div>
          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-movie">
              <img class="roadmap-moon" src="../assets/mars.svg" alt="" />
            </div>

            <div class="cd-timeline-content" data-aos="fade-right">
              <div class="rm-top">
                <div class="rm-text">
                  <h2>100% Sold</h2>
                </div>
              </div>
              <p>
                Villains will be fully integrated into the sandbox and the den
                will be built out in its own plot of land.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
    <img class="buildings" src="../assets/Buildings_Foreground.png" alt="">
    <img class="planet-blue" src="../assets/planet_blue.png" alt="">
    <img class="cloud" src="../assets/Cloud_1.png" alt="">
  </div>
</template>

<style>
.roadmap-wrapper {
  width: 100vw;
  height: 100%;
  background: transparent;
  z-index: 10;
  position: relative;
  margin: 0;
  overflow-x: hidden;
  padding: 0 0.75em;
  background: url('../assets/Stars.png');
  background-color: black;
}
.roadmap-content-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: white;
}
.roadmap-title {
  font-family: "Press Start 2P", cursive;
  text-align: center;
  line-height: 40px;
  color: #92d3cd;
  font-size: 1.75em;
  filter: drop-shadow(0 0 0.75rem #92d3cd);
}
/** from solomon */
.roadmap {
  margin: 5em 0px;
}

.roadmap h2 {
  font-family: "glitch";
  color: #6b76a6;
  font-size: 1.7em;
}
.roadmap .glitch {
  font-family: "glitch";
  color: #92d3cd;
}

.roadmap p {
  font-family: "MriyaGrotesk-Regular";
}

.cd-container h2 {
  font-family: "glitch";
  color: #92d3cd !important;
}

.rm-top {
  display: flex;
}
.rm-text {
  width: 85%;
}
.rm-text h2 {
  font-family: "Press Start 2P", cursive;
}
.cd-container h3 {
  font-family: "glitch";
  color: white;
  font-size: 0.9rem;
}
.cd-container {
  width: 90%;
  max-width: 1280px;
  padding: 0 10%;
  border-radius: 2px;
}
.cd-container::after {
  content: "";
  display: table;
  clear: both;
}

.buildings {
  width: 100%;
  background-size: contain;
  position: absolute;
  bottom: 0;
  left: 0;
}
.planet-blue {
  position: absolute;
  top: -5%;
  right: -7.5%;
  display: none;
}
.cloud {
  background-size: contain;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.2;
  display: none;
}

/* -------------------------------- 

Main components 

-------------------------------- */

#cd-timeline {
  position: relative;
  padding: 2em 0;
  margin-top: 2em;
}
#cd-timeline::before {
  content: "";
  position: absolute;
  top: 0;
  left: 25px;
  height: 100%;
  width: 4px;
  background: #d761ed;
  border-radius: 3px;
  animation: mymove 5s infinite ease-in-out forwards;
}

@keyframes mymove {
  0% {
    background-color: #d761ed;
  }
  50% {
    background-color: #92d3cd;
  }
  100% {
    background-color: #d761ed;
  }
}
@media only screen and (min-width: 1170px) {
  #cd-timeline {
    margin-top: 3em;
    margin-bottom: 3em;
  }
  #cd-timeline::before {
    left: 50%;
    margin-left: -2px;
  }
}

.cd-timeline-block {
  position: relative;
  margin: 2em 0;
}
.cd-timeline-block:after {
  content: "";
  display: table;
  clear: both;
}
.cd-timeline-block:first-child {
  margin-top: 0;
}
.cd-timeline-block:last-child {
  margin-bottom: 0;
}
@media only screen and (min-width: 1170px) {
  .cd-timeline-block {
    margin: 4em 0;
  }
  .cd-timeline-block:first-child {
    margin-top: 0;
  }
  .cd-timeline-block:last-child {
    margin-bottom: 0;
  }
}

.cd-timeline-img {
  position: absolute;
  top: 8px;
  left: 5px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
@media only screen and (min-width: 1170px) {
  .cd-timeline-img {
    width: 30px;
    height: 30px;
    left: 50%;
    margin-left: -15px;
    margin-top: 15px;
    /* Force Hardware Acceleration in WebKit */
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
  }
}

.cd-timeline-content {
  position: relative;
  margin-left: 60px;
  margin-right: 30px;
  background: rgb(133, 61, 189, 0.2);
  border-radius: 2px;
  padding: 1em;
  border-radius: 12.5px;
  border: 2px solid #ba87ff;
  filter: drop-shadow(0 0 0.1rem #ba87ff);
}
.cd-timeline-content:after {
  content: "";
  display: table;
  clear: both;
}
.cd-timeline-content h2 {
  color: rgba(255, 255, 255, 0.9);
  margin-top: 0;
  margin-bottom: 5px;
  text-align: left;
  filter: drop-shadow(0 0 0.05rem #92d3cd);
}
.cd-timeline-content p,
.cd-timeline-content .cd-date {
  color: #d9fbff;
  font-size: 1.1em;
  text-align: left;
  letter-spacing: 2px;
}
.cd-timeline-content .cd-date {
  display: inline-block;
}
.cd-timeline-content p {
  margin: 1em 0;
  line-height: 1.6;
  font-family: "Orbitron", sans-serif;
}

.cd-timeline-content::before {
  content: "";
  position: absolute;
  top: 16px;
  right: 100%;
  height: 0;
  width: 0;
  border: 7px solid transparent;
  border-right: 7px solid #6b76a629;
}

@media only screen and (min-width: 768px) {
  .cd-timeline-content h2 {
    font-size: 20px;
    font-size: 1.25rem;
  }
  .cd-timeline-content p {
    font-size: 1.1em;
  }
  .cd-timeline-content .cd-read-more,
  .cd-timeline-content .cd-date {
    font-size: 14px;
    font-size: 0.875rem;
  }
}
@media only screen and (min-width: 1170px) {
  .cd-timeline-content {
    color: white;
    margin-left: 0;
    padding: 1.6em;
    width: 60%;
    margin: 0 -30%;
  }
  .cd-timeline-content::before {
    top: 24px;
    left: 100%;
    border-color: transparent;
    border-left-color: #6b76a629;
  }
  .cd-timeline-content .cd-date {
    position: absolute;
    width: 100%;
    left: 122%;
    top: 6px;
    font-size: 16px;
    font-size: 1rem;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
    top: 24px;
    left: auto;
    right: 100%;
    border-color: transparent;
    border-right-color: #6b76a629;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {
    left: auto;
    right: 122%;
    text-align: right;
  }
}

@media screen and (max-width: 780px) {
  .cd-timeline-content h2 {
    font-size: 1.1em;
  }
  #cd-timeline {
    padding-right: 0px;
    margin-right: 0px;
    width: 100%;
  }
  #roadmap {
    overflow: hidden;
  }
}

/* end of solomon stuff */
.roadmap-moon {
  width: 100%;
}
/** general media queries */
@media screen and (min-width: 600px) {
  .roadmap-title {
    font-size: 2em;
    line-height: 1.5em;
  }
  .cd-timeline-content {
    max-width: 450px;
  }
}
@media screen and (min-width: 700px) {
  .cd-timeline-content {
    max-width: 550px;
  }
}

@media screen and (min-width: 700px) {
  .cd-timeline-content {
    max-width: 700px;
  }
}

@media screen and (min-width: 1000px) {
  .planet-blue {
    display: unset;
  }
  .cloud {
    display: unset;
  }
}
/** desktop */
@media screen and (min-width: 1200px) {
  .roadmap-title {
    font-size: 3.25em;
  }
  .roadmap-text {
    font-size: 1.75em;
  }
  .roadmap-header {
    font-size: 3.25em;
  }
  .roadmap-moon {
    width: 7.5vw;
  }
  .cd-timeline-img {
    left: 45%;
  }
  .planet-blue {
    top: -4%;
    right: -4%;
  }
}

/** desktop */
@media screen and (min-width: 1400px) {
  .roadmap-title {
    font-size: 3.25em;
    line-height: 1.5em;
  }
  .cd-timeline-content h2 {
    font-size: 2em;
  }
  .cd-timeline-content p {
    font-size: 1.5em;
  }
  .cd-timeline-img {
    left: 44%;
  }
}

@media screen and (min-width: 1600px) {
  .cd-timeline-img {
    left: 42.5%;
  }
  .planet-blue {
    top: 0%;
    right: 0%;
  }
}
/** desktop */
@media screen and (min-width: 1900px) {
  .roadmap-title {
    font-size: 3.25em;
  }
  .cd-timeline-content h2 {
    font-size: 2.5em;
  }
  .cd-timeline-content p {
    font-size: 2em;
  }
  .cd-timeline-content {
    max-width: 850px;
    width: 70%;
    margin: 0 -40%;
  }
  .cd-timeline-img {
    height: 60px;
    width: 60px;
    left: 48%;
  }
  .cd-timeline-img {
    left: 43%;
  }
}
</style>
