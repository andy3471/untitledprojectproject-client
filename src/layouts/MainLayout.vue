<template>
  <q-layout view="hHh LpR fFf">
    <q-header bordered>
      <ElectronBar v-if="this.mode === 'electron'" />
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title v-if="$q.screen.gt.sm" class="row items-center no-wrap">UPP</q-toolbar-title>

        <q-space />
        <q-input dark dense standout v-model="searchText" class="q-ml-md search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="white" icon="notifications">
            <q-badge color="red" text-color="white" floating>2</q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>

          <q-btn dense flat>
            <div class="row items-center no-wrap">
              <q-icon name="add" size="20px" />
              <q-icon name="arrow_drop_down" size="16px" style="margin-left: -2px" />
            </div>
            <q-menu auto-close>
              <q-list dense style="min-width: 100px">
                <q-item clickable class="GL__menu-link" to="/project/create">
                  <q-item-section>New Project</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link" to="/team/create">
                  <q-item-section>New Team</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>

          <q-btn v-if="this.user" dense flat no-wrap>
            <q-avatar rounded size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-icon name="arrow_drop_down" size="16px" />
            <q-tooltip>Account</q-tooltip>
            <q-menu auto-close>
              <q-list dense>
                <q-item class="GL__menu-link-signed-in">
                  <q-item-section>
                    <div>
                      <strong>{{ user.name }}</strong>
                    </div>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Your profile</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Your projects</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Your Groups</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Help</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section @click="logout">Sign out</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
      <div class="row">
        <div class="col-xs-2">
          <q-list>
            <ProjectLink v-for="project in projects" :key="project.title" v-bind="project" />
            <ProjectLink icon="create" title="Create Project" link="/project/create" />
          </q-list>
        </div>
        <div class="col-grow">
          <q-list>
            <q-item-label header class="text-grey-8">Untitled Project Proejct</q-item-label>
            <ChannelLink v-for="channel in channels" :key="channel.title" v-bind="channel" />
          </q-list>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import ProjectLink from "components/ProjectLink";
import ChannelLink from "components/ChannelLink";
import ElectronBar from "components/ElectronBar";

import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "MainLayout",
  components: {
    ProjectLink,
    ElectronBar,
    ChannelLink
  },
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  },
  methods: {
    ...mapActions("auth", ["logout"])
  },
  data() {
    return {
      leftDrawerOpen: false,
      mode: process.env.MODE,
      searchText: "",
      projects: [
        {
          title: "UPP",
          icon: "school",
          link: "/channel"
        },
        {
          title: "Rota",
          icon: "code",
          link: "/channel"
        },
        {
          title: "Keyshare",
          icon: "chat",
          link: "/channel"
        }
      ],
      channels: [
        {
          title: "#public",
          icon: "perm_identity",
          link: "/channel"
        },
        {
          title: "#frontend",
          icon: "lock",
          link: "/channel"
        },
        {
          title: "#backend",
          icon: "lock",
          link: "/channel"
        }
      ]
    };
  }
};
</script>
