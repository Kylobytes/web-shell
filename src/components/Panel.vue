<template>
    <div class="panel">
        <span class="panel__start">
	        <span @click="toggleOverlay"
                  class="panel__activities panel__element">
		        Activities
	        </span>
            <span class="panel__active-window panel__element">
            </span>
        </span>
	    <span class="panel__time panel__element">
		    <p>{{ time }}</p>
	    </span>
	    <span class="panel__status panel__element">
		    <WifiIcon class="panel__icon--symbolic" />
		    <VolumeIcon class="panel__icon--symbolic" />
		    <PowerIcon class="panel__icon--symbolic" />
	    </span>
    </div>
</template>

<script setup lang="ts">
 import { onMounted } from 'vue';
 import { storeToRefs } from 'pinia';
 import { usePanelStore } from '@/stores/panel'; 
 import WifiIcon from 'gnomicon/dist/svg/network-wireless-signal-excellent.svg?component';
 import VolumeIcon from 'gnomicon/dist/svg/audio-volume-high.svg?component';
 import PowerIcon from 'gnomicon/dist/svg/system-shutdown.svg?component';
 import PanDownIcon from 'gnomicon/dist/svg/pan-down.svg?component';
 
 const store = usePanelStore();
 const { time } = storeToRefs(store);
 const { updateTime } = store;
 
 function toggleOverlay(): void { return; }

 onMounted(() => {
     store.updateTime();
     setInterval(() => store.updateTime(), 6000);
 });
</script>

<style scoped lang="scss">
 .panel {
     align-self: flex-start;
     background-color: black;
     font-weight: 700;
     color: #eee;
     width: 100%;
     display: flex;
     flex-flow: row nowrap;
     justify-content: space-between;
     align-items: center;
     user-select: none;
     padding: 2px 0;
     
     &__start {
         display: flex;
         flex-flow: row nowrap;
         column-gap: 4px;
     }

     &__element {
         border-radius: 1rem;
         padding: 4px 16px;

         &:hover {
             background-color: #222;
             cursor: default;
         }
     }

     &__status {
         display: flex;
         flex-flow: row nowrap;
         column-gap: 12px;
     }

     &__icon--symbolic * {
         fill: #CCCCCC;
     }
 }

 h2 {
     margin: 0;
     padding: 0;
 }
</style>
