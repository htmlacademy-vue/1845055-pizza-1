<template>
  <div class="content__result">
    <p>Итого: {{ totalPrice }} ₽</p>
    <button type="button" :class="getClassButton" :disabled="!pizzaReady">
      Готовьте!
    </button>
  </div>
</template>

<script>
export default {
  name: "BuilderPriceCounter",
  props: {
    statePizza: {
      type: Object,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pizzaReady: function () {
      return this.statePizza.totalPrice > 0 && this.statePizza.name != "";
    },
    getClassButton: function () {
      return ["button", { "button--disabled": !this.pizzaReady }];
    },
  },
};
</script>

<style></style>
