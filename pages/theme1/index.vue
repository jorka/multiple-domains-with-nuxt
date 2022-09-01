<template>
  <div>
    <h1>Theme 1 index</h1>
    <p>
      <nuxt-link :to="themePath('another')"> Another </nuxt-link>
    </p>
    <p>
      I'm a image from /static/theme1/$locale<br />
      <img :src="themeAsset('logo.png', true)" alt="logo" width="200" />
    </p>
  </div>
</template>

<script>
export default {
  name: 'ThemeIndex',
  layout({ store }) {
    return `${store.state.theme}-default`
  },
}
</script>

<style></style>
