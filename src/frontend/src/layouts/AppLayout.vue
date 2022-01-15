<template>
  <div>
    <!-- <div>сюда зашли</div> -->
    <!-- <router-link to="/">test index</router-link> -->
    <!-- <router-view /> -->
    <component
      :is="layoutComp"
      :isLoggin="isLoggin"
      @userLoggin="$emit('userLoggin')"
      @userUnLoggin="$emit('userUnLoggin')"
    >
      <slot />
    </component>
  </div>
</template>

<script>
const defaultLayout = "AppLayoutDefault";
export default {
  name: "AppLayout",
  props: {
    isLoggin: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    layoutComp: function () {
      let compName = this.$route.meta.layout || defaultLayout;
      // compName = "AppLayoutHeader";
      return () => import(`@/layouts/${compName}.vue`);
    },
  },
  created() {
    let routeNameForUnauthorized = this.$route.meta.routeNameForUnauthorized;
    if (!this.isLoggin && routeNameForUnauthorized !== null) {
      this.$router.push({ name: routeNameForUnauthorized });
    }
  },
};
</script>

<style></style>
