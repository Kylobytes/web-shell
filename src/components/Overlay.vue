<template>
<div class="overlay" :class="overlayState">
</div>
</template>

<script setup lang="ts">
import Vue from 'vue';
</script>

<style scoped lang="scss">
.overlay {
    background: #000;
    height: calc(100vh - 27px);
    opacity: 0.6;
    width: 100vw;
}
.active {
    animation: overlay-fadein 500ms forwards;
}
.inactive {
    animation: overlay-fadeout 500ms forwards;
}
@keyframes overlay-fadein {
    to {
        opacity: 0.6;
    }
}
@keyframes overlay-fadeout {
    from {
        opacity: 0.6;
    }
    to {
        opacity: 0;
    }
}
</style>
