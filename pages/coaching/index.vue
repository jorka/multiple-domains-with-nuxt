<template>
  <div>
    <h1>Theme 2 completely different page</h1>
    <p>
      <nuxt-link :to="sitePath('completely-different')">
        Go to the completely different page
      </nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ThemeIndex',
}
</script>

<style></style>
