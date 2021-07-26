const state = {
  passwordIsValid: false,
};
const getters = {
  passwordIsValid: (state) => state.passwordIsValid,
};

const actions = {
  pwsIsValid(context, payload) {
    context.commit('SET_PASSWORD_VALIDATION', payload);
  },
};
const mutations = {
  SET_PASSWORD_VALIDATION(state, payload) {
    state.passwordIsValid = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
