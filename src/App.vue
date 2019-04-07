<template>
<div id="app">
  <Panel @toggle-overlay="toggleOverlay" />
  <Overlay :overlayActive="overlayActive" />
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import Panel from './components/Panel.vue'
import Overlay from './components/Overlay.vue'

import 'typeface-cantarell'

@Component({
    components: { Panel, Overlay }
})
export default class App extends Vue {
    private overlayActive: boolean

    constructor() {
        super()

        this.overlayActive = false
    }

    private toggleOverlay() {
        this.overlayActive = !this.overlayActive
    }
}
</script>

<style lang="scss">
#app {
    background: url('./assets/kylobytes-material.png') grey center;
    font-family: 'Cantarell', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 600px;
    min-width: 800px;
    width: 100vw;
    height: 100vh;
}
</style>
