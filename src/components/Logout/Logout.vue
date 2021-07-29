<template>
  <div v-if="isAuthenticated">
    <button type="button" @click="handleLogout()">
      {{ title }}
    </button>
    <div class="userDetails">User: {{ userData[0].name }}</div>
  </div>
</template>

<script>
import $Store from '../../store/index';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      title: 'Logout',
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'userData']),
  },
  methods: {
    handleLogout() {
      $Store.dispatch('userLogout', false);
    },
  },
};
</script>

<style scoped src="./Logout.css"></style>
