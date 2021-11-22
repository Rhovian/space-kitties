<template>
  <div class="navbar-wrapper">
    <button>Connect</button>
  </div>
</template>

<script setup lang="ts"></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

.navbar-wrapper {
  z-index: 20;
}
button {
  position: relative;
  border: 2px solid #c54ddd;
  letter-spacing: -1px;
  color: #d1b7db;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.5), 0 1px 1px #531f7b;
  text-transform: uppercase;
  cursor: pointer;
  font-family: "Press Start 2P", cursive;
  margin-top: 1em;

  padding: 13px 35px 10px 35px;
  border-radius: 100px;

  box-shadow: inset 0 -2px 6px 3px #b348cc, 0 -1px 1px rgba(158, 100, 166, 0.5),
    0 2px 3px rgba(0, 0, 0, 0.5), 0 0 0 10px rgba(60, 60, 60, 0.2);

  background-color: rgb(67, 26, 76, 0.5);

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
    );

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
@media screen and (min-width: 1500px) {
  button {
    font-size: 2em;
    padding: 16px 38px 13px 38px;
  }
}
</style>
