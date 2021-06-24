<template>
  <div>
    <fieldset class="fieldSet">
      <legend>login form</legend>
      <form id="loginForm" @submit.prevent @submit="handleLogin(email, pwd)">
        <div>
          <label for="email"
            >E-mail
            <input type="email" name="email" id="email" v-model="email" />
          </label>
        </div>
        <div>
          <label for="pwd"
            >Password
            <input type="password" name="pwd" id="pwd" v-model="pwd" />
          </label>
        </div>
        <div>
          <button type="submit" @click="counter()">Submit</button>
        </div>
      </form>
    </fieldset>

    <div v-if="this.count > 0">
      <h3>Error</h3>
      <p>Either your email or password is in-correct.</p>
      <p>Please try again.</p>
      <p>Register: <router-link to="/register">Register</router-link></p>
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
      count: null,
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
    counter() {
      this.count += 1;
      console.log(this.count);
    },
  },
};
</script>

<style scoped src="./LoginForm.css"></style>
