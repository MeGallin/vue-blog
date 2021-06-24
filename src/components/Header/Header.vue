<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link> |
    <Logout />
  </nav>
</template>

<script>
import Logout from '@/components/Logout/Logout';
export default {
  data() {
    return {
      header: 'HEADER COMP',
    };
  },
  components: {
    Logout,
  },
};
</script>
<style scoped src="./Header.css"></style>
