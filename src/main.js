import Vue from "vue";
import App from "./App.vue";
import { message, message2 } from "./data";
import showMessage from "./func";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

showMessage(message);
showMessage(message2);
