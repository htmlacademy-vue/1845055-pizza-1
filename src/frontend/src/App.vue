<template>
  <div id="app">
    <AppLayout>
      <router-view />
    </AppLayout>
  </div>
</template>

<script>
// import user from "@/static/user.json";
import AppLayout from "@/layouts/AppLayout.vue";
export default {
  name: "App",
  components: {
    AppLayout,
  },

  created() {
    //this.$store.dispatch("init");
  },
  computed: {},
  methods: {
    setLoggin(log) {
      // console.log("заходим в логин");
      this.Store.isLoggin = log;
      if (!log) {
        // console.log(this.$route.meta);
        let routeNameForUnauthorized =
          this.$route.meta.routeNameForUnauthorized;
        if (!this.Store.isLoggin && routeNameForUnauthorized !== null) {
          this.$router.push({ name: routeNameForUnauthorized });
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
