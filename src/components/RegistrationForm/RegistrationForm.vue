<template>
  <div>
    <fieldset class="fieldSet">
      <legend>{{ title }}</legend>
      <form
        id="registrationForm"
        @submit.prevent
        @submit="handleRegistration(name, surname, email, pwd)"
      >
        <div>
          <label for="name"
            >Name
            <input
              type="text"
              name="name"
              id="name"
              v-model="name"
              :class="this.name.length <= 2 ? 'invalid' : 'entered'"
            />
          </label>
        </div>
        <div>
          <label for="surname"
            >Surname
            <input
              type="text"
              name="surname"
              id="surname"
              v-model="surname"
              :class="this.surname.length <= 2 ? 'invalid' : 'entered'"
            />
          </label>
        </div>
        <div>
          <label for="email"
            >E-Mail
            <input
              type="email"
              name="email"
              id="regEmail"
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
              :class="this.pwd.length <= 6 ? 'invalid' : 'entered'"
            />
          </label>
        </div>
        <div>
          <button type="submit" :disabled="isDisabled">Submit</button>
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
      title: 'registration form',
      name: '',
      surname: '',
      email: '',
      pwd: '',
      isDisabled: true,
    };
  },
  methods: {
    handleRegistration(name, surname, email, pwd) {
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.pwd = pwd;

      const regData = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        pwd: this.pwd,
      };

      $Store.dispatch('userRegistration', regData);

      this.name = '';
      this.surname = '';
      this.email = '';
      this.pwd = '';
    },
  },
  watch: {
    name(val) {
      this.name = val;
      if (
        this.name.length > 2 &&
        this.surname.length > 2 &&
        this.email.includes('@') &&
        this.pwd.length >= 6
      ) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
    surname(val) {
      this.surname = val;
      if (
        this.name.length > 2 &&
        this.surname.length > 2 &&
        this.email.includes('@') &&
        this.pwd.length >= 6
      ) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
    email(val) {
      this.email = val;
      if (
        this.name.length > 2 &&
        this.surname.length > 2 &&
        this.email.includes('@') &&
        this.pwd.length >= 6
      ) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
    pwd(val) {
      this.pwd = val;
      if (
        this.name.length > 2 &&
        this.surname.length > 2 &&
        this.email.includes('@') &&
        this.pwd.length >= 6
      ) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
  },
};
</script>

<style scoped src="./RegistrationForm.css"></style>
