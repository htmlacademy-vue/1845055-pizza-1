<template>
  <div>
    <component :is="layoutComp">
      <slot />
    </component>
  </div>
</template>

<script>
const defaultLayout = "AppLayoutDefault";
export default {
  name: "AppLayout",

  computed: {
    layoutComp: function () {
      let compName = this.$route.meta.layout || defaultLayout;
      return () => import(`@/layouts/${compName}.vue`);
    },
    isLoggin: function () {
      return this.$store.getters["Auth/isLoggin"];
    },
  },
  created() {
    let routeNameForUnauthorized = this.$route.meta.routeNameForUnauthorized;
    // console.log(this.isLoggin);
    if (!this.isLoggin && routeNameForUnauthorized !== null) {
      this.$router.push({ name: routeNameForUnauthorized });
    }
  },
};
</script>

<style></style>
