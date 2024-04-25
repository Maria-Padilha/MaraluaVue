<template>
     <v-img width="100%" height="400px" cover :src=src>
        <v-row align="end" class="pa-2 fill-height">
            <v-col>
                <v-container>
                    <div class="headline">
                        <h2>Fale <span>Conosco</span></h2>
                    </div>
                </v-container>
            </v-col>
        </v-row>
    </v-img>
</template>

<script setup>
import { ref } from 'vue';

const src = ref(require('../../assets/bannerContact.png'))

</script>

<style scoped>
    .headline{
        font-size: 30px;
        color: rgb(0, 0, 0);
        font-weight: 900;
    }
    .content{
        width: 60%;
        margin: 60px auto 40px auto;
    }
    span{
        color: #C62828;
    }
</style>