<template>
  <div>
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-text-field v-model="email" label="Email" />
      <v-text-field v-model="password" label="Senha" type="password" />
      <v-checkbox v-model="keepSignedIn" label="Permanecer conectado?" required></v-checkbox>
      <v-btn :disabled="!valid" color="primary" class="text-right mr-4" @click="signIn">Entrar</v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    valid: null,
    email: '',
    password: '',
    keepSignedIn: true,
    rules: {
      notEmpty: (v) => !!v
    }
  }),
  methods: {
    signIn(): void {
      console.log(this.$refs)
      let form = this.$refs.form as Vue & { validate: () => boolean }
      console.log(form.validate())
    }
  }
})
</script>