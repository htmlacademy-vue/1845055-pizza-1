<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
        @input="setName"
      />
    </label>

    <AppDrop @drop="setDrop">
      <div class="content__constructor">
        <div class="pizza" :class="getClassPizza">
          <div class="pizza__wrapper">
            <div
              v-for="(elemIngredients, key) in statePizza.ingredients"
              :key="key"
              class="pizza__filling"
              :class="getClassFillingIngredients(key)"
            ></div>
          </div>
        </div>
      </div>
    </AppDrop>

    <BuilderPriceCounter />
  </div>
</template>

<script>
import BuilderPriceCounter from "./BuilderPriceCounter.vue";
import AppDrop from "@/common/components/AppDrop.vue";
export default {
  components: {
    BuilderPriceCounter,
    AppDrop,
  },
  name: "BuilderPizzaView",
  data() {
    return {
      statePizza: {},
    };
  },
  watch: {
    statePizza: function (val) {
      // console.log(val);
      // console.log(oldVal);
      val = this.getState();
    },
  },
  computed: {
    // statePizza: function () {
    //   return getState();
    // },
    getClassPizza: function () {
      let className = "pizza--foundation--";
      if (this.statePizza.dough.name == "Тонкое") {
        className += "small-";
      } else {
        className += "big-";
      }
      if (this.statePizza.sauces.name == "Томатный") {
        className += "tomato";
      } else {
        className += "creamy";
      }
      return className;
    },
  },
  methods: {
    getState() {
      return this.$store.getters["Builder/getStatePizza"];
    },
    setName: function (event) {
      this.$store.commit("Builder/setName", {
        name: event.target.value,
      });
    },
    getClassIngredients(name) {
      if (name == "Грибы") {
        return "pizza__filling--mushrooms";
      } else if (name == "Чеддер") {
        return "pizza__filling--cheddar";
      } else if (name == "Салями") {
        return "pizza__filling--salami";
      } else if (name == "Ветчина") {
        return "pizza__filling--ham";
      } else if (name == "Ананас") {
        return "pizza__filling--ananas";
      } else if (name == "Бекон") {
        return "pizza__filling--bacon";
      } else if (name == "Лук") {
        return "pizza__filling--onion";
      } else if (name == "Чили") {
        return "pizza__filling--chile";
      } else if (name == "Халапеньо") {
        return "pizza__filling--jalapeno";
      } else if (name == "Маслины") {
        return "pizza__filling--olives";
      } else if (name == "Томаты") {
        return "pizza__filling--tomatoes";
      } else if (name == "Лосось") {
        return "pizza__filling--salmon";
      } else if (name == "Моцарелла") {
        return "pizza__filling--mozzarella";
      } else if (name == "Пармезан") {
        return "pizza__filling--parmesan";
      } else if (name == "Блю чиз") {
        return "pizza__filling--blue_cheese";
      } else {
        return "";
      }
    },
    getClassFillingIngredients(key) {
      console.log(key);
      let classIng = this.getClassIngredients(key);
      if (this.statePizza.ingredients[key].valQuantity == 2) {
        classIng += " pizza__filling--second";
      } else if (this.statePizza.ingredients[key].valQuantity == 3) {
        classIng += " pizza__filling--third";
      } else if (this.statePizza.ingredients[key].valQuantity == 0) {
        classIng = "";
      }
      return classIng;
    },
    setDrop(val) {
      this.$store.commit("Builder/setBuilderQuantity", {
        counter: "plus",
        ingredient: val,
      });
      // this.statePizza = this.$store.getters["Builder/getStatePizza"];
      //this.$emit("setDrop", val);
    },
  },
  created() {
    this.statePizza = this.getState();
  },
};
</script>

<style></style>
