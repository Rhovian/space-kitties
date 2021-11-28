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
            Will there be a presale?
          </h3>
          <div class="faq-text" data-aos="fade-right">
            Yes! Details of the presale will be announced soon. In the meantime
            though, rumor has spread that those who are more active in the
            discord will be first picks for the whitelist. Whitelist selection
            will close 10 days before launch.
          </div>
        </div>
        <div class="faq-inner-content-wrapper">
          <h3 class="faq-title title-pink" data-aos="fade-right">
            When is the public launch date?
          </h3>
          <div class="faq-text" data-aos="fade-left">
            Time Traveling Anime Villains will be available for minting December
            12th.
          </div>
        </div>
        <div class="faq-inner-content-wrapper">
          <h3
            class="faq-title title-purple faq-title-padding"
            data-aos="fade-left"
          >
            How much will each one cost?
          </h3>
          <div class="faq-text" data-aos="fade-right">
            Each Villain will cost .05 eth at Mint.
          </div>
        </div>
        <div class="faq-inner-content-wrapper">
          <h3 class="faq-title title-pink" data-aos="fade-right">
            Will there be any special utility?
          </h3>
          <div class="faq-text" data-aos="fade-left">
            Your Villain is your passport to the Villainverse. Not only does it
            unlock the airdrop for the Villainverse stat sheet, it will also
            grant you access to the Den and be a critical part of the upcoming
            game.
          </div>
        </div>
      </div>
    </div>
    <Stars />
  </div>
</template>

<script setup lang="ts">
import Stars from "./Stars.vue";
</script>

<style>
.faq-wrapper {
  width: 100vw;
  height: 100%;
  background: transparent;
  z-index: 10;
  position: relative;
  padding: 0 0.75em 5em 0;
  margin: 0;
  overflow-x: hidden;
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
