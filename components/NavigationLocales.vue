<template>
  <ul>
    <li v-for="locale in availableLocales" :key="locale">
      <nuxt-link :to="switchLocalePath(locale)" v-text="locale" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavigationLocales',
  computed: {
    availableLocales() {
      return this.$store.state.availableLocales
    },
  },
}
</script>

<style></style>
