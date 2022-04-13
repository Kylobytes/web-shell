<template>
	<div>
		<Panel
			@toggle-overlay="toggleOverlay"
			:time="time" />
			 <!-- <Overlay :overlayState="overlayActive ? 'active' : 'inactive'" />
			 <Dash :overlayState="overlayActive ? 'active' : 'inactive'" /> -->
	</div>
</template>

<script setup lang="ts">
 import { ref, onMounted } from 'vue';

 import Panel from './components/Panel.vue';
 // import Dash from './components/Dash.vue';
 // import Overlay from './components/Overlay.vue';

 const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
 const overlayActive: boolean = ref(false);
 const time: string = ref('');
 const clockIntervalId: number = ref(0);
 
 function toggleOverlay(): void {
     overlayActive.value = !overlayActive.value
 }

 onMounted(() => {
     updateClock()
     clockIntervalId.value = setInterval(updateClock, 30000)
 });
 
 function updateClock(): void {
     const now = new Date();

     const date = now.getDate()
     const dateString = date > 9 ? date.toString() : `0${date}`
     const monthDate = `${date} ${MONTHS[now.getMonth()]}`

     const hour = now.getHours()
     const hourString = hour > 9 ? hour.toString() : `0${hour}`

     const minute = now.getMinutes()
     const minuteString = minute > 9 ? minute.toString() : `0${minute}`

     time.value = `${monthDate} ${hourString}:${minuteString}`
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
     height: 100vh;
     min-height: 600px;
     min-width: 800px;
     position: relative;
     text-align: center;
     width: 100vw;
 }
</style>
