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
          <NameInput :label="label[0]" v-model="name"></NameInput>
        </div>
        <div>
          <SurnameInput :label="label[1]" v-model="surname"></SurnameInput>
        </div>
        <div>
          <EmailInput :label="label[2]" v-model="email"></EmailInput>
        </div>
        <div>
          <PasswordInput :label="label[3]" v-model="pwd"></PasswordInput>
        </div>
        <div>
          <button
            type="submit"
            :disabled="
              !validPassword || !validEmail || !validName || !validSurname
            "
          >
            Submit
          </button>
        </div>
      </form>
    </fieldset>
  </div>
</template>

<script>
import $Store from '../../store/index';
import { mapGetters } from 'vuex';
import NameInput from '@/components/Inputs/NameInput';
import SurnameInput from '@/components/Inputs/SurnameInput';
import EmailInput from '@/components/Inputs/EmailInput';
import PasswordInput from '@/components/Inputs/PasswordInput';

export default {
  data() {
    return {
      title: 'registration form',
      label: ['name', 'surname', 'email', 'password'],
      name: '',
      surname: '',
      email: '',
      pwd: '',
      isDisabled: true,
    };
  },
  components: {
    NameInput,
    SurnameInput,
    EmailInput,
    PasswordInput,
  },
  computed: {
    ...mapGetters(['validPassword', 'validEmail', 'validName', 'validSurname']),
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
      $Store.dispatch('pwsIsValid', false);

      this.name = '';
      this.surname = '';
      this.email = '';
      this.pwd = '';
    },
  },
};
</script>

<style scoped src="./RegistrationForm.css"></style>
