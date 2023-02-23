<script setup>
import { RouterLink, RouterView } from 'vue-router'
import json from '../catalog.json'

const favAlbums = json

</script>

<template>
  <main class="container w-50">
    <header class="d-flex py-3 border-bottom mb-4 align-items-center justify-content-between">
      <div class="col">
        <h1>Favourite Albums</h1>
      </div>
      <div class="col-auto">
        <button class="btn btn-primary">Add new album</button>
      </div>
    </header>

    <div v-for="item in favAlbums" class="d-flex align-items-center p-3 border rounded-3 shadow-sm">
      <div class="me-3">
        <img class="img-fluid rounded-3" :src="item.image" alt="">
      </div>
      <div class="d-flex align-items-center justify-content-between w-100">
        <div>
          <h4 class="mb-0">{{ item.name }}</h4>
          <p class="mb-1">{{ item.artist }}</p>
          <p class="badge m-0 text-bg-secondary">{{ item.genre }}</p>
        </div>



        <div>
          <span class="text-secondary me-4">Remove</span>
          <span class="text-primary ">Edit</span>
        </div>

      </div>

    </div>

  </main>
  <RouterView />
</template>

<style scoped></style>
