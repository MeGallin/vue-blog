<template>
  <div>
    <div v-if="isRegisteredSuccess">
      <p class="successMessage">You have succesfully been registered.</p>
      <p class="successMessage">Please login.</p>
    </div>

    <fieldset class="fieldSet">
      <legend>login form</legend>
      <form id="loginForm" @submit.prevent @submit="handleLogin(email, pwd)">
        <div>
          <EmailInput :label="label[0]" v-model="email"></EmailInput>
        </div>
        <div>
          <PasswordInput :label="label[1]" v-model="pwd"></PasswordInput>
        </div>
        <div>
          <button type="submit" :disabled="!validPassword || !validEmail">
            Submit
          </button>
        </div>
      </form>
    </fieldset>

    <div>
      <p>
        Want to Register:
        <router-link to="/contact">Countact Us</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import $Store from '../../store/index';
import { mapGetters } from 'vuex';
import EmailInput from '@/components/Inputs/EmailInput';
import PasswordInput from '@/components/Inputs/PasswordInput';

export default {
  data() {
    return {
      label: ['email', 'password'],
      email: '',
      pwd: '',
    };
  },
  components: {
    EmailInput,
    PasswordInput,
  },
  computed: {
    ...mapGetters([
      'isAuthenticated',
      'userData',
      'validPassword',
      'validEmail',
      'isRegisteredSuccess',
    ]),
  },
  methods: {
    handleLogin(email, pwd) {
      this.email = email;
      this.pwd = pwd;

      const loginData = {
        email: this.email,
        pwd: this.pwd,
      };

      $Store.dispatch('userLogin', loginData);
      $Store.dispatch('mailIsValid', false);
      $Store.dispatch('pwsIsValid', false);
      this.email = '';
      this.pwd = '';
    },
  },
};
</script>

<style scoped src="./LoginForm.css"></style>
