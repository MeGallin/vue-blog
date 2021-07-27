const state = {
  nameIsValid: false,
  surnameIsValid: false,
  emailIsValid: false,
  passwordIsValid: false,
};
const getters = {
  validName: (state) => state.nameIsValid,
  validSurname: (state) => state.surnameIsValid,
  validEmail: (state) => state.emailIsValid,
  validPassword: (state) => state.passwordIsValid,
};

const actions = {
  fNameIsValid(context, payload) {
    context.commit('SET_NAME_VALIDATION', payload);
  },
  sNameIsValid(context, payload) {
    context.commit('SET_SURNAME_VALIDATION', payload);
  },
  mailIsValid(context, payload) {
    context.commit('SET_EMAIL_VALIDATION', payload);
  },
  pwsIsValid(context, payload) {
    context.commit('SET_PASSWORD_VALIDATION', payload);
  },
};
const mutations = {
  SET_NAME_VALIDATION(state, payload) {
    state.nameIsValid = payload;
  },
  SET_SURNAME_VALIDATION(state, payload) {
    state.surnameIsValid = payload;
  },
  SET_EMAIL_VALIDATION(state, payload) {
    state.emailIsValid = payload;
  },
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
