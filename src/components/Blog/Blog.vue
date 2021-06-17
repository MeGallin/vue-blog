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
    return {
      name: 'Blog',
      pubDate: new Date(),
      title: 'Blog Number one',
      description:
        'This the first blog and this will be a full story. I will be creating an API to read from a \n DB',
    };
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
