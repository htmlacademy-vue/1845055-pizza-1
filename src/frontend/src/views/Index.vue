<template>
  <div>
    <!--  -->
    <Builder @userLoggin="$emit('userLoggin')" />
  </div>
</template>

<script>
import misc from "@/static/misc.json";
import user from "@/static/user.json";
//
import Builder from "@/modules/builder/Builder.vue";
export default {
  name: "Index",
  components: {
    Builder,
  },
  data() {
    return {
      misc: misc,
      user: user,
    };
  },
};
</script>

<style></style>
