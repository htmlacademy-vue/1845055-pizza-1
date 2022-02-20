import user from "@/static/user.json";

const state = {
  user: user,
  isLoggin: false,
  address: {
    street: "",
    apartment: "",
    house: "",
    phone: "",
  },
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
  setAddress(state, payload) {
    state.address[payload.name] = payload.value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions: {},
};
