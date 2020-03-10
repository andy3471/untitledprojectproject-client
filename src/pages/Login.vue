<template>
  <q-page padding class="flex flex-center">
    <q-form class="q-gutter-md">
      <p v-if="loginError">{{ loginError }}</p>
      <q-input outlined v-model="details.email" label="Email" />
      <q-input outlined v-model="details.password" type="password" label="Password" />
      <div>
        <q-btn label="Register" color="primary" flat class="q-ml-sm" @click="register"></q-btn>
        <q-btn label="Sign In" type="submit" color="primary" @click.prevent="login(details)"></q-btn>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "PageLogin",
  computed: {
    ...mapState({
      loginError: state => state.auth.loginError
    })
  },
  data() {
    return {
      details: { email: "", password: "" }
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
    register() {
      this.$router.push("register");
    }
  }
};
</script>
