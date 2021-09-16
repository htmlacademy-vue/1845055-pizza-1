<template>
  <div>
    <header class="header">
      <div class="header__logo">
        <a href="index.html" class="logo">
          <img
            src="@/assets/img/logo.svg"
            alt="V!U!E! Pizza logo"
            width="90"
            height="40"
          />
        </a>
      </div>
      <div class="header__cart">
        <a href="cart.html">0 ₽</a>
      </div>
      <div class="header__user">
        <a href="#" class="header__login"><span>Войти</span></a>
      </div>
    </header>

    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>

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
                  />
                  <b>{{ elemDough.name }}</b>
                  <span>{{ elemDough.description }}</span>
                </label>
              </div>
            </div>
          </div>

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
                  />
                  <span>{{ elemSize.name }}</span>
                </label>
              </div>
            </div>
          </div>

          <div class="content__ingridients">
            <div class="sheet">
              <h2 class="title title--small sheet__title">
                Выберите ингридиенты
              </h2>

              <div class="sheet__content ingridients">
                <div class="ingridients__sauce">
                  <p>Основной соус:</p>

                  <label
                    v-for="elemSauces in onlySauces"
                    :key="elemSauces.name"
                    class="radio ingridients__input"
                  >
                    <input
                      type="radio"
                      name="sauce"
                      :value="getValueSauces(elemSauces.name)"
                      :checked="elemSauces.name == 'Томатный'"
                    />
                    <span>{{ elemSauces.name }}</span>
                  </label>
                </div>

                <div class="ingridients__filling">
                  <p>Начинка:</p>

                  <ul class="ingridients__list">
                    <li
                      v-for="elemIngredients in onlyIngredients"
                      :key="elemIngredients.name"
                      class="ingridients__item"
                    >
                      <span
                        class="filling"
                        :class="getClassIngredients(elemIngredients.name)"
                        >{{ elemIngredients.name }}</span
                      >

                      <div class="counter counter--orange ingridients__counter">
                        <button
                          type="button"
                          class="
                            counter__button
                            counter__button--disabled
                            counter__button--minus
                          "
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>

                    <!-- <li class="ingridients__item">
                      <span class="filling filling--salami">Салями</span>

                      <div class="counter counter--orange ingridients__counter">
                        <button
                          type="button"
                          class="
                            counter__button
                            counter__button--disabled
                            counter__button--minus
                          "
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                    <li class="ingridients__item">
                      <span class="filling filling--ham">Ветчина</span>

                      <div class="counter counter--orange ingridients__counter">
                        <button
                          type="button"
                          class="
                            counter__button
                            counter__button--disabled
                            counter__button--minus
                          "
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                    <li class="ingridients__item">
                      <span class="filling filling--ananas">Ананас</span>

                      <div class="counter counter--orange ingridients__counter">
                        <button
                          type="button"
                          class="
                            counter__button
                            counter__button--disabled
                            counter__button--minus
                          "
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                    <li class="ingridients__item">
                      <span class="filling filling--bacon">Бекон</span>

                      <div class="counter counter--orange ingridients__counter">
                        <button
                          type="button"
                          class="
                            counter__button
                            counter__button--disabled
                            counter__button--minus
                          "
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                    <li class="ingridients__item">
                      <span class="filling filling--onion">Лук</span>

                      <div class="counter counter--orange ingridients__counter">
                        <button
                          type="button"
                          class="
                            counter__button
                            counter__button--disabled
                            counter__button--minus
                          "
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                    <li class="ingridients__item">
                      <span class="filling filling--chile">Чили</span>

                      <div class="counter counter--orange ingridients__counter">
                        <button
                          type="button"
                          class="
                            counter__button
                            counter__button--disabled
                            counter__button--minus
                          "
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                    <li class="ingridients__item">
                      <span class="filling filling--jalapeno">Халапеньо</span>

                      <div class="counter counter--orange ingridients__counter">
                        <button
                          type="button"
                          class="
                            counter__button
                            counter__button--disabled
                            counter__button--minus
                          "
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                    <li class="ingridients__item">
                      <span class="filling filling--olives">Маслины</span>

                      <div class="counter counter--orange ingridients__counter">
                        <button
                          type="button"
                          class="
                            counter__button
                            counter__button--disabled
                            counter__button--minus
                          "
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                    <li class="ingridients__item">
                      <span class="filling filling--tomatoes">Томаты</span>

                      <div class="counter counter--orange ingridients__counter">
                        <button
                          type="button"
                          class="
                            counter__button
                            counter__button--disabled
                            counter__button--minus
                          "
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                    <li class="ingridients__item">
                      <span class="filling filling--salmon">Лосось</span>

                      <div class="counter counter--orange ingridients__counter">
                        <button
                          type="button"
                          class="
                            counter__button
                            counter__button--disabled
                            counter__button--minus
                          "
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                    <li class="ingridients__item">
                      <span class="filling filling--mozzarella">Моцарелла</span>

                      <div class="counter counter--orange ingridients__counter">
                        <button
                          type="button"
                          class="
                            counter__button
                            counter__button--disabled
                            counter__button--minus
                          "
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                    <li class="ingridients__item">
                      <span class="filling filling--parmesan">Пармезан</span>

                      <div class="counter counter--orange ingridients__counter">
                        <button
                          type="button"
                          class="
                            counter__button
                            counter__button--disabled
                            counter__button--minus
                          "
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                    <li class="ingridients__item">
                      <span class="filling filling--blue_cheese">Блю чиз</span>

                      <div class="counter counter--orange ingridients__counter">
                        <button
                          type="button"
                          class="
                            counter__button
                            counter__button--disabled
                            counter__button--minus
                          "
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li> -->
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="content__pizza">
            <label class="input">
              <span class="visually-hidden">Название пиццы</span>
              <input
                type="text"
                name="pizza_name"
                placeholder="Введите название пиццы"
              />
            </label>

            <div class="content__constructor">
              <div class="pizza pizza--foundation--big-tomato">
                <div class="pizza__wrapper">
                  <div class="pizza__filling pizza__filling--ananas"></div>
                  <div class="pizza__filling pizza__filling--bacon"></div>
                  <div class="pizza__filling pizza__filling--cheddar"></div>
                </div>
              </div>
            </div>

            <div class="content__result">
              <p>Итого: 0 ₽</p>
              <button type="button" class="button button--disabled" disabled>
                Готовьте!
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import misc from "@/static/misc.json";
import pizza from "@/static/pizza.json";
import user from "@/static/user.json";
export default {
  name: "Index",
  data() {
    return {
      misc: misc, //.map((a) => normalizeTask(a)),
      pizza: pizza, //.map((b) => normalizeTask(b)),
      user: user, //.map((c) => normalizeTask(c)),
    };
  },
  computed: {
    onlyDough() {
      return this.pizza["dough"];
    },
    onlySize() {
      return this.pizza["sizes"];
    },
    onlySauces() {
      return this.pizza["sauces"];
    },
    onlyIngredients() {
      return this.pizza["ingredients"];
    },
  },
  methods: {
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
    getValueSauces(name) {
      if (name == "Томатный") {
        return "tomato";
      } else {
        return "creamy";
      }
    },
    getClassIngredients(name) {
      if (name == "Грибы") {
        return "filling--mushrooms";
      } else if (name == "Чеддер") {
        return "filling--cheddar";
      } else if (name == "Салями") {
        return "filling--salami";
      } else if (name == "Ветчина") {
        return "filling--ham";
      } else if (name == "Ананас") {
        return "filling--ananas";
      } else if (name == "Бекон") {
        return "filling--bacon";
      } else if (name == "Лук") {
        return "filling--onion";
      } else if (name == "Чили") {
        return "filling--chile";
      } else if (name == "Халапеньо") {
        return "filling--jalapeno";
      } else if (name == "Маслины") {
        return "filling--olives";
      } else if (name == "Томаты") {
        return "filling--tomatoes";
      } else if (name == "Лосось") {
        return "filling--salmon";
      } else if (name == "Моцарелла") {
        return "filling--mozzarella";
      } else if (name == "Пармезан") {
        return "filling--parmesan";
      } else if (name == "Блю чиз") {
        return "filling--blue_cheese";
      } else {
        return "";
      }
    },
  },
};
</script>

<style></style>
