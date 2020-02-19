<template>
<div id="app">
  <Panel
    @toggle-overlay="toggleOverlay"
    :time="time" />

  <Dash :overlayState="overlayActive ? 'active' : 'inactive'" />

  <Overlay :overlayState="overlayActive ? 'active' : 'inactive'" />
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import Panel from './components/Panel.vue'
import Dash from './components/Dash.vue'
import Overlay from './components/Overlay.vue'

import 'typeface-cantarell'

@Component({
    components: { Panel, Dash, Overlay }
})
export default class App extends Vue {
    private overlayActive = false
    private time: string = ''
    
    private DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    private MONTHS = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct',
        'Nov', 'Dec'
    ]
    
    private clockIntervalId = 0
    
    private toggleOverlay() {
        this.overlayActive = !this.overlayActive
    }

    private mounted() {
        this.renderClock()
        this.clockIntervalId = setInterval(this.renderClock, 30000)
    }
    
    private destroyed() {
        clearInterval(this.clockIntervalId)
    }

    private renderClock() {
        const now = new Date()

        const day = this.DAYS[now.getDay()]
        const date = now.getDate()
        const dateString = date > 9 ? date.toString() : `0${date}`
        const monthDate = `${date} ${this.MONTHS[now.getMonth()]}`

        const hour = now.getHours()
        const hourString = hour > 9 ? hour.toString() : `0${hour}`

        const minute = now.getMinutes()
        const minuteString = minute > 9 ? minute.toString() : `0${minute}`

        this.time = `${day} ${monthDate} ${hourString}:${minuteString}`
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
