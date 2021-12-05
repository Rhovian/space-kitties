<template>
  <div class="landing-wrapper">
    <div class="landing-inner-wrapper">
      <div class="landing-content-wrapper">
        <img
          class="logo"
          data-aos="slide-down"
          data-aos-easing="ease-out"
          src="../assets/sk_logo.png"
          alt=""
        />
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
  align-items: center;
}
/** LOGO STUFF */
.logo {
  width: 90%;
}
@media screen and (min-width: 1000px) {
  .logo {
    width: 75%;
    height: 80vh;
  }
}

@media screen and (min-width: 1400px) {
  .logo {
    width: 65%;
  }
}
</style>
