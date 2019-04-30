<template>
<div class="overlay" :class="overlayState">
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class Overlay extends Vue {
    @Prop(String)
    private readonly overlayState!: string
}
</script>

<style scoped lang="scss">
.overlay {
    background-color: black;
    height: calc(100vh - 27px);
    opacity: 0;
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
