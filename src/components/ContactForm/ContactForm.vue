<template>
  <div>
    <fieldset class="fieldSet">
      <legend>{{ title }}</legend>
      <form
        id="contactForm"
        @submit.prevent
        @submit="handleContact(name, email, message)"
      >
        <div>
          <label for="name">
            <span class="spanWrapper">
              <span>*Name</span>
              <span class="small-form-text" v-if="this.name.length <= 3">
                (Minimum of {{ 4 - this.name.length }} characters)
              </span>
            </span>

            <input
              type="text"
              name="name"
              id="name"
              v-model="name"
              :class="this.name.length <= 3 ? 'invalid' : 'entered'"
            />
          </label>
        </div>
        <div>
          <label for="email"
            >*Email
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
          <label for="message">
            <span class="spanWrapper">
              <span> *Message </span>
              <span class="small-form-text" v-if="this.message.length <= 10">
                (Minimum of {{ 10 - this.message.length }} characters)
              </span>
            </span>
            <textarea
              name="message"
              id="message"
              v-model="message"
              :class="this.message.length <= 10 ? 'invalid' : 'entered'"
            />
          </label>
        </div>

        <div>
          <button type="submit" :disabled="isDisabled">Submit</button>
        </div>
      </form>
    </fieldset>
    <div>
      {{ thankYouMessage }}
    </div>
  </div>
</template>

<script>
import $Store from '../../store/index';
export default {
  data() {
    return {
      title: 'Contact Form',
      formData: {},
      name: '',
      email: '',
      message: '',
      thankYouMessage: '',
      isDisabled: true,
    };
  },
  methods: {
    handleContact(name, email, message) {
      const formData = {
        name: name,
        email: email,
        message: message,
      };
      console.log(JSON.stringify(formData));
      $Store.dispatch('postFormData', JSON.stringify(formData));

      this.thankYouMessage = `Thank you ${this.name} for making contact. We will be in contact shortly.`;
      setTimeout(() => {
        this.thankYouMessage = ``;
      }, 6000);

      (this.name = ''), (this.email = ''), (this.message = '');
      this.isDisabled = true;
    },
  },
  watch: {
    name(val) {
      this.name = val;
      if (this.message.length > 10 && this.name.length >= 3) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
    message(val) {
      this.message = val;
      if (this.message.length > 10 && this.name.length >= 3) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
  },
};
</script>

<style scoped src="./ContactForm.css"></style>
