<template>
  <div class="roadmap-v2-outer-wrapper">
    <div class="roadmap-v2-wrapper">
      <div class="roadmap-v2-inner-wrapper roadmap-v2-inner-wrapper-moon">
        <img
          id="moon"
          src="http://www.clker.com/cliparts/8/4/7/a/12279737022024966533rg1024_Moon_in_comic_style.svg"
          alt="moon"
        />
        <div class="rocket">
          <img
            src="https://maxcdn.icons8.com/Share/icon/Transport//rocket1600.png"
            alt="rocket"
            width="20%"
          />
        </div>
      </div>
      <div class="roadmap-v2-inner-wrapper roadmap-v2-inner-wrapper-text">
        <div class="roadmap-v2-info-wrapper">
          <div class="roadmap-v2-title">Roadmap V2</div>
          <div class="roadmap-v2-text">
            The Kitties have scattered around the galaxy and they're meeting up
            in small groups. They may be plotting for a season 2 they may not,
            who knows what they will get up to?
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.roadmap-v2-outer-wrapper {
  background: url("../assets/Clouds_1.gif");
}
.roadmap-v2-wrapper {
  width: 80%;
  height: 100%;
  margin: 2.5em auto;
  display: flex;
  flex-direction: column-reverse;
  padding: 2em 0;
  z-index: -1;
  margin-bottom: 5em;
  margin-top: 0;
}
.roadmap-v2-inner-wrapper {
  flex-grow: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 7.5em;
}
.roadmap-v2-inner-wrapper-text {
  border: 2px solid #18cae6;
  filter: drop-shadow(0 0 0.1rem #18cae6);
  background: rgb(24, 202, 230, 0.1)
    url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top
    center;
  border-radius: 15px;
  padding: 2em 0;
}
.roadmap-v2-info-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.roadmap-v2-title {
  font-family: "Press Start 2P", cursive;
  text-align: center;
  line-height: 30px;
  color: #601b9f;
  filter: drop-shadow(0 0 0.2rem #601b9f);
  font-size: 1.25em;
}
.roadmap-v2-text {
  font-family: "Orbitron", sans-serif;
  font-size: 1em;
  padding: 1.25em 1.5em;
  text-align: center;
  letter-spacing: 2px;
  color: #d9fbff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rocket {
  position: absolute;
  width: 500px;
  height: 500px;
  animation-name: spin;
  -webkit-animation: spin 5s linear infinite;
  animation: spin 5s linear infinite;
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@media screen and (max-width: 700px) {
  .rocket {
    width: 250px;
    height: 250px;
  }
  #moon {
    width: 40%;
  }
}
@media screen and (min-width: 900px) {
  .roadmap-v2-wrapper {
    flex-direction: row;
  }
  #moon {
    width: 50%;
  }
  .rocket {
    height: 40%;
    width: 40%;
  }
  .roadmap-v2-title {
    font-size: 2.25em;
  }
  .roadmap-v2-text {
    font-size: 1.5em;
  }
  .roadmap-v2-wrapper {
    height: 75vh;
  }
  .roadmap-v2-inner-wrapper-moon {
    padding-top: 0;
  }
  .roadmap-v2-inner-wrapper-text {
    background: unset;
    filter: unset;
    border: unset;
  }
  .roadmap-v2-wrapper {
    border: 2px solid #18cae6;
    filter: drop-shadow(0 0 0.1rem #18cae6);
    background: rgb(24, 202, 230, 0.1)
      url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top
      center;
    border-radius: 15px;
  }
  .roadmap-v2-title {
    padding-bottom: 1em;
  }
}
@media screen and (min-width: 1200px) {
  .roadmap-v2-wrapper {
    height: 60vh;
  }
  .rocket {
    height: 45%;
    width: 45%;
  }
}
@media screen and (min-width: 1300px) {
  .roadmap-v2-wrapper {
    height: 85vh;
  }
}
@media screen and (min-width: 1400px) {
  .roadmap-v2-title {
    font-size: 3em;
  }
  .roadmap-v2-text {
    font-size: 2em;
  }
}
@media screen and (min-width: 1600px) {
  .roadmap-v2-wrapper {
    height: 90vh;
  }
}
@media screen and (min-width: 1900px) {
  .roadmap-v2-title {
    font-size: 3.25em;
  }
  .roadmap-v2-text {
    font-size: 2.5em;
  }
}
</style>
