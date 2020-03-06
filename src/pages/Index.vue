<template>
  <q-page class="flex flex-center">
    <router-link to="/login">Login</router-link>
  </q-page>
</template>

<script>
export default {
  mounted() {
    console.log(process.env.TEST);
  }
};
</script>
