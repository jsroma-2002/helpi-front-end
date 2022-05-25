<template>
  <section class="login-section">
    <form @submit.prevent="login(email, password)" class="login-form">
      <h2 class="login-form-title">Log in</h2>
      <p class="login-form-paragraph">
        Don't have an Account?
        <a @click="navigateToRegisterView" href="#" class="login-form-link"
          >Enter here</a
        >
      </p>
      <div class="login-form-container">
        <div class="login-form-group">
          <input
            v-model="email"
            type="email"
            id="user"
            class="login-form-input"
            placeholder=" "
          />
          <label for="user" class="login-form-label">User:</label>
          <span class="login-form-line"></span>
        </div>

        <div class="login-form-group">
          <input
            v-model="password"
            type="password"
            id="password"
            class="login-form-input"
            placeholder=" "
          />
          <label for="password" class="login-form-label">Password:</label>
          <span class="login-form-line"></span>
        </div>
        <input type="submit" class="login-form-submit" value="Enter" />
      </div>
    </form>
  </section>
</template>

<script setup>
import { useUserStore } from "../stores/userStore";
import helpiApi from "../services/helpi-api-service";
import router from "../router";

const userStore = useUserStore();

function login(email, password) {
  helpiApi
    .loginPlayer(email, password)
    .then((response) => {
      userStore.setPlayer(response.data)
      navigateToHomeView()
    })
    .catch((e) => {
      console.log(e);
    });
}

function navigateToHomeView(){
  router.push({ name: "home" });
}

</script>

<script>
import helpiApiService from "../services/helpi-api-service";

export default {
  name: "LoginForm",

  data() {
    return {
      helpiApi: helpiApiService,
    };
  },

  methods: {

    navigateToRegisterView() {
      this.$router.push({ name: "register" });
    },
  },
};
</script>

<style scoped>
.login-section {
  display: flex;
  min-height: 55vh;
  transform: translateY(40px);
}

.login-form {
  background-color: #fff;
  margin: auto;
  width: 90%;
  max-width: 400px;
  padding: 4.5em 3em;
  border-radius: 10px;
  box-shadow: -1px 10px 18px 5px rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: -1px 10px 18px 5px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: -1px 10px 18px 5px rgba(0, 0, 0, 0.19);
  text-align: center;
}

.login-form-title {
  font-size: 2rem;
  margin-bottom: 0.5em;
}

.login-form-paragraph {
  font-weight: 300;
}

.login-form-link {
  font-weight: 400;
  color: #000;
}

.login-form-container {
  margin-top: 3em;
  display: grid;
  gap: 2.5em;
}

.login-form-group {
  position: relative;
  --color: #5757577e;
}

.login-form-input {
  width: 100%;
  background: none;
  color: #706c6c;
  font-size: 1rem;
  padding: 0.6em 0.3em;
  border: none;
  outline: none;
  border-bottom: 1px solid var(--color);
  font-family: "Poppins", sans-serif;
}

.login-form-input:not(:placeholder-shown) {
  color: #4d4646;
}

.login-form-input:focus + .login-form-label,
.login-form-input:not(:placeholder-shown) + .login-form-label {
  transform: translateY(-12px) scale(0.7);
  transform-origin: left top;
  color: #141f6a;
}

.login-form-label {
  color: var(--color);
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 5px;
  transform: translateY(10px);
  transition: transform 0.5s, color 0.3s;
}

.login-form-submit {
  background: #141f6a;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 1rem;
  padding: 0.8em 0;
  border: none;
  border-radius: 0.5em;
  cursor: pointer;
}

.login-form-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #18932a;
  transform: scale(0);
  transform: left bottom;
  transition: transform 0.4s;
}

.login-form-input:focus ~ .login-form-line,
.login-form-input:not(:placeholder-shown) ~ .login-form-line {
  transform: scale(1);
}

/* Media Query */

@media only screen and (max-width: 960px) {
  .login-form-title {
    font-size: 1.8rem;
  }
}
</style>
