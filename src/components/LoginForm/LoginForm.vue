<template>
  <div>
    <fieldset class="fieldSet">
      <legend>login form</legend>
      <form id="loginForm" @submit.prevent @submit="handleLogin(email, pwd)">
        <div>
          <EmailInput
            :label="label"
            :value="value"
            v-model="email"
            onClear="onClear()"
          ></EmailInput>
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
import EmailInput from '@/components/Inputs/EmailInput';

export default {
  data() {
    return {
      label: 'Email',
      value: '',
      email: '',
      pwd: '',
      isDisabled: true,
    };
  },
  components: {
    EmailInput,
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
    handleRegValidation() {
      if (this.pwd.length >= 4) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
  },
  watch: {
    pwd() {
      this.handleRegValidation();
    },
  },
};
</script>

<style scoped src="./LoginForm.css"></style>
