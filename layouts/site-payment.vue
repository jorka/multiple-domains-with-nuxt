<template>
  <div>
    <p v-text="$t('siteTitle')"></p>
    <p>
      <nuxt-link :to="sitePath('/')">Go home</nuxt-link>
    </p>
    <p>
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        v-text="locale.name"
      />
    </p>
    <hr />
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'SitePaymentLayout',
  computed: {
    availableLocales() {
      return this.$i18n.locales
    },
  },
}
</script>

<style></style>
