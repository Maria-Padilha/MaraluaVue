<template>
    <div class="content">
        <h2 class="mb-5 text-center">Nossa <span>Galeria</span></h2>
        <v-row>
            <v-col
                v-for="item in items"
                :key="item.id"
                class="d-flex child-flex"
                cols="6"
                sm="4"
                >
                <v-img
                    :src="item.src"
                    aspect-ratio="1"
                    class="bg-grey-lighten-2"
                    cover
                >
                    <template v-slot:placeholder>
                        <v-row
                            align="center"
                            class="fill-height ma-0"
                            justify="center"
                        >
                            <v-progress-circular
                            color="grey-lighten-5"
                            indeterminate
                            ></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </v-col>
      </v-row>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
    {
        id: 1, 
        src: require("../assets/gallery/ft-4.jpg")
    },
    {
        id: 2, 
        src: require("../assets/gallery/ft-2.jpg")
    },
    {
        id: 3, 
        src: require("../assets/gallery/ft-10.jpg")
    },
    {
        id: 4, 
        src: require("../assets/gallery/ft-1.jpg")
    },
    {
        id: 5, 
        src: require("../assets/gallery/ft-8.jpg")
    },
    {
        id: 6, 
        src: require("../assets/gallery/ft-6.jpg")
    },
    {
        id: 7, 
        src: require("../assets/gallery/ft-7.jpg")
    },
    {
        id: 8, 
        src: require("../assets/gallery/ft-5.jpg")
    },
    {
        id: 10, 
        src: require("../assets/gallery/ft-3.jpg")
    }
])

</script> 

<style scoped>
    .content{
        width: 60%;
        margin: 30px auto 40px auto;
    }
    h2{
        font-weight: 300;
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