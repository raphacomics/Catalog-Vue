<script>
import { RouterView } from "vue-router";
import json from "../catalog.json";

const albums = json.album;

export default {
  data() {
    return {
      albums,
    };
  },
};

console.log(json);
</script>

<template>
  <main class="container w-50">
    <header
      class="d-flex py-3 border-bottom mb-4 align-items-center justify-content-between"
    >
      <div class="col">
        <h1>Favourite Albums</h1>
      </div>
      <div class="col-auto">
        <button class="btn btn-primary">+ new album</button>
      </div>
    </header>

    <div
      v-for="(album, index) in albums"
      class="d-flex align-items-center p-3 border rounded-3 shadow-sm mb-3"
      :key="index"
    >
      <div class="me-3">
        <img class="img-fluid rounded-3" :src="album.image" alt="" />
      </div>
      <div class="d-flex justify-content-between w-100">
        <div>
          <h5 class="mb-0">{{ album.name }}</h5>
          <p class="mb-1">{{ album.artist }}</p>
          <p
            class="badge m-0 text-bg-light border rounded-pill border-dark-subtle"
          >
            {{ album.genre }}
          </p>
        </div>

        <div>
          <button class="btn btn-light btn-sm me-1">Remove</button>
          <button class="btn btn-success btn-sm">Edit album</button>
        </div>
      </div>
    </div>
  </main>
  <RouterView />
</template>

<style scoped></style>
