<template>
  <div>
    <h1>FAQ Page</h1>
  </div>
</template>

<script>
export default {
  name: 'FaqPage',
  layout({ store }) {
    return `${store.state.routerBase}-default`
  },
}
</script>

<style></style>
