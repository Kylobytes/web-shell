<template>
<div class="overlay" :class="[ overlayActive ? 'shown' : 'hidden' ]">
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class Overlay extends Vue {
    @Prop(Boolean)
    private readonly overlayActive!: boolean

    private fadeinOverlay: string
    
    constructor() {
        super()
        this.fadeinOverlay = 'active'
    }
}
</script>

<style scoped lang="scss">
.overlay {
    background-color: black;
    height: calc(100vh - 27px);
    opacity: 0;
    width: 100vw;
}
.shown {
    animation: overlay-fadein 500ms forwards;
}
.hidden {
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
