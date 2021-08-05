<template>
  <nav>
    <div>
      <router-link to="/" exact-active-class="exact-active">Home</router-link> |

      <span v-if="isAuthenticated">
        <router-link to="/admin" exact-active-class="exact-active"
          >Admin</router-link
        >
        |
      </span>
      <span v-if="isAuthenticated">
        <router-link to="/register" exact-active-class="exact-active"
          >Register</router-link
        >
        |
      </span>
      <router-link to="/about" exact-active-class="exact-active"
        >About</router-link
      >
    </div>
    <div v-if="!isAuthenticated">
      <router-link to="/login" exact-active-class="exact-active">
        <button>Login</button>
      </router-link>
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
