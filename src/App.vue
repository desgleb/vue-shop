<!-- eslint-disable prettier/prettier -->
<template>
  <component :is="currentPageComponent" :page-params="currentPageParams"></component>
</template>

<script>
import MainPage from "@/pages/MainPage.vue";
import ProductPage from "@/pages/ProductPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";
import eventBus from "./eventBus";

const routes = {
  main: "MainPage",
  product: "ProductPage",
};

export default {
  name: "App",
  data() {
    return {
      currentPage: "main",
      currentPageParams: {},
    };
  },
  methods: {
    goToPage(pageName, pageParams) {
      this.currentPage = pageName;
      this.currentPageParams = pageParams || {};
    },
  },
  computed: {
    currentPageComponent() {
      return routes[this.currentPage] || "NotFoundPage";
    },
  },
  components: { MainPage, ProductPage, NotFoundPage },
  created() {
    // eslint-disable-next-line prettier/prettier
    eventBus.$on("goToPage", (pageName, pageParams) => this.goToPage(pageName, pageParams));
  },
};
</script>
