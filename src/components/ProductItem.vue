<!-- eslint-disable prettier/prettier -->
<template>
  <li class="catalog__item">
    <router-link class="catalog__pic" :to="{ name: 'product', params: { id: product.id } }">
      <img :src="product.image" :alt="product.title" />
    </router-link>

    <h3 class="catalog__title">
      <a href="#"> {{ product.title }} </a>
    </h3>

    <span class="catalog__price"> {{ product.price }} </span>

    <ul class="colors colors--black">
      <li class="colors__item" v-for="color in colors" :key="color.title">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" :value="color.code" v-model="currentColor" />
          <span class="colors__value" :style="color.backgroundColor"> </span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
import goToPage from "@/helpers/goToPage";
import numberFormat from "@/helpers/numberFormat";

export default {
  data() {
    return {
      currentColor: this.product.colors[0].code,
    };
  },
  filters: {
    numberFormat,
  },
  methods: {
    goToPage,
  },
  computed: {
    colors() {
      return this.product.colors.map((color) => {
        return {
          ...color,
          backgroundColor: `background-color: ${color.code}`,
        };
      });
    },
  },
  props: ["product"],
};
</script>
