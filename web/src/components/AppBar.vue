<template>
  <div>
    <app-drawer v-model="showDrawer"/>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Impress</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-dialog v-model="loginDialog" width="500">
        <template v-slot:activator="{ on }">
          <v-btn
            text
            v-on="on"
          >
            <span class="mr-2">Entrar</span>
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <app-login></app-login>
          </v-card-text>
        </v-card>
      </v-dialog>      
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppLogin from './AppLogin.vue';
import AppDrawer from './AppDrawer.vue'

export default Vue.extend({
  components: {
    AppDrawer,
    AppLogin,
  },
  data: () => ({
    loginDialog: false,
    showDrawer: false,
  }),
  methods: {
    toggleDrawer(): void {
      this.showDrawer = !this.showDrawer;
    }
  }
})
</script>