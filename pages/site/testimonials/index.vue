<template>
  <div>
    <h1>Testimonials Page</h1>
  </div>
</template>

<script>
export default {
  name: 'TestimonialsPage',
  layout({ store }) {
    return `${store.state.routerBase}-default`
  },
}
</script>

<style></style>
