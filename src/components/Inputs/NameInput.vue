<!-- CustomInput.vue -->
<template>
  <label>
    {{ label }}
    <input
      type="text"
      :name="name"
      @input="onInput"
      :class="!this.nameRegex.test(name) ? 'invalid' : 'entered'"
    />
  </label>
</template>

<script>
import $Store from '../../store/index';
export default {
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

  computed: {},
  methods: {
    onInput(event) {
      this.name = event.target.value.trim();
      // Can add validation here
      if (this.nameRegex.test(this.name)) {
        $Store.dispatch('fNameIsValid', true);
      } else {
        $Store.dispatch('fNameIsValid', false);
      }
      this.$emit('input', this.name);
    },
  },
};
</script>
