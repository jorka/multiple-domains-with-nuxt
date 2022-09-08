<template>
  <div>
    <h1>Index Page</h1>
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
