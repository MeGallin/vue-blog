import axios from 'axios';
const state = {
  blogs: [],
};
const getters = {
  blogs: (state) => state.blogs,
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
};
const mutations = {
  SET_BLOGS(state, blogs) {
    state.blogs = blogs;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
