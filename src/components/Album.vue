<script setup>
const props = defineProps({
    album: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="d-flex align-items-center p-3 border rounded-3 shadow-sm mb-3" :key="index">
        <div class="me-3">
            <img class="img-fluid rounded-3" :src="album.image" alt="" />
        </div>
        <div class="d-flex justify-content-between w-100">
            <div>
                <h5 class="mb-0">{{ album.name }}</h5>
                <p class="mb-1">{{ album.artist }}</p>
                <p class="badge m-0 text-bg-light border rounded-pill border-dark-subtle">
                    {{ album.genre }}
                </p>
            </div>

            <div class="d-flex gap-2">
                <div class="col-auto"><v-icon class="pointer" name="hi-pencil" fill="#0096FF" /><small>edit</small></div>
                <div class="col-auto"><v-icon class="pointer" name="hi-trash" fill="red" /><small>remove</small></div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped></style>