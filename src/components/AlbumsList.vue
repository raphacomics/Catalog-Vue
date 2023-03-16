<script setup>
import { ref } from "vue";
import { uid } from 'uid'
import Modal from "../components/Modal.vue"
import albumData from "../catalog.json";
import Album from "./Album.vue"

const albums = albumData;

const albumNew = ref([])

const addAlbum = (newAlbum) => {
    albumNew.value.push({
        id: uid(),
        name: newAlbum.name,
        artist: newAlbum.artist,
        image: "https://picsum.photos/90",
        genre: newAlbum.genre
    })

}


</script>

<template>
    <!-- HEADER -->
    <header class="d-flex py-3 border-bottom mb-4 align-items-center justify-content-between">
        <div class="col">
            <h1>Favourite Albums</h1>
        </div>
        <!-- Modal Component -->
        <div class="col-auto">
            <Modal @create-album="addAlbum" />
        </div>
    </header>

    <!-- NEW LIST -->
    <Album v-for="album in albumNew" :album="album" />
    <!-- LIST -->
    <Album v-for="album in albums" :album="album" />
</template>



<style lang="scss" scoped></style>