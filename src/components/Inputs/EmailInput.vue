<!-- CustomInput.vue -->
<template>
  <label>
    {{ label }}
    <input
      type="email"
      :name="name"
      :value="value"
      @input="onInput"
      @change="onChange"
      :class="!this.emailReg.test(email) || !value ? 'invalid' : 'entered'"
    />
  </label>
</template>

<script>
export default {
  name: 'emailInput',
  data() {
    return {
      email: '',
      emailReg:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
    };
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
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
      if (this.emailReg.test(this.email)) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
      this.$emit('input', this.email);
    },
    onChange(event) {
      this.email = event.target.value.trim();
      // Can add validation here
      if (this.emailReg.test(this.email)) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
      this.$emit('change', this.email);
    },
  },
};
</script>
