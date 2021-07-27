<!-- CustomInput.vue -->
<template>
  <label>
    {{ label }}
    <input
      type="password"
      :name="pwd"
      @input="onInput"
      :class="!this.pwdRegex.test(pwd) ? 'invalid' : 'entered'"
    />
  </label>
</template>

<script>
import $Store from '../../store/index';
export default {
  data() {
    return {
      pwd: '',
      pwdRegex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/,
    };
  },
  props: {
    label: {
      type: String,
      required: true,
    },
  },

  computed: {
    name() {
      return this.label.toLowerCase();
    },
  },
  methods: {
    onInput(event) {
      this.pwd = event.target.value.trim();
      // Can add validation here

      if (this.pwdRegex.test(this.pwd)) {
        $Store.dispatch('pwsIsValid', true);
      } else {
        $Store.dispatch('pwsIsValid', false);
      }

      this.$emit('input', this.pwd);
    },
  },
};
</script>
