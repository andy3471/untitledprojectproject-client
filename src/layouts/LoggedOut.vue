<template>
  <q-layout view="hHh LpR fFf">
    <q-header bordered>
      <ElectronBar v-if="this.mode === 'electron'" />
      <q-toolbar>
        <q-toolbar-title v-if="$q.screen.gt.sm" class="row items-center no-wrap">UPP</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import ElectronBar from "components/ElectronBar";

export default {
  name: "LoggedOut",
  components: {
    ElectronBar
  },
  computed: {},
  data() {
    return {
      mode: process.env.MODE
    };
  }
};
</script>
