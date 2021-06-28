import axios from 'axios';
import $router from '../../router/index';
import { API_URL } from '../../__env_dev';

const state = {
  blogs: [],
  postBlogData: [],
  regData: [],
  userData: {},
  blogId: null,
  isAuthenticated: false,
};
const getters = {
  blogs: (state) => state.blogs,
  postBlogData: (state) => state.postBlogData,
  regData: (state) => state.regData,
  userData: (state) => state.userData,
  blogId: (state) => state.blogId,
  isAuthenticated: (state) => state.isAuthenticated,
};

const actions = {
  async getBlogs(context) {
    const url = API_URL.getBlogsUrl;
    try {
      const res = await axios.get(url);
      context.commit('SET_BLOGS', res.data);
    } catch (error) {
      console.log(error);
    }
  },
  async userRegistration(context, regData) {
    const convertedData = JSON.stringify(regData);
    const url = API_URL.getUserRegistrationUrl;
    try {
      await axios.post(url, convertedData);
      context.commit('SET_REGISTRATION_DATA', regData);
    } catch (error) {
      console.log(error);
    }
  },
  async postBlog(context, blogPostData) {
    const convertedData = JSON.stringify(blogPostData);
    const url = API_URL.postBlogUrl;

    try {
      await axios.post(url, convertedData);
      context.commit('SET_POST_DATA', blogPostData);
      context.dispatch('getBlogs');
    } catch (error) {
      console.log(error);
    }
  },
  async userLogin(context, userData) {
    const url = API_URL.userLoginUrl;

    try {
      const res = await axios.post(url, userData);

      res.data.filter((email) => {
        if (email.email === userData.email) {
          context.commit('SET_IS_AUTHENTICATED', true);
          context.commit('SET_USER_DATA', res.data);
          $router.replace({ name: 'Admin' });
        } else {
          context.commit('SET_IS_AUTHENTICATED', false);
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  async userLogout(context, payload) {
    context.commit('SET_IS_AUTHENTICATED', payload);
    $router.push('/').catch(() => {}); // prevent router duplication
  },
  async deleteBlog(context, id) {
    const url = API_URL.deleteBlogUrl;
    try {
      await axios.delete(url + id);
      context.commit('SET_DELETE_BLOG', id);
      context.dispatch('getBlogs');
    } catch (error) {
      console.log(error);
    }
  },
  async updateBlog(context, payload) {
    const url = API_URL.updateBlogUrl;
    try {
      await axios.put(url, payload);
      context.commit('SET_UPDATE_FORM', payload);
      context.dispatch('getBlogs');
    } catch (error) {
      console.log(error);
    }
  },
  // Action for the contact form
  async postFormData(context, payload) {
    console.log(context);
    const url = API_URL.postFormUrl;
    try {
      await axios.post(url, payload);
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
  SET_IS_AUTHENTICATED(state, payload) {
    state.isAuthenticated = payload;
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
