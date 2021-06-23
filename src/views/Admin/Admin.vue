<template>
  <section id="admin">
    <h1>{{ name }}</h1>
    <Admin />
    <BlogPostForm />
    <AdminBlog />
  </section>
</template>

<script>
import Admin from '@/components/Admin/Admin';
import BlogPostForm from '@/components/BlogPostForm/BlogPostForm';
import AdminBlog from '@/components/Blog/AdminBlog/AdminBlog';

export default {
  data() {
    return {
      name: 'Admin Page',
    };
  },
  components: {
    Admin,
    BlogPostForm,
    AdminBlog,
  },
};
</script>

<style scoped src="./Admin.css"></style>
