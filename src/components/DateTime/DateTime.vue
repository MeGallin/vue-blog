<template>
  <div class="date-small-text">
    {{ dateTime }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateTime: new Date().toLocaleString(),
    };
  },
  methods: {
    dateTimeStart() {
      this.dateTime = new Date().toLocaleString();
    },
  },
  created() {
    setInterval(this.dateTimeStart, 1000);
  },
};
</script>

<style>
.date-small-text {
  font-size: 0.6em;
}
</style>
