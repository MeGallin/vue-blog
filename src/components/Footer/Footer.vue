<template>
  <footer>
    <div>
      <router-link to="/contact">Contact Me</router-link>
    </div>
    <date-time></date-time>
  </footer>
</template>

<script>
import DateTime from '../DateTime/DateTime.vue';

export default {
  components: { DateTime },
  data() {
    return {
      title: 'Footer COMP',
    };
  },
};
</script>

<style scoped src="./Footer.css"></style>
