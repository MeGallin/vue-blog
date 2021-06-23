<template>
  <section id="login">
    <h1>{{ title }}</h1>
    <LoginForm />
  </section>
</template>

<script>
import LoginForm from '@/components/LoginForm/LoginForm';
export default {
  data() {
    return {
      title: 'Login View',
    };
  },

  components: {
    LoginForm,
  },
};
</script>

<style scoped src="./Login.css"></style>
