<template>
  <div class="content__ingridients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингридиенты</h2>

      <div class="sheet__content ingridients">
        <div class="ingridients__sauce">
          <p>Основной соус:</p>

          <label
            v-for="elemSauces in onlySauces"
            :key="elemSauces.name"
            class="radio ingridients__input"
          >
            <input
              type="radio"
              name="sauce"
              :value="getValueSauces(elemSauces.name)"
              :checked="elemSauces.name == 'Томатный'"
              @input="setSauces(elemSauces)"
            />
            <span>{{ elemSauces.name }}</span>
          </label>
        </div>

        <div class="ingridients__filling">
          <p>Начинка:</p>

          <ul class="ingridients__list">
            <li
              v-for="elemIngredients in builderPizzaIngredients"
              :key="elemIngredients.name"
              class="ingridients__item"
            >
              <AppDrag
                :transferData="elemIngredients"
                :draggableValue="draggableValue(elemIngredients.name)"
              >
                <span
                  class="filling"
                  :class="getClassIngredients(elemIngredients.name)"
                  >{{ elemIngredients.name }}</span
                >
              </AppDrag>

              <div class="counter counter--orange ingridients__counter">
                <button
                  type="button"
                  class="
                    counter__button
                    counter__button--disabled
                    counter__button--minus
                  "
                  @click="setBuilderQuantity('minus', elemIngredients)"
                  :disabled="disabledButton('minus', elemIngredients)"
                >
                  <span class="visually-hidden">Меньше</span>
                </button>
                <input
                  :value="valIngredients(elemIngredients)"
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
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppDrag from "@/common/components/AppDrag.vue";
import { counterLimit } from "@/modules/builder/constants.js";

export default {
  name: "BuilderIngredientsSelector",
  components: {
    AppDrag,
  },
  props: {
    onlySauces: {
      type: Array,
      required: true,
    },
    builderPizzaIngredients: {
      type: Array,
      required: true,
    },
    statePizza: {
      type: Object,
      required: true,
    },
  },
  // data: () => {
  //   return {
  //     counterLimit: counterLimit,
  //   };
  // },
  methods: {
    draggableValue(ingredientName) {
      if (typeof this.statePizza.ingredients[ingredientName] != "undefined") {
        if (this.statePizza.ingredients[ingredientName].valQuantity >= 3) {
          return false;
        }
      }
      return true;
    },
    disabledButton(counter, ingredient) {
      let valQuantity = this.valIngredients(ingredient);
      if (counter == "plus") {
        return valQuantity >= counterLimit.max;
      } else {
        return valQuantity <= counterLimit.min;
      }
    },
    valIngredients(ingredient) {
      let val = 0;
      if (typeof this.statePizza.ingredients[ingredient.name] != "undefined") {
        return this.statePizza.ingredients[ingredient.name].valQuantity;
      }
      return val;
    },
    setBuilderQuantity(counter, ingredient) {
      this.$emit("setBuilderQuantity", counter, ingredient);
    },
    setSauces(val) {
      this.$emit("setSauces", val);
    },
    getValueSauces(name) {
      if (name == "Томатный") {
        return "tomato";
      } else {
        return "creamy";
      }
    },
    getClassIngredients(name) {
      if (name == "Грибы") {
        return "filling--mushrooms";
      } else if (name == "Чеддер") {
        return "filling--cheddar";
      } else if (name == "Салями") {
        return "filling--salami";
      } else if (name == "Ветчина") {
        return "filling--ham";
      } else if (name == "Ананас") {
        return "filling--ananas";
      } else if (name == "Бекон") {
        return "filling--bacon";
      } else if (name == "Лук") {
        return "filling--onion";
      } else if (name == "Чили") {
        return "filling--chile";
      } else if (name == "Халапеньо") {
        return "filling--jalapeno";
      } else if (name == "Маслины") {
        return "filling--olives";
      } else if (name == "Томаты") {
        return "filling--tomatoes";
      } else if (name == "Лосось") {
        return "filling--salmon";
      } else if (name == "Моцарелла") {
        return "filling--mozzarella";
      } else if (name == "Пармезан") {
        return "filling--parmesan";
      } else if (name == "Блю чиз") {
        return "filling--blue_cheese";
      } else {
        return "";
      }
    },
  },
};
</script>

<style></style>
