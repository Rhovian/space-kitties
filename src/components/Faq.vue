<template>
  <div class="faq-wrapper">
    <div class="faq-content-wrapper">
      <h1 class="faq-title faq-header" data-aos="fade-up">FAQ</h1>
      <div class="faq-outer-content-wrapper">
        <div class="faq-inner-content-wrapper">
          <h3 class="faq-title title-pink" data-aos="fade-right">
            What's an NFT?
          </h3>
          <div class="faq-text" data-aos="fade-left">
            An NFT stands for “Non-fungible token” and is a fancy way of saying
            it’s a unique, one of a kind digital item that users can buy, own,
            and trade.
            <br /><br />
            Some NFTs main function are to be digital art and look cool, some
            offer additional utility like exclusive access to websites or
            participation in an event, think of it like a rare piece of art that
            can also act as a “members” card.
          </div>
        </div>
        <div class="faq-inner-content-wrapper">
          <h3
            class="faq-title title-purple faq-padding-right"
            data-aos="fade-left"
          >
            When is the public launch date?
          </h3>
          <div class="faq-text" data-aos="fade-right">
            Public Mint for all will be Dec 12.
          </div>
        </div>
        <div class="faq-inner-content-wrapper">
          <h3 class="faq-title title-pink" data-aos="fade-right">
            How much will each one cost?
          </h3>
          <div class="faq-text" data-aos="fade-left">
            Each Space Kitty with be 1 Sol.
          </div>
        </div>
        <div class="faq-inner-content-wrapper">
          <h3 class="faq-title title-pink" data-aos="fade-right">
            Will there be any special utility?
          </h3>
          <div class="faq-text" data-aos="fade-left">
            Your Space Kitty is your passport to the Galactic Kittyverse. Not
            only does it unlock the airdrop for the Villainverse stat sheet, it
            will also grant you access to the Den and be a critical part of the
            upcoming game.
          </div>
        </div>
        <div class="faq-inner-content-wrapper">
          <h3 class="faq-title title-pink" data-aos="fade-right">
            Where can I buy a Space Kitty?
          </h3>
          <div class="faq-text" data-aos="fade-left">
            You will only be able to participate in the presale on our official
            website. After the initial minting process, you will be able to
            trade your Villains on Solanart and other Platforms. The website
            will be revealed soon. Stay ready.
          </div>
        </div>
        <div class="faq-inner-content-wrapper">
          <h3 class="faq-title title-pink" data-aos="fade-right">
            Who are the Space Kitty Captains?
          </h3>
          <div class="faq-text" data-aos="fade-left">
            We’re a team of nerds who are passionate about crypto, anime, and
            gaming. We see NFTs as the future of both gaming and IP development
            and are excited to make our dreams come to life with this project.
            Make sure to join the Discord for more information on the team’s
            plans!
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
