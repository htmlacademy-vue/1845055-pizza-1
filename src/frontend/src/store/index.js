import Vue from "vue";
import Vuex from "vuex";
import modules from "@/store/modules";
import jsonUsers from "@/static/user.json";

Vue.use(Vuex);

//const actions = {
// async init({ dispatch }) {
//   dispatch("fetchUsers");
//   // dispatch("Auth/query");
//   // dispatch("Tasks/query");
// },
// fetchUsers({ commit }) {
//   const users = jsonUsers;
//   commit({ module: null, entity: "users", value: users });
// },
//};

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules,
});
