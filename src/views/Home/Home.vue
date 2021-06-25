<template>
  <section id="home">
    <HomeBlog />
  </section>
</template>

<script>
// @ is an alias to /src
import HomeBlog from '@/components/Blog/HomeBlog/HomeBlog';

export default {
  data() {
    return {
      name: 'Home',
    };
  },
  components: {
    HomeBlog,
  },
};
</script>
<style scoped src="./Home.css"></style>
