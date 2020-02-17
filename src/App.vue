<template>
<div id="app">
  <Panel
    @toggle-overlay="toggleOverlay"
    :time="time" />
  <Overlay :overlayState="overlayActive ? 'active' : 'inactive'" />
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
    private overlayActive = false
    
    private DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    
    private now = new Date()
    private day = ''
    private hourString = ''
    private minuteString = ''
    private clock = `${this.day} ${this.hourString}:${this.minuteString}`
    private clockIntervalId = 0
    
    private toggleOverlay() {
        this.overlayActive = !this.overlayActive
    }

    private mounted() {
        this.updateClock()
        this.clockIntervalId = setInterval(this.updateClock, 30000)
    }
    
    private destroyed() {
        // const hours = 
        clearInterval(this.clockIntervalId)
    }
    
    private updateClock() {
        return
    }

}
</script>

<style lang="scss">
#app {
    background: url('./assets/kylobytes-material.png') grey center;
    color: #2c3e50;
    font-family: 'Cantarell', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    min-height: 600px;
    min-width: 800px;
    position: relative;
    text-align: center;
    width: 100vw;
}
</style>
