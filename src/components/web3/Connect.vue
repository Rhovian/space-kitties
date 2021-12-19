<template>
  <div class="connect-mint-wrapper">
    <WalletModalProvider>
      <WalletMultiButton />
    </WalletModalProvider>
  </div>
</template>

<script setup lang="ts">
import {
  WalletMultiButton,
  WalletModalProvider,
} from "@solana/wallet-adapter-vue-ui";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

.navbar-wrapper {
  z-index: 20;
}
button,
.wallet-adapter-button {
  position: relative;
  border: 2px solid #c54ddd !important;
  letter-spacing: -1px !important;
  color: #d1b7db !important;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.5), 0 1px 1px #531f7b !important;
  text-transform: uppercase !important;
  cursor: pointer !important;
  font-family: "Press Start 2P", cursive !important;
  margin-left: 1em !important;

  padding: 13px 35px 10px 35px;
  border-radius: 100px !important;
  font-size: 0.75em !important;

  box-shadow: inset 0 -2px 6px 3px #b348cc, 0 -1px 1px rgba(158, 100, 166, 0.5),
    0 2px 3px rgba(0, 0, 0, 0.5), 0 0 0 10px rgba(60, 60, 60, 0.2) !important;

  background-color: rgb(67, 26, 76, 0.5) !important;

  background: linear-gradient(
      to left,
      rgba(167, 64, 180, 0.3) 0%,
      rgba(124, 48, 161, 0.3) 85%,
      rgba(165, 64, 183, 0.3) 99%
    ),
    linear-gradient(
      to left,
      rgba(167, 64, 180, 0) 0%,
      rgba(240, 240, 240, 0) 92%,
      rgba(240, 240, 240, 0.1) 99%
    ),
    linear-gradient(
      to left,
      rgba(167, 64, 180, 0.3) 0%,
      rgba(124, 48, 161, 0.3) 85%,
      rgba(165, 64, 183, 0.3) 99%
    ),
    linear-gradient(
      to left,
      rgba(167, 64, 180, 0) 0%,
      rgba(240, 240, 240, 0) 96%,
      rgba(240, 240, 240, 0.1) 99%
    ),
    linear-gradient(
      from top,
      rgba(167, 64, 180, 0) 0%,
      rgba(124, 48, 161, 1) 75%,
      rgba(197, 77, 221, 0.7) 95%
    ) !important;

  transition: all 0.337s ease-in-out;
}

button:before {
  position: absolute;
  bottom: -12px;
  left: 15%;
  z-index: -1;
  content: "";
  height: 50%;
  width: 70%;
}

button:after {
  position: absolute;
  top: -62.5%;
  left: -37.5%;
  z-index: -1;
  content: " ";
  height: 225%;
  width: 175%;

  background: radial-gradient(
    farthest-corner,
    ellipse farthest-corner,
    rgba(83, 20, 121, 0.2) 0%,
    rgba(0, 0, 0, 1) 75%
  );
}

button:hover {
  color: #fff;

  box-shadow: inset 0 -2px 6px 3px #b348cc, 0 -1px 1px rgba(158, 100, 166, 0.5),
    0 2px 3px rgba(0, 0, 0, 0.5), 0 2px 3px rgba(67, 26, 76, 0.7),
    0 0 0 14px rgba(67, 26, 76, 0.3), 0 0 0 8px rgba(67, 26, 76, 0.2);

  background-color: rgba(255, 255, 255, 0.25);
}
.wallet-adapter-button-start-icon {
  display: none !important;
}
@media screen and (min-width: 1000px) {
  button,
  .wallet-adapter-button {
    font-size: 1.25em !important;
    padding: 16px 38px 13px 38px;
  }
  .navbar-wrapper {
    padding-top: 0.5em;
  }
}

@media screen and (min-width: 1500px) {
  button {
    font-size: 2em !important;
    padding: 16px 38px 13px 38px;
  }
}
</style>
