<template>
  <q-btn round :to="link">
    <q-avatar :icon="icon" size="28px">
      <q-tooltip anchor="center right" self="center left" :offset="[0, 0]">{{title}}</q-tooltip>
    </q-avatar>
  </q-btn>
</template>

<script>
export default {
  name: "ProjectLink",
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ""
    },

    link: {
      type: String,
      default: "#"
    },

    icon: {
      type: String,
      default: ""
    }
  }
};
</script>
