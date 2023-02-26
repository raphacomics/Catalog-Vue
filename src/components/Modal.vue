<script setup>
import { ref, reactive } from "vue";

const openModal = ref(false)
const emit = defineEmits(['create-album'])

const createAlbum = reactive({
    name: "",
    artist: "",
    genre: "",
    errMsg: ""
})

const emitAlbum = () => {
    if (createAlbum.artist &&
        createAlbum.name &&
        createAlbum.genre == "") {

        emit("create-album", createAlbum)
        openModal.value = false
        createAlbum.artist = ""
        createAlbum.name = ""
        createAlbum.genre = ""
    }

    createAlbum.errMsg = "ⓘ All fields are required"



    return

}

</script>


<template>
    <!-- Button open Modal -->
    <button @click="openModal = true" class="btn btn-primary">+ new album</button>

    <!-- Modal -->

    <div class="backdrop" v-if="openModal">
        <div class="card col-11 col-md-6 position-absolute top-50 start-50 translate-middle">
            <div class="card-body">
                <!-- <h1>{{ msg }}</h1> -->
                <h3>Add a new album</h3>
                <div class="mb-3">
                    <label class="form-label">Album name</label>
                    <input required v-model="createAlbum.name" class="form-control" type="text">
                </div>
                <div class="mb-3">
                    <label class="form-label">Artist name</label>
                    <input required v-model="createAlbum.artist" class="form-control" type="text">
                </div>
                <div class="mb-3">
                    <label class="form-label">Genre</label>
                    <input required v-model="createAlbum.genre" class="form-control" type="text">
                </div>

                <span class="my-2 text-danger">{{ createAlbum.errMsg }}</span>
                <hr>
                <button @click="emitAlbum()" class="btn btn-primary">Add album</button>
                <button @click="openModal = false" class="btn btn-primary-outlined">Close</button>

            </div>
        </div>
    </div>
</template>


<style>
.backdrop {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000000c4;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
}
</style>