<template>
  <div>
    <h1>Ingredients Page</h1>
  </div>
</template>

<script>
export default {
  name: 'IngredientsPage',
  layout({ store }) {
    return `${store.state.routerBase}-default`
  },
}
</script>

<style></style>
