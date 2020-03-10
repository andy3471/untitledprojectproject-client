<template>
  <q-bar class="q-electron-drag">
    <div>UntitledProjectProject</div>
    <q-space />
    <q-btn dense flat icon="minimize" @click="minimize" />
    <q-btn dense flat icon="crop_square" @click="maximize" />
    <q-btn dense flat icon="close" @click="close" />
  </q-bar>
</template>

<script>
export default {
  name: "ElectronBar",
  methods: {
    minimize() {
      this.$q.electron.remote.BrowserWindow.getFocusedWindow().minimize();
    },
    maximize() {
      const win = this.$q.electron.remote.BrowserWindow.getFocusedWindow();

      if (win.isMaximized()) {
        win.unmaximize();
      } else {
        win.maximize();
      }
    },
    close() {
      this.$q.electron.remote.BrowserWindow.getFocusedWindow().close();
    }
  }
};
</script>
