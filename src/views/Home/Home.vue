<template>
  <section id="home">
    <Blog />
  </section>
</template>

<script>
// @ is an alias to /src
import Blog from '@/components/Blog/Blog';

export default {
  data() {
    return {
      name: 'Home',
    };
  },
  components: {
    Blog,
  },
};
</script>
<style scoped src="./Home.css"></style>
