<template>
<div id="app">
  <Panel />
</div>
</template>

<script lang="ts">
import Panel from './components/Panel.vue'

import 'typeface-cantarell'


export default {
    components: { Panel },
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
