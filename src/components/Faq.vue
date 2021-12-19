<template>
  <div class="faq-wrapper">
    <div class="faq-content-wrapper">
      <h1 class="faq-title faq-header" data-aos="fade-up">FAQ</h1>
      <div class="faq-outer-content-wrapper">
        <div class="faq-inner-content-wrapper">
          <h3 class="faq-title title-pink" data-aos="fade-right">
            What Is On Your Roadmap?
          </h3>
          <div class="faq-text" data-aos="fade-left">
            Battlemechs, nuff' said.
          </div>
        </div>
        <div class="faq-inner-content-wrapper">
          <h3
            class="faq-title title-purple faq-padding-right"
            data-aos="fade-left"
          >
            How Do I Mint Space Kitties?
          </h3>
          <div class="faq-text" data-aos="fade-right">
            You probably already did.
          </div>
        </div>
        <div class="faq-inner-content-wrapper">
          <h3 class="faq-title title-pink" data-aos="fade-right">
            What Inspired You To Make This?
          </h3>
          <div class="faq-text" data-aos="fade-left">
            Space Kitties are cute. Space Kitties are good.
          </div>
        </div>
        <div class="faq-inner-content-wrapper">
          <h3 class="faq-title title-pink" data-aos="fade-right">
            What Rights Do I Have To The Artwork?
          </h3>
          <div class="faq-text" data-aos="fade-left">
            You are free to do with your Space Kitty as your heart desires.
            <br />
            <br />
            By purchasing a Space Kitty, you are granted full and complete
            rights to do whatever you want with your NFT and the artwork
            included, commercially or otherwise.
          </div>
        </div>
      </div>
    </div>
    <img class="comet3" src="../assets/Comet_1.png" alt="" />
    <img class="comet4" src="../assets/Comet_1.png" alt="" />
  </div>
</template>

<style>
.faq-wrapper {
  width: 100vw;
  height: 100%;
  background: transparent;
  z-index: 10;
  position: relative;
  padding: 0 0.75em 0 0;
  margin: 0;
  overflow-x: hidden;
  background: url("../assets/Clouds_1.gif");
  background-color: black;
}
.faq-content-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  color: white;
}
.faq-inner-content-wrapper {
  padding: 0 0.75em;
}
.faq-title {
  font-family: "Press Start 2P", cursive;
  text-align: center;
  line-height: 30px;
  color: #92d3cd;
  padding-top: 1em;
  filter: drop-shadow(0 0 0.75rem #92d3cd);
  padding: 1em 1em 0 1em;
}
.title-purple {
  color: #601b9f;
  filter: drop-shadow(0 0 0.75rem #601b9f);
}
.title-pink {
  color: #e0249f;
  filter: drop-shadow(0 0 0.75rem #e0249f);
}
.faq-text {
  font-family: "Orbitron", sans-serif;
  font-size: 1.15em;
  padding: 0.5em 2em;
  text-align: center;
  letter-spacing: 2px;
  color: #d9fbff;
}
.comet3 {
  width: 20%;
  height: 20%;
  position: absolute;
  top: -30%;
  right: -30%;
  -webkit-animation: falling3 5s 0s infinite;
  z-index: 10;
  display: none;
}
.comet4 {
  width: 20%;
  height: 20%;
  position: absolute;
  top: -30%;
  right: -30%;
  -webkit-animation: falling4 5s 3s infinite;
  z-index: 10;
  display: none;
}
@-webkit-keyframes falling3 {
  0% {
    -webkit-transform: translate3d(0px, 0px, 0px);
    opacity: 1;
  }

  3% {
    -webkit-transform: translate3d(0px, 0px, 0);
    opacity: 0.5;
  }
  100% {
    -webkit-transform: translate3d(-500px, 1000px, 0) rotate(10deg);
    opacity: 0;
  }
}
@-webkit-keyframes falling4 {
  0% {
    -webkit-transform: translate3d(0px, 0px, 0px);
  }

  3% {
    -webkit-transform: translate3d(0px, 0px, 0);
    opacity: 0.5;
  }
  100% {
    -webkit-transform: translate3d(-850px, 1000px, 0) rotate(10deg);
    opacity: 0;
  }
}
/** general media queries */
@media screen and (min-width: 600px) {
  .faq-text {
    font-size: 1.25em;
  }
  .faq-title {
    font-size: 2em;
    line-height: 1.5em;
  }
}
@media screen and (min-width: 1000px) {
  .comet3 {
    display: unset;
  }
  .comet4 {
    display: unset;
  }
}
/** desktop */
@media screen and (min-width: 1200px) {
  .faq-title {
    font-size: 2.5em;
  }
  .faq-text {
    font-size: 1.75em;
  }
  .faq-header {
    font-size: 3.25em;
  }
}

/** desktop */
@media screen and (min-width: 1400px) {
  .faq-title {
    font-size: 2.5em;
  }
  .faq-text {
    font-size: 1.75em;
  }
  .faq-header {
    font-size: 3.25em;
  }
  .faq-outer-content-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .faq-inner-content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 40%;
    padding: 0 1em;
  }
  .faq-padding-right {
    padding-right: 1em;
  }
}
@media screen and (min-width: 1900px) {
  .faq-title-padding {
    padding-left: 2em;
  }
}
</style>
