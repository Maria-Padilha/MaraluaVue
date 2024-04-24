<template>
    <div class="container">
        <div class="content">
            <h2 class="ma-5 text-center">Nossos <span>Planos</span></h2>
            <v-row>
                <v-col cols="12" sm="6" lg="4" v-for="item in items" :key="item.id">
                    <v-card class="mx-auto" max-width="400">
                        <v-card-text>
                            <div>Nossos Planos</div>
                            <p class="text-h5 font-weight-black text-red-darken-2">{{ item.title }}</p>
                            <div class="mt-2 text-medium-emphasis">
                               <p class="font-weight-bold">{{ item.description }}</p>
                               <p class="mt-5 description">Fotos Ilimitadas.</p>
                               <p class="description">A melhor qualidade.</p>
                               <p class="description">Fotos e vídeos gerados NA HORA!</p>
                            </div>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn color="red-darken-1" text="Saiba Mais" variant="text"
                                @click="reveal = true"></v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                            <v-card v-if="reveal" class="position-absolute w-100" height="100%" style="bottom: 0;">
                                <v-card-text class="pb-0">
                                    <p class="text-h4 text-red-darken-2">Combos</p>
                                    <p class="text-medium-emphasis">Para melhorar a sua escolha, vai de COMBO!</p>
                                    <p class="my-5 text-h6 font-weight-regular">{{ item.combo }}</p>
                                </v-card-text>

                                <v-card-actions class="pt-0">
                                    <v-btn color="red-darken-1" text="Fechar" variant="text"
                                        @click="reveal = false">
                                    </v-btn>
                                    <v-btn color="red-darken-1" text="Agendar" variant="tonal">
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-expand-transition>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const reveal = ref(false)

const items = ref([
    {
        id: 1,
        title: "P·R·A·T·A",
        description: "2 horas de evento",
        combo: "Plataforma 360 + Cabine Fotográfica"
    },
    {
        id: 2,
        title: "O·U·R·O",
        description: "3 horas de evento",
        combo: "Plataforma 360 + Totem Fotográfico"
    },
    {
        id: 3,
        title: "D·I·A·M·A·N·T·E",
        description: "4 horas de evento",
        combo: "Plataforma, Totem ou Cabine Personalizados!"
    }
])
</script>

<style scoped>
.container {
    background-color: #d8d7d73f;
    border-top: 1px solid #cccccc8a;
    width: 100%;
    margin-bottom: 30px;
    padding-bottom: 30px;
}

.content {
    width: 60%;
    margin: 0 auto;
}

h2 {
    font-weight: 300;
}

.description{
    font-size: 18px;
}

span {
    color: #C62828;
}

@media screen and (max-width: 1000px) {
    .content {
        width: 80%;
    }
}

@media screen and (max-width: 800px) {
    .content {
        width: 90%;
    }
}
</style>