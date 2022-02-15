import users from "@/static/user.json";

const state = {
  user: users[0],
  isLoggin: false,
};

const getters = {
  isLoggin(state) {
    return state.isLoggin;
  },
  getUser(state) {
    return state.user;
  },
};

const mutations = {
  isLogg(state, n) {
    state.isLoggin = n;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions: {},
};
