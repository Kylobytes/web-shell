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
    private DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    private time = ''
    private timeIntervalId = 0
    private overlayActive = false
    private timeInterval = 0
    private secondsOffset = 0

    private toggleOverlay() {
        this.overlayActive = !this.overlayActive
    }

    private mounted() {
        this.showTime()
        this.timeIntervalId = setInterval(
            this.showTime,
            this.timeInterval > 1
                ? 60000
                : (60 - this.secondsOffset) * 1000
        )
    }

    private destroyed() {
        clearInterval(this.timeIntervalId)
    }


    private showTime() {
        const now = new Date()
        const day = this.DAYS[now.getDay()]

        this.secondsOffset = now.getSeconds()

        const hour = now.getHours()
        const minute = now.getMinutes()

        const hourString = hour > 9 ? hour.toString() : `0${hour}`
        const minuteString = minute > 9 ? minute.toString() : `0${minute}`

        this.time = `${day} ${hourString}:${minuteString}`
        if (this.timeInterval < 3) ++this.timeInterval
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
