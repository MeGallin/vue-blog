<template>
  <nav>
    <div>
      <router-link to="/">Home</router-link> |

      <span v-if="isAuthenticated">
        <router-link to="/admin">Admin</router-link> |
      </span>
      <span v-if="isAuthenticated">
        <router-link to="/register">Register</router-link> |
      </span>
      <router-link to="/about">About</router-link>
    </div>
    <div v-if="!isAuthenticated">
      <router-link to="/login"> <button>Login</button> </router-link>
    </div>
    <Logout />
  </nav>
</template>

<script>
import Logout from '@/components/Logout/Logout';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      header: 'HEADER COMP',
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
  components: {
    Logout,
  },
};
</script>
<style scoped src="./Header.css"></style>
