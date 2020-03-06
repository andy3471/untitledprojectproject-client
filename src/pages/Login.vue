<template>
  <q-page class="flex flex-center">
    <q-form @submit="logIn" @reset="onReset" class="q-gutter-md">
      <q-input filled v-model="username" label="Username" hint="Enter your username"></q-input>

      <q-input
        filled
        type="password"
        v-model="password"
        label="Password"
        hint="Enter your password"
      ></q-input>

      <div>
        <q-btn label="Submit" type="submit" color="primary"></q-btn>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"></q-btn>
      </div>
    </q-form>
  </q-page>
</template>

<script>
export default {
  name: "PageLogin",
  data() {
    return {
      username: "",
      password: ""
    };
  }
};
</script>
