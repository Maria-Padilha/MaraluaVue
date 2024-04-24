<template>
    <v-toolbar height="80" flat color="grey-darken-4">
      <v-toolbar-title class="pl-6">
        <v-img src="../assets/logo.png" :width="190"></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="pr-6">
        <v-btn variant="text">
          <router-link to="/" class="link">Home</router-link>
        </v-btn>
        <v-btn variant="plain">
          <router-link to="/about" class="link">Sobre Nós</router-link>
        </v-btn>
        <v-btn variant="plain">
          <router-link to="/contact" class="link">Contato</router-link>
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>
</template>
<style>
.link{
  color: #BDBDBD;
  text-decoration: none;
  font-weight: 300;
}
</style>