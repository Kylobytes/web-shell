<template>
	<div>
		<Panel />
        <StatusMenu class="app__status-menu" />
		<!-- <Overlay :overlayState="overlayActive ? 'active' : 'inactive'" />
			 <Dash :overlayState="overlayActive ? 'active' : 'inactive'" /> -->
	</div>
</template>

<script setup lang="ts">
 import { ref, onMounted } from 'vue';

 import Panel from './components/Panel.vue';
 import StatusMenu from './components/StatusMenu.vue';
 // import Dash from './components/Dash.vue';
 // import Overlay from './components/Overlay.vue';

 const overlayActive: boolean = ref(false);
 
 function toggleOverlay(): void {
     overlayActive.value = !overlayActive.value
 }
</script>

<style lang="scss">
 
 #app {
     background: url('./assets/kylobytes-material.png') grey center;
     color: #2c3e50;
     font-family: 'Cantarell', sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     height: 100%;
     min-height: 600px;
     min-width: 800px;
     position: relative;
     width: 100%;
 }

 .app {
     &__status-menu {
         position: absolute;
         right: 0px;
         top: 32px;
     }
 }
</style>
