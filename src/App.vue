<template>
  <div class="container-fluid">
    <v-app id="inspire">
      <v-toolbar>
        <v-toolbar-title>GenericApp</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn v-for="item in menu" :key="item.icon" :to="item.link" flat>{{
            item.title
          }}</v-btn>
        </v-toolbar-items>
        <v-menu class="hidden-md-and-up">
          <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
          <v-list>
            <v-list-tile v-for="item in menu" :key="item.icon">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<style></style>

<script>
export default {
  data() {
    return {
      menu: [
        {
          icon: "home",
          title: "home",
          link: "/"
        },
        { icon: "info", title: "Posts", link: "/posts" },
        { icon: "info", title: "Status", link: "/statuscreate" },
        { icon: "warning", title: "tbd" }
      ]
    };
  },

  methods: {
    menuItems() {
      return this.menu;
    }
  }
};
</script>
