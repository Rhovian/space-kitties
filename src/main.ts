import { createApp } from "vue";
import App from "./App.vue";
// @ts-ignore
import * as VueAos from "vue-aos";
import VueSocials from 'vue-socials';

createApp(App).use(VueAos).use(VueSocials).mount("#app");
