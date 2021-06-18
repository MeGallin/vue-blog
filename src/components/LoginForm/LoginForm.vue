<template>
  <div>
    <fieldset class="fieldSet">
      <legend>login</legend>
      <form
        id="loginForm"
        @submit.prevent
        @submit="handleLogin(email, password)"
      >
        <div>
          <label for="email"
            >E-mail
            <input type="email" name="email" id="email" v-model="email" />
          </label>
        </div>
        <div>
          <label for="password"
            >Password
            <input
              type="password"
              name="password"
              id="password"
              v-model="password"
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </fieldset>
  </div>
</template>

<script>
import $Store from '../../store/index';
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleLogin(email, password) {
      this.email = email;
      this.password = password;

      const loginData = {
        email: this.email,
        password: this.password,
      };

      $Store.dispatch('userLogin', loginData);
    },
  },
};
</script>

<style scoped src="./LoginForm.css"></style>
