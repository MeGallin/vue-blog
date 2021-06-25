<template>
  <div id="app-wrapper">
    <Header />
    <router-view />

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import './App.css';
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
