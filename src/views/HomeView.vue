<template>
  <v-app-bar fixed app>
    <v-toolbar-title>{{ $t("navbarTitle") }}</v-toolbar-title>
    <v-spacer />
    <TranslateBtn />
  </v-app-bar>
</template>

<script>
import TranslateBtn from "../components/TranslateBtn.vue";
export default {
  name: "HomeView",
  components: { TranslateBtn },
};
</script>
