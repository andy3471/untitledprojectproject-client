<template>
  <q-page padding class="flex flex-center">
    <q-form class="q-gutter-md">
      <p v-if="errorMessage"> {{ errorMessage }} </p>
      <q-input outlined v-model="email" label="Email" />
      <q-input outlined v-model="password" type="password" label="Password" />
      <div>
        <q-btn label="Register" color="primary" flat class="q-ml-sm" @click="register"></q-btn>
        <q-btn label="Sign In" type="submit" color="primary" @click.prevent="login"></q-btn>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import axios from "axios"

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://upp.local'

export default {
  name: "PageLogin",
  data() {
    return {
      mode: process.env.MODE,
      email: "",
      password: "",
      errorMessage: ""
    };
  },
  methods: {
    login() {
     if (this.mode === "spa") {
        axios.get('/airlock/csrf-cookie').then(response => {
          console.log(response)
          axios.post('/login', {
            email: this.email,
            password: this.password
          }).then(response2 => {
            this.$router.push('/');
          }).catch(error => {
            const key = Object.keys(error.response.data.errors)[0]
            this.errorMessage = error.response.data.errors[key][0]
          })
        });
      } else {
        axios.get('/api/login', {
          email: this.email,
          password: this.password
        }).then(response => {
          console.log(response)
        }).catch(error => {
            const key = Object.keys(error.response.data.errors)[0]
            this.errorMessage = error.response.data.errors[key][0]
        })
      }
    },
    register() {
      this.$router.push('register');
    }
  }
};
</script>
