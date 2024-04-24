<template>
  <v-footer
    class="bg-white text-center d-flex flex-column"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        color="grey-darken-1"
        variant="plain"
      ></v-btn>
    </div>

    <div class="pt-0 text-grey-lighten-1">
       Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </div>

    <v-divider></v-divider>

    <div class="footerBorder">
      <p>{{ new Date().getFullYear() }} — <strong>Maraluá</strong></p>
    </div>
  </v-footer>
</template>

<script setup>
import { ref } from 'vue';

const icons = ref([
    'mdi-facebook',
    'mdi-instagram',
    'mdi-whatsapp',
    'mdi-linkedin', 
])
</script>

<style scoped>
  .footerBorder{
    margin-top: 10px;
    border-top: 1px solid #ccc;
    width: 100%;
  }
  .footerBorder p{
    margin-top: 10px;
    color: #757575;
  }
</style>