<template>
  <div>
    <p v-text="$t('siteTitle')"></p>
    {{ $t('siteTitle') }}
    <p>
      <nuxt-link :to="themePath('/')">Go home</nuxt-link>
    </p>
    <p>
      <nuxt-link :to="switchLocalePath('fr')">Fr</nuxt-link>
      <nuxt-link :to="switchLocalePath('it')">It</nuxt-link>
    </p>
    <hr />
    <nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style></style>
