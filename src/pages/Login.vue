<template>
  <q-page padding class="flex flex-center">
    <q-form @submit="logIn" @reset="onReset" class="q-gutter-md">
      <q-input outlined v-model="email" label="Email" />
      <q-input outlined v-model="password" type="password" label="Password" />
      <div>
        <q-btn label="Submit" type="submit" color="primary"></q-btn>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" @click="reset"></q-btn>
      </div>
    </q-form>
  </q-page>
</template>

<script>
export default {
  name: "PageLogin",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    reset() {
      this.email = "";
      this.password = "";
    }
  }
};
</script>
