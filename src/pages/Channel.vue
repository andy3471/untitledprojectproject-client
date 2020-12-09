<template>
  <q-page>
    <q-scroll-area style="height: 60vh">
      <div v-for="m in 100" :key="m">
        <q-chat-message
          name="me"
          avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          :text="['hey, how are you?']"
          sent
        />
        <q-chat-message
          name="Jane"
          avatar="https://cdn.quasar.dev/img/avatar2.jpg"
          :text="['doing fine, how r you?']"
        />
      </div>
    </q-scroll-area>

    <div class="fixed-bottom message-box">
      <q-editor
        v-model="editor"
        flat
        content-class="bg-amber-1"
        toolbar-text-color="white"
        toolbar-toggle-color="yellow-8"
        toolbar-bg="primary"
        :toolbar="[
        ['bold', 'italic', 'underline'],
      ]"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Channel"
};
</script>
