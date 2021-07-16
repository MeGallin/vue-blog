<template>
  <section id="about">
    <AboutView></AboutView>
  </section>
</template>

<script>
import AboutView from '../../components/Blog/AboutView/AboutView.vue';
export default {
  data() {
    return {
      name: 'About me page',
    };
  },
  components: {
    AboutView,
  },
};
</script>

<style scoped src="./About.css"></style>
