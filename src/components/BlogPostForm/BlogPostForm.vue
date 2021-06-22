<template>
  <div>
    <fieldset class="fieldSet">
      <legend>{{ title }}</legend>
      <form
        id="blogPostForm"
        @submit.prevent
        @submit="handleBlogPost(name, heading, message)"
      >
        <div>
          <label for="name"
            >Name
            <input type="text" name="name" id="name" v-model="name" />
          </label>
        </div>
        <div>
          <label for="heading"
            >Title
            <input type="text" name="heading" id="heading" v-model="heading" />
          </label>
        </div>
        <div>
          <label for="message"
            >Blog
            <textarea name="message" id="message" v-model="message" />
          </label>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </fieldset>
  </div>
</template>

<script>
import $Store from '../../store/index';
export default {
  data() {
    return {
      title: 'Add Blog Post',
      name: '',
      heading: '',
      message: '',
    };
  },
  methods: {
    handleBlogPost(name, heading, message) {
      this.name = name;
      this.heading = heading;
      this.message = message;

      const postBlogData = {
        name: this.name,
        heading: this.heading,
        message: this.message,
      };
      $Store.dispatch('postBlog', postBlogData);
      this.name = '';
      this.heading = '';
      this.message = '';
    },
  },
};
</script>

<style scoped src="./BlogPostForm.css"></style>
