<template>
    <v-img width="100%" :height="height" cover :src=src>
        <v-row align="end" class="pa-2 fill-height">
            <v-col>
                <v-container>
                    <div class="headline">
                        <h1 class="text-h3">Sobre <span>Nós</span></h1>
                    </div>
                </v-container>
            </v-col>
        </v-row>
    </v-img>
    <div class="content">
        <p class="text-justify font-weight-regular text-subtitle-2 text-grey-darken-1">Lorem ipsum dolor sit, amet
            consectetur adipisicing elit.
            Aliquid officia natus repellat corrupti laboriosam. Unde,
            nisi. Praesentium suscipit eius, illum quae voluptas delectus
            soluta cupiditate blanditiis porro vitae distinctio neque?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aliquid officia natus repellat corrupti laboriosam.
        </p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const src = ref(require('../../assets/bannerAbout1.png'));
const height = ref("400px");

if(window.innerWidth <= 720){
    height.value = "250px"
}

</script>

<style scoped>
    span{
        color: #C62828;
    }
</style>