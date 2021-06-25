<template>
  <section id="admin">
    <BlogPostForm />
    <hr />
    <AdminBlog />
  </section>
</template>

<script>
import BlogPostForm from '@/components/BlogPostForm/BlogPostForm';
import AdminBlog from '@/components/Blog/AdminBlog/AdminBlog';

export default {
  data() {
    return {};
  },
  components: {
    BlogPostForm,
    AdminBlog,
  },
};
</script>

<style scoped src="./Admin.css"></style>
