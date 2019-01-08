<template>
  <h1>Categories</h1>
</template>

<script>
export default {
  watchQuery: ["page"],

  async asyncData({ params, app, payload, route, store }) {
    await store.commit("SET_TITLE", "Categories");
  },
  components: {},
  data() {
    return {};
  },
  head() {
    return {
      title: "Categories | " + this.$store.state.siteInfo.sitename
    };
  },
  computed: {
    allCategories() {
      return this.$store.state.allCats;
    }
  }
};
</script>

<style>
</style>
