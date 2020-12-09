<template>
  <q-page padding class="flex flex-center">
    <q-form class="q-gutter-md">
      <p v-if="errorMessage">{{ errorMessage }}</p>
      <q-input outlined v-model="email" label="Email" />
      <q-input outlined v-model="password" type="password" label="Password" />
      <q-input outlined v-model="password" type="password" label="Confirm Password" />
      <div>
        <q-btn label="login" color="primary" flat class="q-ml-sm" @click="login"></q-btn>
        <q-btn label="Register" type="submit" color="primary" @click="register"></q-btn>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.BASE_URL;

export default {
  name: "PageLogin",
  data() {
    return {
      mode: process.env.MODE,
      email: "",
      password: "",
      confirmPassword: "",
      errorMessage: ""
    };
  },
  methods: {
    login() {
      this.$router.push("login");
    },
    register() {}
  }
};
</script>
