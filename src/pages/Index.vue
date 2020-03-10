<template>
  <q-page padding class="flex">{{ this.user }}</q-page>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  }
};
</script>
