<!-- CustomInput.vue -->
<template>
  <label>
    {{ label }}
    <input
      type="text"
      :surname="surname"
      @input="onInput"
      @change="onChange"
      :class="!this.surnameRegex.test(surname) ? 'invalid' : 'entered'"
    />
  </label>
</template>

<script>
import $Store from '../../store/index';
export default {
  data() {
    return {
      surname: '',
      surnameRegex: /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{2,}$/,
    };
  },
  props: {
    label: {
      type: String,
      required: true,
    },
  },

  computed: {},
  methods: {
    onInput(event) {
      this.surname = event.target.value.trim();
      // Can add validation here
      if (this.surnameRegex.test(this.surname)) {
        $Store.dispatch('sNameIsValid', true);
      } else {
        $Store.dispatch('sNameIsValid', false);
      }
      this.$emit('input', this.surname);
    },
    onChange(event) {
      this.surname = event.target.value.trim();
      // Can add validation here
      this.$emit('change', this.surname);
    },
  },
};
</script>
