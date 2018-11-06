<template>
  <v-app dark>
    <v-toolbar fixed dense app>
      <v-toolbar-title class="headline text-uppercase">
        <v-btn
          flat
          router-link
          to="/"
          class="btn-brand">
          <span>Vuetify</span>
          <span class="font-weight-light">MATERIAL DESIGN</span>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        router-link
        to="/register">
        <span class="mr-2">Register</span>
        <v-icon>web</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>
<style lang="scss" scoped>
.btn-brand {
  font-size: 24px;
  &::before {
    background-color: rgba(0,0,0,0);
  }
}
</style>
