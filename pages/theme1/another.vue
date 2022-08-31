<template>
  <div>
    <h1>Theme 1 another</h1>
    <p>
      <nuxt-link :to="themePath('inside-folder')">
        Go to inside folder page
      </nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'AnotherPage',
  layout({ store }) {
    return `${store.state.theme}-default`
  },
}
</script>

<style></style>
