<template>
	<div>
		<Panel />
		<!-- <Overlay :overlayState="overlayActive ? 'active' : 'inactive'" />
			 <Dash :overlayState="overlayActive ? 'active' : 'inactive'" /> -->
	</div>
</template>

<script setup lang="ts">
 import { ref, onMounted } from 'vue';

 import Panel from './components/Panel.vue';
 // import Dash from './components/Dash.vue';
 // import Overlay from './components/Overlay.vue';

 const overlayActive: boolean = ref(false);
 
 function toggleOverlay(): void {
     overlayActive.value = !overlayActive.value
 }
</script>

<style lang="scss">
 @font-face {
     font-family: "Cantarell";
     font-weight: 100 900;
     font-display: swap;
     font-style: normal;
     font-named-instance: "Regular";
     src: url("node_modules/cantarell/cantarell.woff2") format("woff2");
 }
 
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
</style>
