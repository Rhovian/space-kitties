import { createApp } from "vue";
import App from "./App.vue";
// @ts-ignore
import * as VueAos from "vue-aos";

createApp(App).use(VueAos).mount("#app");
