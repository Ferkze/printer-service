<template>
  <v-navigation-drawer app fixed v-model="$props.value">
    <v-list dense>
      <v-list-item @click="doNothing">
        <v-list-item-action>
          <v-icon>mdi-printer-wireless</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Nova Impressão</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="doNothing">
        <v-list-item-action>
          <v-icon>mdi-file-document-box-check</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Meus Pedidos</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="doNothing">
        <v-list-item-action>
          <v-icon>mdi-account-circle</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Minha Conta</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item @click="doNothing">
        <v-list-item-action>
          <v-icon>mdi-help</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Ajuda</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="doNothing">
        <v-list-item-action>
          <v-icon>mdi-settings</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Configurações</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  props: {
    value: Boolean
  }
})
export default class AppDrawer extends Vue {
  showMenu: boolean = false
  toggleMenu(): void {
    this.$props.value = !this.$props.value
  }
  doNothing(): void {}
}
</script>