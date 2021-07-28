<template>
  <section id="admin">
    <div v-if="blogs !== '0 results'">
      <div v-for="blog in blogs" :key="blog.id">
        <h1>{{ blog.heading }} [id: {{ blog.id }}]</h1>
        <p>{{ blog.message }}</p>
        <p>{{ blog.posted }}</p>
        <p>{{ blog.name }}</p>

        <button
          @click="handleDeleteBlog(blog.id, blog.name, userData)"
          :class="
            blog.name === userData[0].name + userData[0].surname ||
            userData[0].email === 'admin@mail.com'
              ? 'highLiteUserName'
              : 'notHighLiteUserName'
          "
          title="Green button means you DELETE"
        >
          Delete Post
        </button>
        <button
          v-if="!showUpdateForm"
          @click="showForm(blog.id, blog.name, userData)"
          :class="
            blog.name === userData[0].name + userData[0].surname ||
            userData[0].email === 'admin@mail.com'
              ? 'highLiteUserName'
              : 'notHighLiteUserName'
          "
          title="Green button means you EDIT"
        >
          Edit Post
        </button>

        <hr />
        <div v-if="showUpdateForm && blog.id === showFormId">
          <fieldset class="fieldSet">
            <legend>{{ title }}</legend>
            <form
              @submit.prevent
              @submit="
                handleUpdate(
                  blog.id,
                  blog.name,
                  blog.heading,
                  blog.message,
                  userData
                )
              "
            >
              <div>
                <label for="name"
                  >Name
                  <input
                    readonly
                    type="text"
                    name="name"
                    v-model="blog.name"
                    value="name"
                    class="entered"
                  />
                </label>
              </div>
              <div>
                <label for="heading"
                  >Title
                  <input
                    type="text"
                    name="heading"
                    v-model="blog.heading"
                    value="heading"
                    :class="!blog.heading ? 'invalid' : 'entered'"
                  />
                </label>
              </div>
              <div>
                <label for="message"
                  >Blog
                  <textarea
                    name="message"
                    v-model="blog.message"
                    value="message"
                    :class="blog.message.length < 10 ? 'invalid' : 'entered'"
                  />
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  :disabled="!blog.heading || blog.message.length < 10"
                >
                  Update
                </button>

                <button type="button" @click="handleCancel()">Cancel</button>
              </div>
            </form>
          </fieldset>
        </div>
      </div>
    </div>
    <div v-else>{{ blogs }}</div>

    <div v-if="invalidUserMessage">
      <div class="mask">
        <div class="invalidUserMessage">
          <p>
            <span class="wordSwap">{{ userData[0].name }}</span
            >, you are not authorised to
            <span class="wordSwap">{{ wordSwap }}</span> this blog. You can only
            <span class="wordSwap">{{ wordSwap }}</span> your own blogs.
          </p>
          <button @click="handleInvalidUserMessage">ok</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $Store from '../../../store/index';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      title: 'Edit and Update form',
      name: '',
      heading: '',
      message: '',
      showUpdateForm: false,
      showFormId: null,
      invalidUserMessage: false,
      wordSwap: '',
    };
  },
  computed: {
    ...mapGetters(['blogs', 'userData']),
  },
  created() {
    $Store.dispatch('getBlogs');
  },
  methods: {
    handleDeleteBlog(id, name, userData) {
      const userFirstName = userData[0].name;
      const userSurname = userData[0].surname;
      const loggedInName = userFirstName + userSurname;
      if (name === loggedInName || userData[0].email === 'admin@mail.com') {
        $Store.dispatch('deleteBlog', id);
      } else {
        this.invalidUserMessage = true;
        this.wordSwap = 'DELETE';
      }
    },
    showForm(id, name, userData) {
      const userFirstName = userData[0].name;
      const userSurname = userData[0].surname;
      const loggedInName = userFirstName + userSurname;
      if (name === loggedInName || userData[0].email === 'admin@mail.com') {
        this.showUpdateForm = true;
        this.showFormId = id;
      } else {
        this.invalidUserMessage = true;
        this.wordSwap = 'EDIT';
      }
    },
    handleUpdate(id, name, heading, message) {
      const formData = {
        id,
        name,
        heading,
        message,
      };

      $Store.dispatch('updateBlog', formData);
      this.showUpdateForm = false;
    },
    handleCancel() {
      this.showUpdateForm = false;
    },
    handleInvalidUserMessage() {
      this.invalidUserMessage = false;
    },
  },
};
</script>

<style scoped src="./AdminBlog.css"></style>
// https://github.com/davidroyer/vue2-editor
