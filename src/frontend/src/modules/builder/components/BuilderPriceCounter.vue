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
  // props: {
  //   // statePizza: {
  //   //   type: Object,
  //   //   required: true,
  //   // },
  //   // totalPrice: {
  //   //   type: Number,
  //   //   required: true,
  //   // },
  // },
  computed: {
    totalPrice: function () {
      return this.$store.getters["Builder/getPricePizza"];
    },
    statePizza: function () {
      return this.$store.getters["Builder/getStatePizza"];
    },
    pizzaReady: function () {
      return this.totalPrice > 0 && this.statePizza.name != "";
    },
    getClassButton: function () {
      return ["button", { "button--disabled": !this.pizzaReady }];
    },
  },
  methods: {
    addInOrder() {
      console.log("add in order");
    },
  },
};
</script>

<style></style>
