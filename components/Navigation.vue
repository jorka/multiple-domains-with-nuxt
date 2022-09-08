<template>
  <div>
    <nuxt-link
      v-for="(item, i) in items"
      :key="i"
      :to="sitePath(item.path)"
      v-text="item.title"
    />
  </div>
</template>

<script>
export default {
  name: 'PageNavigation',
  data() {
    return {
      items: [
        {
          title: 'Home',
          path: '/',
        },
        {
          title: 'Ingredients',
          path: 'ingredients',
        },
        {
          title: 'Testimonials',
          path: 'testimonials',
        },
        {
          title: 'Faq',
          path: 'faq',
        },
      ],
    }
  },
}
</script>

<style></style>
