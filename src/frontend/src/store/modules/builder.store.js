import pizza from "@/static/pizza.json";
import Vue from "vue";

const DefaultStatePizza = {
  name: "",
  dough: {
    name: "Тонкое",
    price: 300,
  },
  size: {
    multi: 2,
    diametr: "32 см",
  },
  sauces: {
    name: "Томатный",
    price: 50,
  },
  ingredients: {},
};

const Test = () => {
  return {
    name: "",
    dough: {
      name: "Тонкое",
      price: 300,
    },
    size: {
      multi: 2,
      diametr: "32 см",
    },
    sauces: {
      name: "Томатный",
      price: 50,
    },
    ingredients: {},
  };
};

const state = {
  pizza: pizza,
  statePizza: {
    name: "",
    dough: {
      name: "Тонкое",
      price: 300,
    },
    size: {
      multi: 2,
      diametr: "32 см",
    },
    sauces: {
      name: "Томатный",
      price: 50,
    },
    ingredients: {},
  },
};

const getters = {
  getPricePizza(state) {
    let multi = state.statePizza.size.multi;
    let priceDough = state.statePizza.dough.price;
    let priceSauce = state.statePizza.sauces.price;
    let priceIngredient = 0;
    for (let i in state.statePizza.ingredients) {
      priceIngredient =
        priceIngredient +
        state.statePizza.ingredients[i].price *
          state.statePizza.ingredients[i].valQuantity;
    }
    return multi * (priceDough + priceSauce + priceIngredient);
    // return state.statePizza.totalPrice;
  },
};

const mutations = {
  setDough(state, payload) {
    state.statePizza.dough.name = payload.name;
    state.statePizza.dough.price = payload.price;
  },
  setMulti(state, payload) {
    Vue.set(state.statePizza, "size", {
      diametr: payload.diametr,
      multi: payload.multi,
    });
  },
  setSauces(state, payload) {
    state.statePizza.sauces.name = payload.name;
    state.statePizza.sauces.price = payload.price;
  },
  setBuilderQuantity(state, payload) {
    let valQuantity = 0;
    let ingredient = payload.ingredient;
    let counter = payload.counter;
    if (typeof state.statePizza.ingredients[ingredient.name] != "undefined") {
      valQuantity = state.statePizza.ingredients[ingredient.name].valQuantity;
    }
    if (counter == "plus") {
      valQuantity += 1;
    } else {
      valQuantity -= 1;
    }
    //не более 3-х ингридиентов
    if (valQuantity >= 3) {
      valQuantity = 3;
    } else if (valQuantity < 0) {
      valQuantity = 0;
    }
    //
    Vue.set(state.statePizza.ingredients, ingredient.name, {
      price: ingredient.price,
      valQuantity: valQuantity,
    });
    // this.priceCounter();
    // state.statePizza.ingredients[ingredient.name] = {
    //   price: ingredient.price,
    //   valQuantity: valQuantity,
    // };
    state.pizza.ingredients.forEach((element) => {
      if (element.name == ingredient.name) {
        element.value = valQuantity;
      }
    });
  },
  setName(state, payload) {
    state.statePizza.name = payload.name;
  },
  newPizza(state) {
    // console.log("new");
    Vue.set(state, "statePizza", Test());
  },
  updatePizza(state, val) {
    // console.log(val);
    Vue.set(state, "statePizza", val);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions: {},
};
