<template>
  <div>
    <h1>Packs Page</h1>
  </div>
</template>

<script>
export default {
  name: 'PacksPage',
  layout({ store }) {
    return `${store.state.routerBase}-default`
  },
}
</script>

<style></style>
