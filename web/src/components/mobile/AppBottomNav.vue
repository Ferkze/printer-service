<template>
  <v-bottom-navigation app fixed grow v-model="activeItem" color="primary">
    <v-btn value="files">
      <span>Arquivos</span>
      <v-icon>mdi-file-cabinet</v-icon>
    </v-btn>

    <v-btn value="print">
      <span>Imprimir</span>
      <v-icon>mdi-printer-wireless</v-icon>
    </v-btn>

    <v-btn value="account">
      <span>Conta</span>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class AppBottomNav extends Vue {
  activeItem: string = 'print'
}
</script>