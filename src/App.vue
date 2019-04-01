<template>
<div id="app">
  <Panel />
</div>
</template>

<script lang="ts">
import Panel from './components/Panel.vue';
export default {
    components: { Panel },
};
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
/*#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}*/
</style>
