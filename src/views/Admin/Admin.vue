<template>
  <section id="admin">
    <h1>{{ name }}</h1>
    <LoginForm />
  </section>
</template>

<script>
import LoginForm from '@/components/LoginForm/LoginForm';

export default {
  data() {
    return {
      name: 'Admin Page',
    };
  },
  components: {
    LoginForm,
  },
};
</script>

<style scoped src="./Admin.css"></style>
