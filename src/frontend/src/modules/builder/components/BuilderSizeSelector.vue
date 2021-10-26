<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <label
          v-for="elemSize in onlySize"
          :key="elemSize.name"
          class="diameter__input"
          :class="getClassSize(elemSize.name)"
        >
          <input
            type="radio"
            name="diameter"
            :value="getValueSize(elemSize.name)"
            class="visually-hidden"
            :checked="elemSize.name == '32 см'"
            @input="setMulti(elemSize.name)"
          />
          <span>{{ elemSize.name }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuilderSizeSelector",
  props: {
    onlySize: {
      type: Array,
      required: true,
    },
  },
  methods: {
    setMulti(name) {
      if (name == "23 см") {
        this.$emit("setMulti", 1);
      } else if (name == "32 см") {
        this.$emit("setMulti", 2);
      } else if (name == "45 см") {
        this.$emit("setMulti", 3);
      }
    },
    getValueSize(name) {
      if (name == "23 см") {
        return "small";
      } else if (name == "32 см") {
        return "normal";
      } else if (name == "45 см") {
        return "big";
      }
    },
    getClassSize(name) {
      if (name == "23 см") {
        return "diameter__input--small";
      } else if (name == "32 см") {
        return "diameter__input--normal";
      } else if (name == "45 см") {
        return "diameter__input--big";
      }
    },
  },
};
</script>

<style></style>
