<template>
  <nav>
    <router-link to="/"></router-link>Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      header: 'HEADER COMP',
    };
  },
};
</script>
<style scoped src="./Header.css"></style>
