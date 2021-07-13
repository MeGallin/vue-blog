<template>
  <div>
    <fieldset class="fieldSet">
      <legend>{{ title }}</legend>
      <form
        id="blogPostForm"
        @submit.prevent
        @submit="
          handleBlogPost(
            userData[0].name + userData[0].surname,
            heading,
            message
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
              id="name"
              v-model="fullName"
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
              id="heading"
              v-model="heading"
              :class="!this.heading ? 'invalid' : 'entered'"
            />
          </label>
        </div>
        <div>
          <input
            @click="handleToggle()"
            type="checkbox"
            name="toggle"
            id="toggle"
            v-model="toggle"
          />
          <label for="toggle">
            <span v-if="toggle">SHOW EDITOR</span>
            <span v-else>SHOW TEXTAREA </span>
          </label>
        </div>
        <div v-if="toggle">
          <label for="message"
            >Blog
            <textarea
              name="message"
              id="message"
              v-model="message"
              :class="this.message.length < 10 ? 'invalid' : 'entered'"
            />
          </label>
        </div>
        <div v-else>
          Blog
          <vue-editor
            v-model="message"
            class="text-editor"
            :class="this.message.length < 10 ? 'invalid' : 'entered'"
          ></vue-editor>
        </div>

        <div>
          <button type="submit" :disabled="isDisabled">Submit</button>
        </div>
      </form>
    </fieldset>
  </div>
</template>

<script>
import $Store from '../../store/index';
import { mapGetters } from 'vuex';
import { VueEditor } from 'vue2-editor';
export default {
  data() {
    return {
      title: 'Add Blog Post',
      toggle: false,
      name: '',
      heading: '',
      message: '',
      isDisabled: true,
    };
  },
  components: {
    VueEditor,
  },
  computed: {
    ...mapGetters(['userData']),
    fullName() {
      return this.userData[0].name + ' ' + this.userData[0].surname;
    },
  },
  methods: {
    handleToggle() {
      const toggleValue = event.target.checked;
      if (toggleValue) {
        this.toggle = true;
      } else {
        this.toggle = false;
      }
    },
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
    heading(val) {
      this.heading = val;
      if (this.heading.length != '' && this.message.length > 10) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
    message(val) {
      this.message = val;
      if (this.message.length > 10 && this.heading.length != '') {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
  },
};
</script>

<style scoped src="./BlogPostForm.css"></style>
