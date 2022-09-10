<template>
  <div>
    <h1 v-text="$t('site.page.home.title')" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout({ store }) {
    return `${store.state.routerBase}-default`
  },
}
</script>

<style></style>
