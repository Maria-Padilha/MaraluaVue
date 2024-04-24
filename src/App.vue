<template>
  <v-app>
    <HeaderBar/>
    <RouterView></RouterView>
    <v-footer>
      <FooterBar />
    </v-footer>
  </v-app>
</template>

<script setup>
import HeaderBar from './components/HeaderBar.vue';
import FooterBar from './components/FooterBar.vue';
</script>

