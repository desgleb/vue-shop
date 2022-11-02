import Vue from "vue";
import App from "./App.vue";
import { message, message2 } from "./data/data";
import showMessage from "./data/func";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

showMessage(message);
showMessage(message2);
