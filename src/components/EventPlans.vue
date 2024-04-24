<template>
    <div class="container">
        <div class="content">
            <h2 class="ma-5 text-center">Nossos <span>Planos</span></h2>
            <v-row>
                <v-col cols="6" sm="4" v-for="item in items" :key="item.id">
                    <v-card class="mx-auto" outlined hover>
                        <v-img
                        class="align-end text-white"
                        height="250"
                        :src="item.src"
                        cover
                        >
                            <v-card-title class="text-no-wrap bg-red-lighten-2">{{ item.title }}</v-card-title>
                        </v-img>
                
                        <v-card-subtitle class="pt-4">Descontos exclusivos!</v-card-subtitle>
                
                        <v-card-text>
                            <div class="font-weight-medium">{{ item.description }}</div>
                            <div>Conteúdo ilimitado.</div>
                            <div>Tudo na melhor qualidade.</div>
                            <div>Fotos e vídeos gerados NA HORA!</div>
                        </v-card-text>
                
                        <v-card-actions>
                            <v-btn color="red-lighten-1" block text="Agendar"></v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
    {
        id: 1, 
        title: "Prata",
        description: "2 horas de evento", 
        src: require("../assets/eventPlan/eventPlan1.png")
    },
    {
        id: 2, 
        title: "Ouro",
        description: "3 horas de evento", 
        src: require("../assets/eventPlan/eventPlan2.png")
    },
    {
        id: 3, 
        title: "Diamante",
        description: "4 horas de evento", 
        src: require("../assets/eventPlan/eventPlan3.png")
    }
])
</script>

<style scoped>
    .container{
        background-color: #d8d7d73f;
        border-top: 1px solid #cccccc8a;
        width: 100%;
        margin-bottom: 30px;
        padding-bottom: 30px;
    }
     .content{
        width: 60%;
        margin: 0 auto;
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