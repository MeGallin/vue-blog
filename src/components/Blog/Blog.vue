<template>
  <section id="blogs">
    <div v-if="blogs !== '0 results'">
      <div v-for="blog in blogs" :key="blog.id">
        <h1>{{ blog.heading }} {{ blog.id }}</h1>
        <p>{{ blog.message }}</p>
        <p>{{ blog.posted }}</p>
        <button @click="handleDeleteBlog(blog.id)">Delete Post</button>
      </div>
    </div>
    <div v-else>{{ blogs }}</div>
  </section>
</template>

<script>
import $Store from '../../store/index';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {};
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
  },
};
</script>

<style scoped src="./Blog.css"></style>
