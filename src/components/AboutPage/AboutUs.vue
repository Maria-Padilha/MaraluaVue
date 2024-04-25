<template>
    <div class="container-about">
        <div class="about-info">
            <div class="about-info-video">
                <v-layout class="absolute" style="height: 30px">
                    <v-system-bar color="black">
                        <v-icon class="ms-2" icon="mdi-wifi-strength-4"></v-icon>
                        <v-icon class="ms-2" icon="mdi-signal-cellular-outline"></v-icon>
                        <v-icon class="ms-2" icon="mdi-battery"></v-icon>
                        <span class="ms-2">{{ hours }}:{{ minutes }}</span>
                    </v-system-bar>
                </v-layout>
                <video :src="src" controls loop muted class="video"></video>
            </div>
            <div class="about-info-txt">
                <h3>Somos a Maraluá Fotocabine</h3>
                <p class="info-parag">Conheça um pouco da nossa jornada e dos serviços que temos a oferecer.</p>
                <div class="about-info-txt-content">
                    <div class="content-infos" v-for="item in items" :key="item.id">
                        <p class="info-number" v-if="item.id === 4"><v-icon icon="mdi-infinity"></v-icon></p>
                        <p class="info-number" v-else>{{ item.infoNumber }}</p>
                        <p class="info-txt">{{ item.infoTxt }}</p>
                        <p class="info-about">{{ item.infoAbout }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const src = ref(require('../../assets/videoAbout.mp4'))
const hours = new Date().getHours()
const minutes = new Date().getMinutes();

const items = ref([
    {
        id: 1,
        infoNumber: "12",
        infoTxt: "meses",
        infoAbout: "Levando diversão e entretenimento aos nossos clientes."
    },
    {
        id: 2,
        infoNumber: "03",
        infoTxt: "categorias",
        infoAbout: "Cabine Fotográfica, Totem Fotográfico e Plataforma 360."
    },
    {
        id: 3,
        infoNumber: "+100",
        infoTxt: "eventos realizados",
        infoAbout: "Fizemos parte de um instante que com toda certeza é especial, e está registrado!"
    },
    {
        id: 4,
        infoNumber: "",
        infoTxt: "clientes para conquistar",
        infoAbout: "Queremos conquistar cada sorriso e deixar cada momento eternizado!"
    },
]);

</script>

<style scoped>

/* SECTION SOBRE NÓS */
.container-about{
    background-color: #d8d7d73f;
    text-align: center;
    display: flex;
    flex-direction: column;
    height: auto;
    padding-bottom: 1rem;
}
.about-info{
    margin: 2rem 0 1rem 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
}
.about-info-video{
    background-color: rgb(0, 0, 0);
    width: 21rem;
    position: relative;
    top: .2rem;
    border-radius: 60px;
    height: 39rem;
    border: 2px solid rgba(163, 163, 163, 0.548);
}
.absolute{
    position: absolute;
    position: absolute;
    left: 50%;
    top: 37px;
    transform: translate(-50%);
    z-index: 1;
    width: 93%;
}
.about-info-video::after{
    content: "";
    width: 50px;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.144);
    position: absolute;
    left: 50%;
    top: 27px;
    transform: translate(-50%);
    z-index: 1;
    border-radius: 5px;
}
.about-info-video video{
    border-radius: 0 0 35px 35px;
    position: relative;
    top: 1.5rem;
    cursor: pointer;
}

.about-info-txt{
    margin: 2rem 0 0 5rem;
    color: var(--txt-color-footer);
    width: 40rem;
}
.about-info-txt h3{
    text-align: left;
    color: #C62828;
    font-size: 2rem;
}
.about-info-txt .info-parag{
    color: #616161;
    text-align: left;
    margin-top: 10px;
}
.about-info-txt-content{
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    text-align: left;
}
.content-infos{
    position: relative;
    width: 40%;
    gap: 2rem;
    margin-bottom: 2.5rem;
}
.content-infos .info-number{
    font-size: 2.5rem;
    color: #333;
}
.content-infos .info-txt{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
video{
    width: 19rem;
}
</style>