<template>
  <footer>
    <div>{{ title }}<date-time></date-time></div>
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
