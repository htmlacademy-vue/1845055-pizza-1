<template>
  <div class="content__result">
    <p>Итого: {{ totalPrice }} ₽</p>
    <button
      type="button"
      :class="getClassButton"
      :disabled="!pizzaReady"
      @click="addInOrder"
    >
      Готовьте!
    </button>
  </div>
</template>

<script>
export default {
  name: "BuilderPriceCounter",
  computed: {
    totalPrice: function () {
      return this.$store.getters["Builder/getPricePizza"];
    },
    pizzaReady: function () {
      return (
        this.totalPrice > 0 && this.$store.state.Builder.statePizza.name != ""
      );
    },
    getClassButton: function () {
      return ["button", { "button--disabled": !this.pizzaReady }];
    },
  },
  methods: {
    addInOrder() {
      this.$store.commit("Cart/addPizza", {
        statePizza: this.$store.state.Builder.statePizza,
        totalPrice: this.totalPrice,
      });
    },
  },
};
</script>

<style></style>
