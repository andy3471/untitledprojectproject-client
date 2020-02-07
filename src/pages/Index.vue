<template>
  <q-page class="flex flex-center"></q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      api: process.env["API_URL"]
    };
  }
};
</script>
