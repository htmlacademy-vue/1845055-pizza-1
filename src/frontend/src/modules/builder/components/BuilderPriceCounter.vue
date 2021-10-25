<template>
  <div class="content__result">
    <p>Итого: {{ priceCounter }} ₽</p>
    <button type="button" :class="getClassButton()" :disabled="!pizzaReady">
      Готовьте!
    </button>
  </div>
</template>

<script>
export default {
  name: "BuilderPriceCounter",
  props: {
    statePizza: Object,
    setTotalPrice: Function,
  },
  computed: {
    priceCounter: function () {
      let totalPrice = 0;
      let multi = this.statePizza.size.multi;
      let priceDough = this.statePizza.dough.price;
      let priceSauce = this.statePizza.sauces.price;
      let priceIngredient = 0;
      // console.log("object");
      for (let i in this.statePizza.ingredients) {
        priceIngredient =
          priceIngredient +
          this.statePizza.ingredients[i].price *
            this.statePizza.ingredients[i].valQuantity;
      }

      totalPrice = multi * (priceDough + priceSauce + priceIngredient);
      this.setTotalPrice(totalPrice);
      return totalPrice;
    },
    pizzaReady: function () {
      return this.statePizza.totalPrice > 0 && this.statePizza.name != "";
    },
  },
  methods: {
    getClassButton() {
      return ["button", { "button--disabled": !this.pizzaReady }];
    },
  },
};
</script>

<style></style>
