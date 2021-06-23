<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/login">Login</router-link>
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
