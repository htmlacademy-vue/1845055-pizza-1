<template>
  <section>
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>

          <BuilderDoughSelector />
          <BuilderSizeSelector />

          <BuilderIngredientsSelector />

          <BuilderPizzaView />
        </div>
      </form>
      <!-- {{ statePizza }} -->
    </main>
    <router-view />
  </section>
</template>

<script>
import pizza from "@/static/pizza.json";
import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector.vue";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector.vue";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector.vue";
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView.vue";

export default {
  components: {
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderPizzaView,
  },
  name: "Builder",
  data() {
    return {
      pizza: pizza,
      statePizza: {
        name: "",
        totalPrice: 700,
        dough: {
          name: "Тонкое",
          price: 300,
        },
        size: {
          multi: 2,
          diametr: "32 см",
        },
        sauces: {
          name: "Томатный",
          price: 50,
        },
        ingredients: {},
      },
    };
  },
  computed: {
    priceCounter: function () {
      // let multi = this.statePizza.size.multi;
      // let priceDough = this.statePizza.dough.price;
      // let priceSauce = this.statePizza.sauces.price;
      // let priceIngredient = 0;
      // for (let i in this.statePizza.ingredients) {
      //   priceIngredient =
      //     priceIngredient +
      //     this.statePizza.ingredients[i].price *
      //       this.statePizza.ingredients[i].valQuantity;
      // }
      // this.statePizza.totalPrice =
      //   multi * (priceDough + priceSauce + priceIngredient);
      // return this.statePizza.totalPrice;
    },
  },
  methods: {
    setDrop(val) {
      //this.setBuilderQuantity("plus", val);
    },
    // setName(val) {
    //   this.statePizza.name = val;
    // },

    // setBuilderQuantity(counter, ingredient) {
    //   let valQuantity = 0;
    //   if (typeof this.statePizza.ingredients[ingredient.name] != "undefined") {
    //     valQuantity = this.statePizza.ingredients[ingredient.name].valQuantity;
    //   }
    //   if (counter == "plus") {
    //     valQuantity += 1;
    //   } else {
    //     valQuantity -= 1;
    //   }
    //   valQuantity = this.checkQuantity(valQuantity);
    //   this.$set(this.statePizza.ingredients, ingredient.name, {
    //     price: ingredient.price,
    //     valQuantity: valQuantity,
    //   });
    //   // this.priceCounter();
    // },
    // checkQuantity(val) {
    //   if (val >= 3) {
    //     val = 3;
    //   } else if (val < 0) {
    //     val = 0;
    //   }
    //   return val;
    // },
  },
};
</script>

<style></style>
