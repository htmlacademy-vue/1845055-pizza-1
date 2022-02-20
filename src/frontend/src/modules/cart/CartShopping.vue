<template>
  <section>
    <main class="content cart">
      <div class="container">
        <div class="cart__title">
          <h1 class="title title--big">Корзина</h1>
        </div>

        <div v-if="noPizza" class="sheet cart__empty">
          <p>В корзине нет ни одного товара</p>
        </div>

        <ul class="cart-list sheet">
          <li
            class="cart-list__item"
            v-for="(elemPizza, name) in orderPizza"
            :key="name"
          >
            <div class="product cart-list__product">
              <img
                src="@/assets/img/product.svg"
                class="product__img"
                width="56"
                height="56"
                :alt="name"
              />
              <div class="product__text">
                <h2>{{ name }}</h2>
                <ul>
                  <li>{{ getSize(elemPizza) }}</li>
                  <li>Соус: {{ getSauce(elemPizza) }}</li>
                  <li>Начинка: {{ getIngredients(elemPizza) }}</li>
                </ul>
              </div>
            </div>

            <ItemCounter
              :elemIngredients="elemPizza"
              :valueIngredient="getValuePizza(elemPizza)"
              :counterLimitMax="Infinity"
              :counterLimitMin="0"
              :orange="true"
              @setBuilderQuantity="setPizzaQuantity"
              :classItem="getClassItemPizza"
            />
            <!-- <div class="counter cart-list__counter">
              <button
                type="button"
                class="counter__button counter__button--minus"
              >
                <span class="visually-hidden">Меньше</span>
              </button>
              <input
                type="text"
                name="counter"
                class="counter__input"
                value="1"
              />
              <button
                type="button"
                class="
                  counter__button counter__button--plus counter__button--orange
                "
              >
                <span class="visually-hidden">Больше</span>
              </button>
            </div> -->

            <div class="cart-list__price">
              <b>{{ elemPizza.price }} ₽</b>
            </div>

            <div class="cart-list__button">
              <button
                type="button"
                class="cart-list__edit"
                @click.prevent="updatePizza(elemPizza)"
              >
                Изменить
              </button>
            </div>
          </li>
          <!-- <li class="cart-list__item">
            <div class="product cart-list__product">
              <img
                src="@/assets/img/product.svg"
                class="product__img"
                width="56"
                height="56"
                alt="Любимая пицца"
              />
              <div class="product__text">
                <h2>Любимая пицца</h2>
                <ul>
                  <li>30 см, на тонком тесте</li>
                  <li>Соус: томатный</li>
                  <li>
                    Начинка: грибы, лук, ветчина, пармезан, ананас, бекон, блю
                    чиз
                  </li>
                </ul>
              </div>
            </div>

            <div class="counter cart-list__counter">
              <button
                type="button"
                class="counter__button counter__button--minus"
              >
                <span class="visually-hidden">Меньше</span>
              </button>
              <input
                type="text"
                name="counter"
                class="counter__input"
                value="2"
              />
              <button
                type="button"
                class="
                  counter__button counter__button--plus counter__button--orange
                "
              >
                <span class="visually-hidden">Больше</span>
              </button>
            </div>

            <div class="cart-list__price">
              <b>782 ₽</b>
            </div>

            <div class="cart-list__button">
              <button type="button" class="cart-list__edit">Изменить</button>
            </div>
          </li> -->
        </ul>

        <div class="cart__additional">
          <ul class="additional-list">
            <li
              v-for="elemMisc in cartMiscList"
              :key="elemMisc.name"
              class="additional-list__item sheet"
            >
              <p class="additional-list__description">
                <img
                  :src="elemMisc.image"
                  width="39"
                  height="60"
                  :alt="elemMisc.name"
                />
                <span>{{ elemMisc.name }}</span>
              </p>

              <div class="additional-list__wrapper">
                <ItemCounter
                  :elemIngredients="elemMisc"
                  :valueIngredient="getValueMisc(elemMisc)"
                  :counterLimitMax="Infinity"
                  :counterLimitMin="0"
                  :orange="true"
                  @setBuilderQuantity="setMiscQuantity"
                  :classItem="getClassItem"
                />
                <!-- </div> -->

                <div class="additional-list__price">
                  <b>{{ elemMisc.price }} ₽</b>
                </div>
              </div>
            </li>
            <!-- <li class="additional-list__item sheet">
              <p class="additional-list__description">
                <img
                  src="@/assets/img/sauce.svg"
                  width="39"
                  height="60"
                  alt="Острый соус"
                />
                <span>Острый соус</span>
              </p>

              <div class="additional-list__wrapper">
                <div class="counter additional-list__counter">
                  <button
                    type="button"
                    class="counter__button counter__button--minus"
                  >
                    <span class="visually-hidden">Меньше</span>
                  </button>
                  <input
                    type="text"
                    name="counter"
                    class="counter__input"
                    value="2"
                  />
                  <button
                    type="button"
                    class="
                      counter__button
                      counter__button--plus
                      counter__button--orange
                    "
                  >
                    <span class="visually-hidden">Больше</span>
                  </button>
                </div>

                <div class="additional-list__price">
                  <b>30 ₽</b>
                </div>
              </div>
            </li> -->
            <!-- <li class="additional-list__item sheet">
              <p class="additional-list__description">
                <img
                  src="@/assets/img/potato.svg"
                  width="39"
                  height="60"
                  alt="Картошка из печи"
                />
                <span>Картошка из печи</span>
              </p>

              <div class="additional-list__wrapper">
                <div class="counter additional-list__counter">
                  <button
                    type="button"
                    class="counter__button counter__button--minus"
                  >
                    <span class="visually-hidden">Меньше</span>
                  </button>
                  <input
                    type="text"
                    name="counter"
                    class="counter__input"
                    value="2"
                  />
                  <button
                    type="button"
                    class="
                      counter__button
                      counter__button--plus
                      counter__button--orange
                    "
                  >
                    <span class="visually-hidden">Больше</span>
                  </button>
                </div>

                <div class="additional-list__price">
                  <b>56 ₽</b>
                </div>
              </div>
            </li> -->
          </ul>
        </div>

        <div class="cart__form">
          <div class="cart-form">
            <label class="cart-form__select">
              <span class="cart-form__label">Получение заказа:</span>

              <select name="test" class="select" v-model="selectKey">
                <option
                  v-for="(elem, key) in testSelect"
                  :key="key"
                  :value="key"
                >
                  {{ elem }}
                </option>
                <!-- <option value="2">Новый адрес</option>
                <option value="3">Дом</option> -->
              </select>
            </label>

            <label class="input input--big-label">
              <span>Контактный телефон:</span>
              <input
                :value="user.phone"
                type="text"
                name="tel"
                placeholder="+7 999-999-99-99"
                @input="setPhone"
              />
            </label>

            <div class="cart-form__address" v-if="selectKey != '1'">
              <span class="cart-form__label">Новый адрес:</span>

              <div class="cart-form__input">
                <label class="input">
                  <span>Улица*</span>
                  <input type="text" name="street" @input="setStreet" />
                </label>
              </div>

              <div class="cart-form__input cart-form__input--small">
                <label class="input">
                  <span>Дом*</span>
                  <input type="text" name="house" @input="setHouse" />
                </label>
              </div>

              <div class="cart-form__input cart-form__input--small">
                <label class="input">
                  <span>Квартира</span>
                  <input type="text" name="apartment" @input="setApartment" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <section class="footer">
      <div class="footer__more">
        <a
          href="#"
          class="button button--border button--arrow"
          @click.prevent="newPizza()"
          >Хочу еще одну</a
        >
      </div>
      <p class="footer__text">
        Перейти к конструктору<br />чтоб собрать ещё одну пиццу
      </p>
      <div class="footer__price">
        <b>Итого: {{ getOrderPrice }} ₽</b>
      </div>

      <div class="footer__submit">
        <router-link to="/popup" class="button">
          <button type="submit" class="button">Оформить заказ</button>
        </router-link>
        <!-- <router-link to="/popup" class="button">Оформить заказ</router-link> -->
      </div>
    </section>
  </section>
</template>

<script>
import ItemCounter from "@/common/components/ItemCounter.vue";
import { mapState } from "vuex";
export default {
  name: "CartShopping",
  components: { ItemCounter },
  data() {
    return {
      selectKey: "1",
    };
  },
  computed: {
    ...mapState("Cart", {
      cartMiscList: (state) => state.miscList,
      orderMisc: (state) => state.orderList.miscList,
      orderPizza: (state) => state.orderList.pizzaList,
      testSelect: (state) => state.testSelect,
    }),
    ...mapState("Auth", {
      user: (state) => state.user,
    }),
    getOrderPrice: function () {
      return this.$store.getters["Cart/getOrderPrice"];
    },
    getClassItem: function () {
      return "additional-list__counter";
    },
    getClassItemPizza: function () {
      return "cart-list__counter";
    },
    noPizza: function () {
      return Object.keys(this.orderPizza).length == 0;
    },
  },
  methods: {
    setApartment: function (event) {
      this.$store.commit("Auth/setAddress", {
        name: "apartment",
        value: event.target.value,
      });
    },
    setHouse: function (event) {
      this.$store.commit("Auth/setAddress", {
        name: "house",
        value: event.target.value,
      });
    },
    setStreet: function (event) {
      this.$store.commit("Auth/setAddress", {
        name: "street",
        value: event.target.value,
      });
    },
    setPhone: function (event) {
      this.$store.commit("Auth/setAddress", {
        name: "phone",
        value: event.target.value,
      });
    },
    setAddress(name, event) {
      // console.log(event);
      this.$store.commit("Auth/setAddress", {
        name: name,
        value: event.target.value,
      });
    },
    getKeySelect(elem) {
      console.log(elem);
    },
    updatePizza(elem) {
      this.$store.commit("Builder/updatePizza", elem.statePizza);
      this.$router.push("/");
    },
    newPizza() {
      this.$store.commit("Builder/newPizza");
      this.$router.push("/");
    },
    getSize(elem) {
      let strSize = "";
      strSize += elem.statePizza.size.diametr + ", ";
      if (elem.statePizza.dough.name == "Тонкое") {
        strSize += "на тонком тесте";
      } else {
        strSize += "на толстом тесте";
      }
      return strSize;
    },
    getIngredients(elem) {
      let strIngredients = "";
      let arrayIngredients = Object.keys(elem.statePizza.ingredients);
      let lengthArrayIngredients = arrayIngredients.length;
      for (let i = 0; i < lengthArrayIngredients; i++) {
        strIngredients += arrayIngredients[i].toLowerCase();
        if (i != lengthArrayIngredients - 1) {
          strIngredients += ", ";
        }
      }
      // arrayIngredients.forEach((element) => {
      //   console.log(element);
      //   strIngredients += element.toLowerCase();
      // });
      return strIngredients;
    },
    getSauce(elem) {
      return elem.statePizza.sauces.name.toLowerCase();
    },
    setMiscQuantity(obj) {
      this.$store.commit("Cart/setMiscQuantity", {
        counter: obj.counter,
        misc: obj.ingredient,
      });
    },
    setPizzaQuantity(obj) {
      //console.log(obj);
      this.$store.commit("Cart/setPizzaQuantity", {
        counter: obj.counter,
        pizza: obj.ingredient,
      });
    },
    getValuePizza(elemPizza) {
      // console.log(elemPizza);
      return this.orderPizza[elemPizza.statePizza.name]?.valQuantity || 0;
    },
    getValueMisc(elemMisc) {
      return this.orderMisc[elemMisc.name]?.valQuantity || 0;
    },
  },
};
</script>

<style></style>
