<template>
  <div class="counter counter--orange" :class="classItem">
    <button
      type="button"
      class="counter__button counter__button--disabled counter__button--minus"
      @click="setBuilderQuantity('minus', elemIngredients)"
      :disabled="disabledButtonMin"
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
      :class="{ 'counter__button--orange': orange }"
      @click="setBuilderQuantity('plus', elemIngredients)"
      :disabled="disabledButtonPlus"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ItemCounter",
  props: {
    valueIngredient: {
      type: Number,
      required: true,
    },
    elemIngredients: {
      type: Object,
      required: true,
    },
    counterLimitMax: {
      type: Number,
      required: true,
    },
    counterLimitMin: {
      type: Number,
      required: true,
    },
    orange: {
      type: Boolean,
      required: true,
    },
    classItem: {
      type: String,
      required: true,
    },
  },
  computed: {
    disabledButtonPlus: function () {
      return this.valueIngredient >= this.counterLimitMax;
    },
    disabledButtonMin: function () {
      return this.valueIngredient <= this.counterLimitMin;
    },
  },
  methods: {
    setBuilderQuantity(counter, ingredient) {
      this.$emit("setBuilderQuantity", {
        counter: counter,
        ingredient: ingredient,
      });
    },
  },
};
</script>

<style></style>
