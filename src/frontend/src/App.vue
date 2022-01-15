<template>
  <div id="app">
    <AppLayout
      :isLoggin="Store.isLoggin"
      @userUnLoggin="setLoggin(false)"
      @userLoggin="setLoggin(true)"
    >
      <router-view @userLoggin="setLoggin(true)" />
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
  data() {
    return {
      Store: {
        isLoggin: false,
      },
    };
  },

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
