<template>
  <section id="blog">
    <h1 class="underline">{{ title }}</h1>
    <p>{{ description }}</p>
    <p>{{ pubDate }}</p>
  </section>
</template>

<script>
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
};
</script>

<style scoped src="./Blog.css"></style>
