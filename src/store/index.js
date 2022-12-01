import Vue from "vue";
import Vuex from "vuex";
import products from "@/data/products";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: [{ productId: 1, amount: 2 }],
  },
  mutations: {
    addProductToCart(state, { productId, amount }) {
      const item = state.cartProducts.find(
        (item) => item.productId === productId
      );

      if (item) {
        item.amount += amount;
      } else {
        state.cartProducts.push({
          productId,
          amount,
        });
      }
    },
  },
  getters: {
    cartDetailProducts(state) {
      return state.cartProducts.map((item) => {
        return {
          ...item,
          product: products.find((p) => p.id === item.productId),
        };
      });
    },
  },
});