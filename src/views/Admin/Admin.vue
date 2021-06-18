<template>
  <section id="admin">
    <h1>{{ name }}</h1>
    <LoginForm />
    <BlogPostForm />
    <Blog />
  </section>
</template>

<script>
import LoginForm from '@/components/LoginForm/LoginForm';
import BlogPostForm from '@/components/BlogPostForm/BlogPostForm';
import Blog from '@/components/Blog/Blog';

export default {
  data() {
    return {
      name: 'Admin Page',
    };
  },
  components: {
    LoginForm,
    BlogPostForm,
    Blog,
  },
};
</script>

<style scoped src="./Admin.css"></style>
