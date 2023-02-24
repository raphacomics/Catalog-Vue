<script setup>
import Modal from "./components/Modal.vue";
import AlbumsList from './components/AlbumsList.vue'

</script>

<template>
  <main class="container">

    <div class="row justify-content-center">
      <div class="col-12 col-lg-9 col-xl-6">

        <header class="d-flex py-3 border-bottom mb-4 align-items-center justify-content-between">
          <div class="col">
            <h1>Favourite Albums</h1>
          </div>

          <!-- Modal Component -->
          <div class="col-auto">
            <Modal />
          </div>

        </header>

        <!-- Albums List -->
        <AlbumsList />

      </div>
    </div>



  </main>
</template>

<style scoped></style>
