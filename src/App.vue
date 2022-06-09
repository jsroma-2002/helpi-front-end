<template>
  <input type="checkbox" id="check" />
  <section class="home-section">
    <header class="home-header">
      <h2><a @click="navigateToHomeView" href="#" class="home-logo">Helpi</a></h2>
      <div class="home-navbar">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink v-if="!userStore.isLogin" to="/register">Register</RouterLink>
        <RouterLink v-if="!userStore.isLogin" to="/login">Login</RouterLink>
        <RouterLink v-if="userStore.isLogin" to="/communities">Communities</RouterLink>
        <RouterLink v-if="userStore.isLogin" to="/profile">Profile</RouterLink>
        <RouterLink v-if="userStore.isLogin" @click.prevent="userStore.logout" to="/">Logout</RouterLink>
      </div>
      <label class="home-label" for="check">
        <i class="fas fa-bars menu-btn"></i>
        <i class="fas fa-times close-btn"></i>
      </label>
    </header>
  </section>
  <RouterView />
</template>

<script setup>
import { useUserStore } from '../src/stores/userStore'

const userStore = useUserStore()

</script>

<script>
export default {
  name: "App",
  methods:{
    navigateToHomeView(){
      this.$router.push({name: "home"})
    }
  }
};

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.home-section {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.home-header {
  position: relative;
  top: 0;
  width: 100%;
  padding: 30px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.home-logo {
  position: relative;
  color: #18932a;
  font-size: 30px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1px;
}

.home-navbar * {
  color: #666785;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 2px 15px;
  border-radius: 20px;
  transition: 0.3s;
  transition-property: background;
}

.home-navbar *:not(:last-child) {
  margin-right: 30px;
}

.home-navbar *:hover {
  background: #141F6A;
  color: #fff;
}

.home-label {
  display: none;
}

#check {
  z-index: 3;
  display: none;
}

/* Media Query */
@media only screen and (max-width: 960px) {
  .home-navbar {
    display: none;
  }

  .home-label {
    display: block;
    font-size: 25px;
    cursor: pointer;
    transition: 0.3s;
    transition-property: color;
    color: #666785;
  }

  .home-label:hover {
    color: #66b974;
  }

  .home-label .close-btn {
    display: none;
  }

  #check:checked ~ .home-section .home-header .home-navbar {
    z-index: 2;
    position: fixed;
    background: rgba(102, 185, 116, 0.9);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #check:checked ~ .home-section .home-header .home-navbar * {
    font-weight: 700;
    margin-right: 0;
    margin-bottom: 50px;
    letter-spacing: 2px;
  }

  #check:checked ~ .home-section .home-header .home-label .menu-btn {
    display: none;
  }

  #check:checked ~ .home-section .home-header .home-label .close-btn {
    z-index: 2;
    display: block;
    position: fixed;
  }

  .home-label .menu-btn {
    position: absolute;
  }

  .home-header .home-logo {
    position: absolute;
    bottom: -6px;
  }
}
</style>
