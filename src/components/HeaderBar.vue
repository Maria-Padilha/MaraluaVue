<template>
    <v-toolbar height="80" flat color="grey-darken-4">
      <v-toolbar-title class="pl-6">
        <v-img src="../assets/logo.png" :width="190"></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="pr-6">
        <v-btn variant="text" to="/" class="link">Home</v-btn>
        <v-btn variant="plain" to="/about" class="link">Sobre Nós</v-btn>
        <v-btn variant="plain" to="/contact" class="link">Contato</v-btn>
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