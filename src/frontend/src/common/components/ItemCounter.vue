<template>
  <div class="counter counter--orange ingridients__counter">
    <button
      type="button"
      class="counter__button counter__button--disabled counter__button--minus"
      @click="setBuilderQuantity('minus', elemIngredients)"
      :disabled="disabledButton('minus', elemIngredients)"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      :value="valueIngredient"
      type="text"
      name="counter"
      class="counter__input"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      @click="setBuilderQuantity('plus', elemIngredients)"
      :disabled="disabledButton('plus', elemIngredients)"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
import { counterLimit } from "@/modules/builder/constants.js";
export default {
  name: "ItemCounter",
  data() {
    return {
      valueIngredient: 0,
    };
  },
  props: {
    elemIngredients: {
      type: Object,
      required: true,
    },
  },
  watch: {
    valueIngredient: function (val) {
      // console.log(val);
      // console.log(oldVal);
      val = this.getvalueIngredient();
    },
  },
  methods: {
    getvalueIngredient() {
      let strIngredient =
        this.$store.getters["Builder/getStatePizza"]["ingredients"][
          this.elemIngredients.name
        ];
      if (typeof strIngredient != "undefined") {
        return strIngredient.valQuantity;
      } else {
        return 0;
      }
    },
    disabledButton(counter) {
      if (counter == "plus") {
        return this.valueIngredient >= counterLimit.max;
      } else {
        return this.valueIngredient <= counterLimit.min;
      }
    },

    setBuilderQuantity(counter, ingredient) {
      this.$store.commit("Builder/setBuilderQuantity", {
        counter: counter,
        ingredient: ingredient,
      });
      this.valueIngredient = this.getvalueIngredient();
      this.disabledButton(counter);
    },
  },
  created() {
    this.valueIngredient = this.getvalueIngredient();
  },
};
</script>

<style></style>
