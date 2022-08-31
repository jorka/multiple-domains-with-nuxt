<template>
  <div>
    <h2>I'm a child</h2>
  </div>
</template>

<script>
export default {
  name: 'InsideFolderChild',
  layout({ store }) {
    return `${store.state.theme}-default`
  },
}
</script>

<style></style>
