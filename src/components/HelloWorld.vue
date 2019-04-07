<template>
<div class="overlay">
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Overlay extends Vue {
    
}
</script>

<style scoped lang="scss">
.overlay {
    width: 100vw;
    height: calc(100vh - 27px);
    background-color: black;
    opacity: 0.6;
}
</style>
