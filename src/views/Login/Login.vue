<template>
  <section id="login">
    <LoginForm />
  </section>
</template>

<script>
import LoginForm from '@/components/LoginForm/LoginForm';
export default {
  data() {
    return {};
  },

  components: {
    LoginForm,
  },
};
</script>

<style scoped src="./Login.css"></style>
