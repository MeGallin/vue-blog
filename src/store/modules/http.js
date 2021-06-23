import axios from 'axios';
const state = {
  blogs: [],
  postBlogData: [],
  regData: [],
  userData: {},
  blogId: null,
};
const getters = {
  blogs: (state) => state.blogs,
  postBlogData: (state) => state.postBlogData,
  regData: (state) => state.regData,
  userData: (state) => state.userData,
  blogId: (state) => state.blogId,
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
  async postBlog(context, blogPostData) {
    const convertedData = JSON.stringify(blogPostData);
    const url =
      'http://localhost/WebSitesDesigns/vueJs/vue-blog/src/assets/api/addBlog.php';

    try {
      await axios.post(url, convertedData);
      context.commit('SET_POST_DATA', blogPostData);
      context.dispatch('getBlogs');
    } catch (error) {
      console.log(error);
    }
  },
  async userLogin(context, userData) {
    const url =
      'http://localhost/WebSitesDesigns/vueJs/vue-blog/src/assets/api/login.php';

    try {
      await axios.post(url, userData);
      console.log(userData);
      context.commit('SET_USER_DATA', userData);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteBlog(context, id) {
    const url = `http://localhost/WebSitesDesigns/vueJs/vue-blog/src/assets/api/delete.php?id=${id}`;
    try {
      // axios.defaults.headers.common['Access-Control-Allow-Origin'];
      await axios.delete(url);
      context.commit('SET_DELETE_BLOG', id);
      context.dispatch('getBlogs');
    } catch (error) {
      console.log(error);
    }
  },
  async updateBlog(context, payload) {
    const url = `http://localhost/WebSitesDesigns/vueJs/vue-blog/src/assets/api/update.php`;
    try {
      await axios.put(url, payload);
      context.commit('SET_UPDATE_FORM', payload);
      context.dispatch('getBlogs');
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
  SET_POST_DATA(state, postBlogData) {
    state.postBlogData = postBlogData;
  },
  SET_USER_DATA(state, userData) {
    state.userData = userData;
  },
  SET_DELETE_BLOG(state, id) {
    state.blogId = id;
  },
  SET_UPDATE_FORM(state, payload) {
    state.blogs = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

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
