<!-- CustomInput.vue -->
<template>
  <label>
    {{ label }}
    <input
      type="email"
      :name="email"
      @input="onInput"
      @change="onChange"
      :class="!this.emailRegex.test(email) ? 'invalid' : 'entered'"
    />
  </label>
</template>

<script>
import $Store from '../../store/index';
export default {
  data() {
    return {
      email: '',
      emailRegex:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
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
      this.email = event.target.value.trim();
      // Can add validation here
      if (this.emailRegex.test(this.email)) {
        $Store.dispatch('mailIsValid', true);
      } else {
        $Store.dispatch('mailIsValid', false);
      }
      this.$emit('input', this.email);
    },
    onChange(event) {
      this.email = event.target.value.trim();
      // Can add validation here
      this.$emit('change', this.email);
    },
  },
};
</script>
