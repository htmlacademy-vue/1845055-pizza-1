<template>
  <header class="header">
    <div class="header__logo">
      <router-link to="/" class="logo">
        <img
          src="@/assets/img/logo.svg"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
        />
      </router-link>
    </div>
    <div class="header__cart">
      <router-link to="/cart"> {{ getOrderPrice }} ₽</router-link>
    </div>
    <div v-if="!isLoggin" class="header__user">
      <a href="#" class="header__login" @click.prevent="logIn()">
        <span>Войти</span>
      </a>
    </div>
    <div v-if="isLoggin" class="header__user">
      <router-link to="/profile">
        <picture>
          <source type="image/webp" :srcset="user.avatar" />
          <img
            :src="user.avatar"
            :srcset="user.avatar"
            width="32"
            height="32"
          />
        </picture>
        <span>{{ user.name }}</span>
      </router-link>
      <a href="#" class="header__logout" @click.prevent="userUnLoggin()">
        <span>Выйти</span>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppLayoutHeader",
  computed: {
    isLoggin: function () {
      return this.$store.getters["Auth/isLoggin"];
    },
    user: function () {
      return this.$store.getters["Auth/getUser"];
    },
    getOrderPrice: function () {
      return this.$store.getters["Cart/getOrderPrice"];
    },
  },
  methods: {
    logIn() {
      let routeNameForLogin = this.$route.meta.routeNameForLogin;
      console.log("header" + routeNameForLogin);
      if (routeNameForLogin !== null) {
        this.$router.push({ name: routeNameForLogin });
      }
    },
    userUnLoggin() {
      this.$store.commit("Auth/isLogg", false);
      let routeNameForUnauthorized = this.$route.meta.routeNameForUnauthorized;
      if (routeNameForUnauthorized !== null) {
        this.$router.push({ name: routeNameForUnauthorized });
      }
    },
  },
};
</script>

<style></style>
