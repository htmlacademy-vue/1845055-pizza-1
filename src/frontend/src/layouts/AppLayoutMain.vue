<template>
  <section>
    <AppLayoutHeader
      :isLoggin="isLoggin"
      @userLoggin="$emit('userLoggin')"
      @userUnLoggin="$emit('userUnLoggin')"
    />
    <slot />
  </section>
</template>

<script>
import AppLayoutHeader from "./AppLayoutHeader.vue";
export default {
  name: "AppLayoutMain",
  components: {
    AppLayoutHeader,
  },
  props: {
    isLoggin: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style></style>
