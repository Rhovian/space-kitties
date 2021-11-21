<template>
  <div class="faq-wrapper">
    <div class="faq-content-wrapper">
      <h1 class="faq-title">FAQ</h1>
      <h3 class="faq-title title-pink">What's an NFT?</h3>
      <div class="faq-text">
        An NFT stands for “Non-fungible token” and is a fancy way of saying it’s
        a unique, one of a kind digital item that users can buy, own, and trade.
        <br /><br />
        Some NFTs main function are to be digital art and look cool, some offer
        additional utility like exclusive access to websites or participation in
        an event, think of it like a rare piece of art that can also act as a
        “members” card.
      </div>
      <h3 class="faq-title title-purple">Will there be a presale?</h3>
      <div class="faq-text">
        Yes! Details of the presale will be announced soon. In the meantime
        though, rumor has spread that those who are more active in the discord
        will be first picks for the whitelist. Whitelist selection will close 10
        days before launch.
      </div>
      <h3 class="faq-title title-pink">When is the public launch date?</h3>
      <div class="faq-text">
        Time Traveling Anime Villains will be available for minting December
        12th.
      </div>
      <h3 class="faq-title title-purple">How much will each one cost?</h3>
      <div class="faq-text">Each Villain will cost .05 eth at Mint.</div>
      <h3 class="faq-title title-pink">Will there be any special utility?</h3>
      <div class="faq-text">
        Your Villain is your passport to the Villainverse. Not only does it
        unlock the airdrop for the Villainverse stat sheet, it will also grant
        you access to the Den and be a critical part of the upcoming game.
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
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 10;
  position: relative;
  padding-bottom: 5em;
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
.faq-title {
  font-family: "Press Start 2P", cursive;
  text-align: center;
  line-height: 30px;
  color: #92d3cd;
  padding-top: 1em;
}
.title-purple {
  color: #601b9f;
}
.title-pink {
  color: #e0249f;
}
.faq-text {
  font-family: "Orbitron", sans-serif;
  font-size: 0.8em;
  text-align: center;
}
</style>
