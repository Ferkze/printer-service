<template>
  <v-app>
    <app-bar/>

    <v-content>
      <v-container>
        <h2>Conteúdo da página</h2>
      </v-container>
    </v-content>

    <app-bottom-nav class="hidden-sm-and-up" />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import AppBar from './components/AppBar.vue'
import AppBottomNav from './components/mobile/AppBottomNav.vue'

export default Vue.extend({
  name: 'App',

  components: {
    AppBar,
    AppBottomNav
  },

  data: () => ({
  })
})
</script>
