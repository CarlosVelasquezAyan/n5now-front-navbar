<template>
  <v-menu bottom left>
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" icon v-bind="attrs" v-on="on">
        <v-icon>mdi-translate</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i">
        <v-list-item-title
          ><v-btn @click="changeLocate(item.value)">{{
            item.title
          }}</v-btn></v-list-item-title
        >
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "ES", value: "es" },
        { title: "EN", value: "en" },
      ],
    };
  },
  methods: {
    changeLocate(locate) {
      const path = {
        params: {
          lang: locate,
        },
      };
      this.$router.push(path);
    },
  },
};
</script>
