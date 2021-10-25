<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <label
          v-for="elemDough in onlyDough"
          :key="elemDough.name"
          class="dough__input"
          :class="getClassDough(elemDough.name)"
        >
          <input
            type="radio"
            name="dought"
            :value="getValueDough(elemDough.name)"
            class="visually-hidden"
            :checked="elemDough.name == 'Тонкое'"
            @input="setDough(elemDough)"
          />
          <b>{{ elemDough.name }}</b>
          <span>{{ elemDough.description }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuilderDoughSelector",
  props: {
    onlyDough: Array,
  },
  methods: {
    setDough(val) {
      this.$emit("setDough", val);
    },
    getValueDough(name) {
      if (name == "Тонкое") {
        return "light";
      } else {
        return "large";
      }
    },
    getClassDough(name) {
      if (name == "Тонкое") {
        return "dough__input--light";
      } else {
        return "dough__input--large";
      }
    },
  },
};
</script>

<style></style>
