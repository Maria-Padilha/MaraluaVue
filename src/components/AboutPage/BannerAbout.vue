<template>
    <v-img width="100%" height="400px" cover :src=src>
        <v-row align="end" class="pa-2 fill-height">
            <v-col>
                <v-container>
                    <div class="headline">
                        <h2>Sobre <span>Nós</span></h2>
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

</script>

<style scoped>
    .headline{
        font-size: 30px;
        color: rgb(255, 255, 255);
        font-weight: 900;
    }
    .content{
        width: 60%;
        margin: 60px auto 40px auto;
    }
    span{
        color: #C62828;
    }
    @media screen and (max-width: 1000px) {
        .content{
            width: 80%;
        }
    }
    @media screen and (max-width: 800px) {
        .content{
            width: 90%;
        }
    }
</style>