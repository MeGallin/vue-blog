<template>
  <div v-if="blogs !== '0 results'">
    <div v-for="blog in blogs" :key="blog.id">
      <h1>{{ blog.heading }}</h1>
      <p>{{ blog.message }}</p>
      <p>{{ blog.posted }}</p>
      <p>Post by {{ blog.name }}</p>
    </div>
  </div>
</template>

<script>
import $Store from '../../../store/index';
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['blogs']),
  },
  created() {
    $Store.dispatch('getBlogs');
  },
};
</script>

<style scoped src="./HomeBlog.css"></style>
