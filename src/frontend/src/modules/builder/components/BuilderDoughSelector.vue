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
            :checked="elemDough.name == selectedDough"
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
import { mapState } from "vuex";
export default {
  name: "BuilderDoughSelector",
  computed: {
    ...mapState("Builder", {
      onlyDough: (state) => state.pizza["dough"],
      selectedDough: (state) => state.statePizza["dough"]["name"],
    }),
  },
  methods: {
    setDough(val) {
      this.$store.commit("Builder/setDough", {
        name: val.name,
        price: val.price,
      });
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
