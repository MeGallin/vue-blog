<template>
  <section id="aboutView">
    <h3>{{ title }}</h3>
    <p>
      Welcome to Vue-Blog. Vue-Blog, is a simple blogging application, developed
      using VueJS, PHP and mySQL.
    </p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'About',
    };
  },
};
</script>

<style scoped src="./AboutView.css"></style>
