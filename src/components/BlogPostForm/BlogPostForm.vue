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
            <input
              type="text"
              name="name"
              id="name"
              v-model="name"
              :class="!this.name ? 'invalid' : 'entered'"
            />
          </label>
        </div>
        <div>
          <label for="heading"
            >Title
            <input
              type="text"
              name="heading"
              id="heading"
              v-model="heading"
              :class="!this.heading ? 'invalid' : 'entered'"
            />
          </label>
        </div>
        <!-- <div>
          <label for="message"
            >Blog
            <textarea
              name="message"
              id="message"
              v-model="message"
              :class="this.message.length < 10 ? 'invalid' : 'entered'"
            />
          </label>
        </div> -->
        <vue-editor v-model="message" class="text-editor"></vue-editor>
        <div>
          <button type="submit" :disabled="isDisabled">Submit</button>
        </div>
      </form>
    </fieldset>
  </div>
</template>

<script>
import $Store from '../../store/index';
import { VueEditor } from 'vue2-editor';
export default {
  data() {
    return {
      title: 'Add Blog Post',
      name: '',
      heading: '',
      message: '',
      isDisabled: true,
    };
  },
  components: {
    VueEditor,
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
  watch: {
    name(val) {
      this.name = val;
      if (this.name.length != '' && this.heading.length != '') {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
    heading(val) {
      this.heading = val;
      if (this.heading.length != '' && this.name.length != '') {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
  },
};
</script>

<style scoped src="./BlogPostForm.css"></style>
