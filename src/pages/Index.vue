<template>
  <q-page class="flex flex-center">
    <router-link to="/login">Login</router-link>
  </q-page>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "PageIndex",
  data() {
    return {
      user: null
    };
  },
  apollo: {
    user: gql`
      {
        user(id: 2) {
          name
          email
        }
      }
    `
  }
};
</script>
