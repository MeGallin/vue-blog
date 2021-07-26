<!-- CustomInput.vue -->
<template>
  <label>
    {{ label }}
    <input
      type="text"
      :name="name"
      @input="onInput"
      @change="onChange"
      :class="!this.mailRegex.test(name) ? 'invalid' : 'entered'"
    />
  </label>
</template>

<script>
export default {
  name: 'Surname',
  data() {
    return {
      name: '',
      nameRegex: /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{2,}$/,
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
