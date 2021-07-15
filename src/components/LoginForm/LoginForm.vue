<template>
  <div>
    <fieldset class="fieldSet">
      <legend>login form</legend>
      <form id="loginForm" @submit.prevent @submit="handleLogin(email, pwd)">
        <div>
          <label for="email"
            >E-mail
            <input
              type="email"
              name="email"
              id="email"
              v-model="email"
              :class="!this.email.includes('@') ? 'invalid' : 'entered'"
            />
          </label>
        </div>
        <div>
          <label for="pwd"
            >Password
            <input
              type="password"
              name="pwd"
              id="pwd"
              v-model="pwd"
              :class="this.pwd.length <= 3 ? 'invalid' : 'entered'"
            />
          </label>
        </div>
        <div>
          <button type="submit" :disabled="isDisabled">Submit</button>
        </div>
      </form>
    </fieldset>

    <div>
      <p>
        Register:
        <router-link to="/contact">Countact Us</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import $Store from '../../store/index';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      email: '',
      pwd: '',
      isDisabled: true,
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'userData']),
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
      this.email = '';
      this.pwd = '';
    },
  },
  watch: {
    email(val) {
      this.email = val;
      if (this.email.includes('@') && this.pwd.length >= 4) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
    pwd(val) {
      this.pwd = val;
      if (this.email.includes('@') && this.pwd.length >= 4) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
  },
};
</script>

<style scoped src="./LoginForm.css"></style>
