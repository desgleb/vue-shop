<!-- eslint-disable prettier/prettier -->
<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#" @click.prevent="goToPage('product', { id: product.id })">
      <img :src="product.image" :alt="product.title" />
    </a>

    <h3 class="catalog__title">
      <a href="#"> {{ product.title }} </a>
    </h3>

    <span class="catalog__price"> {{ product.price }} </span>

    <ul class="colors colors--black">
      <li class="colors__item" v-for="itemColor in product.colors" :key="itemColor.hex">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" :value="itemColor.hex" v-model="color" />
          <span class="colors__value" :style="itemColor.background"> </span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
import goToPage from "@/helpers/goToPage";

export default {
  data() {
    return {
      color: this.product.colors[0].hex,
    };
  },
  methods: {
    goToPage,
  },
  props: ["product"],
};
</script>
