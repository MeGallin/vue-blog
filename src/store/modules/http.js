import axios from 'axios';
const state = {
  blogs: [],
  regData: [],
  userData: {},
};
const getters = {
  blogs: (state) => state.blogs,
  regData: (state) => state.regData,
  userData: (state) => state.userData,
};
const actions = {
  async getBlogs(context) {
    const url =
      'http://localhost/WebSitesDesigns/vueJs/vue-blog/src/assets/api/getBlog.php';
    try {
      const res = await axios.get(url);
      context.commit('SET_BLOGS', res.data);
    } catch (error) {
      console.log(error);
    }
  },
  //   getBlogs(context) {
  //     const url =
  //       'http://localhost/WebSitesDesigns/vueJs/vue-blog/src/assets/api/getBlog.php';
  //     axios
  //       .get(url)
  //       .then((res) => {
  //         console.log(res.data);
  //         context.commit('SET_BLOGS', res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   },
  // userRegistration(context, regData) {
  //   console.log(JSON.stringify(regData));
  //   const convertedData = JSON.stringify(regData);
  //   const url =
  //     'http://localhost/WebSitesDesigns/vueJs/vue-blog/src/assets/api/register.php';
  //   axios.post(url, convertedData).then((res) => {
  //     context.commit('SET_REGISTRATION_DATA', regData);
  //     console.log(res.data);
  //   });
  // },
  async userRegistration(context, regData) {
    console.log('HTTP ACTION:', regData.name);
    const convertedData = JSON.stringify(regData);
    const url =
      'http://localhost/WebSitesDesigns/vueJs/vue-blog/src/assets/api/register.php';
    try {
      await axios.post(url, convertedData);
      context.commit('SET_REGISTRATION_DATA', regData);
    } catch (error) {
      console.log(error);
    }
  },
  async userLogin(context, userData) {
    const url =
      'http://localhost/WebSitesDesigns/vueJs/vue-blog/src/assets/api/login.php';

    try {
      await axios.post(url, userData);
      context.commit('SET_USER_DATA', userData);
    } catch (error) {
      console.log(error);
    }
  },
};
const mutations = {
  SET_BLOGS(state, blogs) {
    state.blogs = blogs;
  },
  SET_REGISTRATION_DATA(state, regData) {
    state.regData = regData;
  },
  SET_USER_DATA(state, userData) {
    state.userData = userData;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
