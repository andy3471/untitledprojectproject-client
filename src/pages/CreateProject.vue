<template>
  <q-page padding class="flex flex-center">
    <q-form class="q-gutter-md">
      <p>Create Project</p>
      <q-input outlined v-model="details.name" label="Name" />
      <div>
        <q-btn label="Create Project" color="primary" @click.prevent></q-btn>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "CreateProject",
  computed: {},
  data() {
    return {
      details: { name: "" }
    };
  },
  methods: {}
};
</script>
