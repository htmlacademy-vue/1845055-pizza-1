<template>
  <div>
    <AppLayout />
    <Builder />
  </div>
</template>

<script>
import misc from "@/static/misc.json";
import user from "@/static/user.json";
import AppLayout from "@/layouts/AppLayout.vue";
import Builder from "@/modules/builder/Builder.vue";
export default {
  components: {
    AppLayout,
    Builder,
  },
  name: "Index",
  data() {
    return {
      misc: misc,
      user: user,
    };
  },
};
</script>

<style></style>
