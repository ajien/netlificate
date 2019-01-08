<template>
  <h1>Category</h1>
</template>

<script>
// import BaelGrid from "~/components/BaelGrid";
export default {
  async asyncData({ params, app, payload, route, store }) {
    let post = await import("~/content/categories/posts/" +
      params.slug +
      ".json");
    console.log(post);
    await store.commit("SET_TITLE", post.title);
    await store.commit("SET_CRUMB", "Categories");
    return post;
  },
  head() {
    return {
      title: this.title + " | " + this.$store.state.siteInfo.sitename
    };
  },
  components: {},
  data() {
    return {};
  },

  computed: {
    allBlogPosts() {
      return this.$store.state.blogPosts;
    },

    findCatPosts() {
      var posts = this.allBlogPosts;
      var title = this.title;
      return posts.filter(function(obj) {
        return obj.category == title;
      });
    }
  },
  methods: {
    theSlug() {
      return this.$route.params.slug;
    }
  }
};
</script>

<style>
</style>
