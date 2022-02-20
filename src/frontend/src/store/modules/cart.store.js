import miscList from "@/static/misc.json";
import Vue from "vue";

const state = {
  pizzaList: [],
  testSelect: {
    1: "Заберу сам",
    2: "Новый адрес",
    3: "Дом",
  },
  miscList: miscList,
  orderList: {
    pizzaList: {},
    miscList: {},
  },
};
const getters = {
  getOrderPrice(state) {
    let pizzaOrderPrice = 0;
    let miscOrderPrice = 0;
    for (let p in state.orderList.pizzaList) {
      pizzaOrderPrice +=
        state.orderList.pizzaList[p].price *
        state.orderList.pizzaList[p].valQuantity;
    }
    for (let m in state.orderList.miscList) {
      miscOrderPrice +=
        state.orderList.miscList[m].price *
        state.orderList.miscList[m].valQuantity;
    }
    return pizzaOrderPrice + miscOrderPrice;
  },
};
const mutations = {
  setMiscQuantity(state, payload) {
    let valQuantity = 0;
    let misc = payload.misc;
    let counter = payload.counter;
    valQuantity = state.orderList.miscList[misc.name]?.valQuantity || 0;
    if (counter == "plus") {
      valQuantity += 1;
    } else {
      valQuantity -= 1;
    }
    Vue.set(state.orderList.miscList, misc.name, {
      price: misc.price,
      valQuantity: valQuantity,
    });
  },
  setPizzaQuantity(state, payload) {
    let valQuantity = 0;
    let counter = payload.counter;
    let pizzaName = payload.pizza.statePizza.name;
    valQuantity = state.orderList.pizzaList[pizzaName]?.valQuantity || 0;
    if (counter == "plus") {
      valQuantity += 1;
    } else {
      valQuantity -= 1;
    }
    Vue.set(state.orderList.pizzaList, pizzaName, {
      statePizza: payload.pizza.statePizza,
      price: payload.pizza.price,
      valQuantity: valQuantity,
    });
  },
  addPizza(state, payload) {
    let valQuantity =
      state.orderList.pizzaList[payload.statePizza.name]?.valQuantity || 1;
    Vue.set(state.orderList.pizzaList, payload.statePizza.name, {
      statePizza: payload.statePizza,
      price: payload.totalPrice,
      valQuantity: valQuantity,
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
