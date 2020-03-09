<template>
  <q-layout view="hHh LpR fFf">
    <q-header bordered>
      <ElectronBar v-if="this.mode === 'electron'" />
      <q-toolbar>
        <q-toolbar-title v-if="$q.screen.gt.sm" class="row items-center no-wrap"
          >UPP</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    
  </q-layout>
</template>

<script>
import ElectronBar from "components/ElectronBar";
import { mapState, mapGetters } from "vuex";

export default {
  name: "MainLayout",
  components: {
    ElectronBar
  },
  computed: {
  },
  data() {
    return {
      leftDrawerOpen: false,
      mode: process.env.MODE,
      searchText: "",
      projects: [
        {
          title: "UPP",
          caption: "quasar.dev",
          icon: "school"
        },
        {
          title: "Rota",
          caption: "github.com/quasarframework",
          icon: "code"
        },
        {
          title: "Keyshare",
          caption: "chat.quasar.dev",
          icon: "chat"
        }
      ]
    };
  }
};
</script>
