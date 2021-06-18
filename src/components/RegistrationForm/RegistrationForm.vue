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
            <input type="text" name="name" id="name" v-model="name" />
          </label>
        </div>
        <div>
          <label for="surname"
            >Surname
            <input type="text" name="surname" id="surname" v-model="surname" />
          </label>
        </div>
        <div>
          <label for="email"
            >E-Mail
            <input type="email" name="email" id="regEmail" v-model="email" />
          </label>
        </div>
        <div>
          <label for="pwd"
            >Password
            <input type="pwd" name="pwd" id="regPwd" v-model="pwd" />
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
      title: 'registration form',
      name: '',
      surname: '',
      email: '',
      pwd: '',
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
      console.log('Component', regData);
      $Store.dispatch('userRegistration', regData);
    },
  },
};
</script>

<style scoped src="./RegistrationForm.css"></style>
