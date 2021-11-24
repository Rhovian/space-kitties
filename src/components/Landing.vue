<template>
  <div class="landing-wrapper">
    <div class="landing-inner-wrapper">
      <div class="landing-content-wrapper">
        <img class="logo" data-aos="fade-in" src="../assets/ga.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style>
.landing-wrapper {
  width: 100%;
  height: 100%;
}
.landing-inner-wrapper {
  padding-top: 80px;
  height: calc(100% - 80px);
}
.landing-content-wrapper {
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
/** LOGO STUFF */
.logo {
  width: 100%;
}
@media screen and (min-width: 1000px) {
  .logo {
    width: 75%;
  }
}
</style>
