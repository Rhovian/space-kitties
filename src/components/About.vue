<template>
  <div class="about-wrapper">
    <div class="about-content-wrapper">
      <h3 class="about-title" data-aos="fade-left">What are Space Kitties?</h3>
      <div class="about-text" data-aos="fade-right">
        Star crossed with the power of Naisu and Kawaii Space Kitties are 6666
        fiercely adorable galactic space cats. Approach with cat-ion Space
        Kitties will blast you before you blink if you stare at them for too
        long. Do not drop or throw your Space Kitten. Batteries sold separately.
      </div>
    </div>
    <div class="about-content-wrapper about-img-wrapper-mobile">
      <div class="about-img-row-mobile">
        <img class="about-img" src="../assets/sk_1.jpg" alt="" />
        <img class="about-img" src="../assets/50.png" alt="" />
        <img class="about-img" src="../assets/sk_2.jpg" alt="" />
        <img class="about-img" src="../assets/sk_3.jpg" alt="" />
        <img class="about-img" src="../assets/177.png" alt="" />
        <img class="about-img" src="../assets/sk_7.jpg" alt="" />
        <img class="about-img" src="../assets/66.png" alt="" />
        <img class="about-img" src="../assets/sk_8.png" alt="" />
        <img class="about-img" src="../assets/125.png" alt="" />
      </div>
      <div class="about-img-row-mobile about-img-row-alternate">
        <img class="about-img" src="../assets/sk_4.jpg" alt="" />
        <img class="about-img" src="../assets/53.png" alt="" />
        <img class="about-img" src="../assets/sk_5.jpg" alt="" />
        <img class="about-img" src="../assets/sk_6.png" alt="" />
        <img class="about-img" src="../assets/sk_10.jpg" alt="" />
        <img class="about-img" src="../assets/82.png" alt="" />
        <img class="about-img" src="../assets/sk_11.jpg" alt="" />
        <img class="about-img" src="../assets/197.png" alt="" />
        <img class="about-img" src="../assets/58.png" alt="" />
      </div>
    </div>
    <div class="about-content-wrapper about-img-wrapper-desktop">
      <div class="about-img-row">
        <img class="about-img" src="../assets/sk_1.jpg" alt="" />
        <img class="about-img" src="../assets/50.png" alt="" />
        <img class="about-img" src="../assets/sk_2.jpg" alt="" />
        <img class="about-img" src="../assets/177.png" alt="" />
        <img class="about-img" src="../assets/sk_3.jpg" alt="" />
        <img class="about-img" src="../assets/66.png" alt="" />
        <img class="about-img" src="../assets/sk_7.jpg" alt="" />
        <img class="about-img" src="../assets/125.png" alt="" />
        <img class="about-img" src="../assets/sk_8.png" alt="" />
        <img class="about-img" src="../assets/53.png" alt="" />
        <img class="about-img" src="../assets/sk_4.jpg" alt="" />
        <img class="about-img" src="../assets/58.png" alt="" />
        <img class="about-img" src="../assets/sk_5.jpg" alt="" />
        <img class="about-img" src="../assets/82.png" alt="" />
        <img class="about-img" src="../assets/sk_6.png" alt="" />
        <img class="about-img" src="../assets/sk_10.jpg" alt="" />
        <img class="about-img" src="../assets/197.png" alt="" />
        <img class="about-img" src="../assets/sk_11.jpg" alt="" />
      </div>
    </div>
    <img class="planet-red" src="../assets/Planet_Red.png" alt="" />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap");

.about-wrapper {
  width: 100%;
  height: 100%;
  background: url("../assets/Clouds_1.gif");
  background-color: black;
  padding: 0.5em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  position: relative;
  padding-bottom: 0;
  position: relative;
}
.about-content-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 50%;
  width: 100%;
  color: white;
  padding-top: 3em;
}
.about-img-wrapper-mobile {
  align-items: center;
}
.about-img-wrapper-desktop {
  display: none;
}
.about-img-row {
  display: flex;
  width: 100%;
  line-height: 0;
  animation: scroll 120s linear infinite;
}
.about-img-row-mobile {
  display: flex;
  width: 100%;
  line-height: 0;
  animation: scroll-alternate-alternate 60s linear infinite;
}
.about-img-row-alternate {
  display: flex;
  flex-direction: row-reverse;
  animation: scroll-alternate 60s linear infinite;
}
.about-img {
  width: 55vw;
  height: 55vw;
}
.about-title {
  font-family: "Press Start 2P", cursive;
  text-align: center;
  line-height: 30px;
  color: #e0249f;
  filter: drop-shadow(0 0 0.75rem #e0249f);
  width: 100%;
}
.about-text {
  font-family: "Orbitron", sans-serif;
  font-size: 1.15em;
  padding: 0.5em 2em;
  text-align: center;
  letter-spacing: 2px;
  color: #d9fbff;
}
.planet-red {
  position: absolute;
  top: 0;
  right: 0;
  animation: rotate 5s infinite;
  z-index: 10;
  display: none;
}
@keyframes rotate {
  0% {
    transform: rotateZ(5deg);
  }
  50% {
    transform: rotateZ(-5deg);
  }
  100% {
    transform: rotateZ(5deg);
  }
}
@keyframes scroll {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-290%);
  }
}
@keyframes scroll-alternate {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(300%);
  }
}
@keyframes scroll-alternate-alternate {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-300%);
  }
}
/** tablet portrait */
@media screen and (min-width: 600px) {
  .about-text {
    font-size: 1.25em;
  }
  .about-title {
    font-size: 2em;
    line-height: 1.5em;
  }
}
@media screen and (min-width: 1000px) {
  .about-img {
    width: 21.5vw;
    height: 21.5vw;
  }
  .about-img-wrapper-mobile {
    display: none;
  }
  .about-img-wrapper-desktop {
    display: flex;
  }
  .about-text {
    padding: 0.5em 7.5em;
  }
  .planet-red {
    display: unset;
  }
}
/** desktop */
@media screen and (min-width: 1200px) {
  .about-img {
    width: 75%;
  }
  .about-title {
    font-size: 2.5em;
  }
  .about-text {
    font-size: 1.75em;
  }
}

/** desktop */
@media screen and (min-width: 1600px) {
  .about-img {
    width: 65%;
  }
}
/** desktop */
@media screen and (min-width: 1900px) {
  .about-img {
    width: 65%;
  }
  .about-title {
    font-size: 3.25em;
  }
  .about-text {
    font-size: 2.25em;
  }
}
</style>
