<template>
  <section id="blog">
    <div v-for="blog in blogs" :key="blog.id">
      <h1>{{ blog.heading }}</h1>
      <p>{{ blog.message }}</p>
      <p>{{ blog.posted }}</p>
    </div>
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
};
</script>

<style scoped src="./Blog.css"></style>
