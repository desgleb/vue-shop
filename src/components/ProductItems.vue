<!-- eslint-disable prettier/prettier -->
<template>
  <li v-bind="$attrs" v-for="product in productsNormalized" :key="product.id" :ref="fillRefs">
    <router-link class="catalog__pic" :to="{ name: 'product', params: { id: product.id } }">
      <img :src="product.image" :alt="product.title" />
    </router-link>

    <h3 class="catalog__title">
      <a href="#"> {{ product.title }} </a>
    </h3>

    <span class="catalog__price"> {{ product.pricePretty }} </span>

    <ul class="colors colors--black">
      <li class="colors__item" v-for="color in product.colors" :key="color.title">
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
  inheritAttrs: false,
  data() {
    return {
      currentColor: this.products[0].colors[0].code,
      productsElements: [],
    };
  },
  methods: {
    goToPage,
    fillRefs(element) {
      if (element) {
        this.productsElements.push(element);
      }
    },
  },
  computed: {
    productsNormalized() {
      return this.products.map((product) => {
        return {
          ...product,
          pricePretty: numberFormat(product.price),
          colors: product.colors.map((color) => {
            return {
              ...color,
              backgroundColor: `background-color: ${color.code}`,
            };
          }),
        };
      });
    },
  },
  beforeUpdate() {
    this.productsElements = [];
  },
  props: ["products"],
};
</script>
