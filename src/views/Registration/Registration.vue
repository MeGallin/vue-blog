<template>
  <section id="registration">
    <h1>{{ name }}</h1>
    <RegistrationForm />
  </section>
</template>

<script>
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm';
export default {
  data() {
    return {
      name: 'Registration Form',
    };
  },
  components: {
    RegistrationForm,
  },
};
</script>

<style scoped src="./Registration.css"></style>
