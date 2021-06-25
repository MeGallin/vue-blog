<template>
  <section id="blogs">
    <div v-if="blogs !== '0 results'">
      <div v-for="blog in blogs" :key="blog.id">
        <h1>{{ blog.heading }} [id: {{ blog.id }}]</h1>
        <p>{{ blog.message }}</p>
        <p>{{ blog.posted }}</p>
        <button @click="handleDeleteBlog(blog.id)">Delete Post</button>

        <button v-if="!showUpdateForm" @click="showForm(blog.id)">
          Edit Post
        </button>
        <hr />
        <div v-if="showUpdateForm && blog.id === showFormId">
          <fieldset class="fieldSet">
            <legend>{{ title }}</legend>
            <form
              @submit.prevent
              @submit="
                handleUpdate(blog.id, blog.name, blog.heading, blog.message)
              "
            >
              <div>
                <label for="name"
                  >Name
                  <input
                    id="blog.id"
                    type="text"
                    name="name"
                    v-model="blog.name"
                    value="name"
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
                  />
                </label>
              </div>

              <div>
                <button type="submit">Update</button>
                <button type="button" @click="handleCancel()">Cancel</button>
              </div>
            </form>
          </fieldset>
        </div>
      </div>
    </div>
    <div v-else>{{ blogs }}</div>
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
    };
  },
  computed: {
    ...mapGetters(['blogs']),
  },
  created() {
    $Store.dispatch('getBlogs');
  },
  methods: {
    handleDeleteBlog(id) {
      $Store.dispatch('deleteBlog', id);
    },
    showForm(id) {
      this.showUpdateForm = true;
      this.showFormId = id;
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
  },
};
</script>

<style scoped src="./AdminBlog.css"></style>
