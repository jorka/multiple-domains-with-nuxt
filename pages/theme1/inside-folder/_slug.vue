<template>
  <div>
    <h2>Slug child Page {{ slug }}</h2>
  </div>
</template>

<script>
export default {
  name: 'SlugChild',
  layout({ store }) {
    return `${store.state.theme}-default`
  },
  computed: {
    slug() {
      return this.$route.params.slug
    },
  },
}
</script>

<style></style>
