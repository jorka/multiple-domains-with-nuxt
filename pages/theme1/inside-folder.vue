<template>
  <div>
    <h1>Theme 1 inside folder parent</h1>
    <p>Parent page</p>
    <p>
      <nuxt-link :to="themePath('inside-folder') + '1'">
        Go to slug page 1
      </nuxt-link>
    </p>
    <p>
      <nuxt-link :to="themePath('inside-folder') + '2'">
        Go to slug page 2
      </nuxt-link>
    </p>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  name: 'InsideFolder',
  layout({ store }) {
    return `${store.state.theme}-default`
  },
}
</script>

<style></style>
