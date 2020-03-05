import auth from "@/api/auth";
const state = {
  user: null,
  isLogin: false
};
const getters = {
  isLogin(state) {
    return state.isLogin;
  },
  user(state) {
    return state.user;
  }
};
const mutations = {
  setUser(state, payload) {
    state.user = payload.user;
  },
  setIsLogin(state, payload) {
    state.isLogin = payload.isLogin;
  }
};
const actions = {
  login({ commit }, { username, password }) {
    return auth.login({ username, password }).then(res => {
      commit("setUser", { user: res.data });
      commit("setIsLogin", { isLogin: true });
    });
  },
  async register({ commit }, { username, password }) {
    let res = await auth.register({ username, password });
    commit("setUser", { user: res.data });
    commit("setIsLogin", { isLogin: true });
    return res.data;
  },
  async logout({ commit }) {
    let res = await auth.logout();
    commit("setUser", { user: null });
    commit("setIsLogin", { isLogin: false });
  },

  async checkLogin({ commit, state }) {
    if (state.isLogin) return true;
    let res = await auth.getInfo();
    commit("setIsLogin", { isLogin: res.isLogin });
    if (!res.isLogin) return false;
    commit("setUser", { user: res.data });
    return true;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
