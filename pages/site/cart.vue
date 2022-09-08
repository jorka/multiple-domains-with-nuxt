<template>
  <div>
    <h1>Cart Page</h1>
  </div>
</template>

<script>
export default {
  name: 'CartPage',
  layout({ store }) {
    return `${store.state.routerBase}-default`
  },
}
</script>

<style></style>
