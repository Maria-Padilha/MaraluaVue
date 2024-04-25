<template>
    <v-carousel hide-delimiters :height="height" with cover>
        <template v-slot:prev="{ props }">
            <v-btn density="comfortable" color="red-darken-3" variant="tonal" icon="mdi-chevron-left" @click="props.onClick"></v-btn>
        </template>
        <template v-slot:next="{ props }">
            <v-btn density="comfortable" color="red-darken-3" variant="tonal" icon="mdi-chevron-right" @click="props.onClick"></v-btn>
        </template>
        
        <v-carousel-item v-for="slide in slides" :key="slide.index"
            :src="slide.src"
            cover
            center
            color="grey-lighten-2"
        >
            <div class="d-flex fill-height justify-center align-center flex-column">
                <div class="text-h3 smSize-35">
                    <p>{{ slide.title }}</p>
                </div>
                <div class="mt-4 text-h6 font-weight-regular smSize-18">
                   <p>{{ slide.subtitle }}</p>
                </div>
                <v-btn class="ma-5" color="red-darken-4">Entre em contato</v-btn>
            </div>
        </v-carousel-item>
    </v-carousel>
</template>

<script setup>
import { ref } from 'vue';


const height = ref("400px");

const slides = ref([])

if(window.innerWidth <= 720){
    slides.value = [
    {
        index: 1,
        src: require("../../assets/carousel/sliderMini.png"), 
        title: "Plataforma 360", 
        subtitle: "Algum texto bacana sobre a plataforma"
    },
    {
        index: 2,
        src: "",
        title: "Cabine Fotográfica", 
        subtitle: "Algum texto bacana sobre a cabine"
    },
    {
        index: 3,
        src: "",
        title: "Totem Fotográfico", 
        subtitle: "Algum texto bacana sobre o totem"
    }]
    height.value = "250px"
}
else{
    slides.value = [
    {
        index: 1,
        src: require("../../assets/carousel/banner1.png"), 
        title: "Plataforma 360", 
        subtitle: "Algum texto bacana sobre a plataforma"
    },
    {
        index: 2,
        src: require("../../assets/carousel/banner2.png"),
        title: "Cabine Fotográfica", 
        subtitle: "Algum texto bacana sobre a cabine"
    },
    {
        index: 3,
        src: require("../../assets/carousel/banner3.png"),
        title: "Totem Fotográfico", 
        subtitle: "Algum texto bacana sobre o totem"
    }]
}
</script>

<style scoped>
@media screen and (max-width: 720px){
    .smSize-35 p{
        font-size: 35px;
    }
    .smSize-18 p{
        font-size: 18px;
    }
}
</style>