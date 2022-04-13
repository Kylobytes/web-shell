<template>
<div class="panel">
	<div @click="toggleOverlay" class="activities elem">
		<p>Activities</p>
	</div>
	<div class="time elem">
		<p>{{ time }}</p>
	</div>
	<div class="user-menu elem">
		<WifiIcon class="panel-icon-symbolic" />
		<PowerIcon class="panel-icon-symbolic" />
		<VolumeIcon class="panel-icon-symbolic" />
		<PanDownIcon class="panel-icon-symbolic" />
	</div>
</div>
</template>

<script setup lang="ts">
 import WifiIcon from 'gnomicon/dist/svg/network-wireless-signal-excellent.svg?component';
 import VolumeIcon from 'gnomicon/dist/svg/audio-volume-high.svg?component';
 import PowerIcon from 'gnomicon/dist/svg/system-shutdown.svg?component';
 import PanDownIcon from 'gnomicon/dist/svg/pan-down.svg?component';

 const props = defineProps({
	 time: String
 });

 function toggleOverlay(): void { return }
</script>

<style scoped lang="scss">
.panel {
    align-self: flex-start;
    background-color: black;
    font-weight: 700;
    color: #CCCCCC;
    height: 27px;
    min-width: 800px;
    width: 100vw;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    
    &:before,
    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        width: 8px;
        height: 8px;
    }
    &:before {
        border: 0 solid transparent;
        border-top: 27px solid black;
        border-radius: 100% 0 0 0;
        left: 0;
    }
    &:after {
        border: 0 solid transparent;
        border-top: 27px solid black;
        border-radius: 0 100% 0 0;
        right: 0;

        @media (max-width: 800px) {
            left: 792px;
        }
    }
    &-icon {
        &-symbolic {
            margin-right: 12px;
            & * {
                fill: #CCCCCC;
            }
        }
    }
    .elem:hover {
        color: white;

        &, .panel-icon-symbolic * {
            fill: white;
        }

        &, p {
            cursor: default;
        }
    }
    .activities {
        margin-left: 12px;
    }
    .fa {
        margin-right: 12px;
    }
    .activities, .time, .elem > .fa {
        user-select: none;
    }
}
h2 {
    margin: 0;
    padding: 0;
}
</style>
