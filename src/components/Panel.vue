<template>
<div class="panel">
  <div @click="toggleOverlay" class="activities elem">
    <p>Activities</p>
  </div>
  <div class="time elem">
    <p>{{ time }}</p>
  </div>
  <div class="user-menu elem">
    <WifiIconSymbolic class="panel-icon-symbolic" />
    <PowerIconSymbolic class="panel-icon-symbolic" />
    <VolumeIconSymbolic class="panel-icon-symbolic" />
    <PanDownIconSymbolic class="panel-icon-symbolic" />
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Emit, Prop } from 'vue-property-decorator'

import WifiIconSymbolic from '../assets/adwaita-icon-theme/Adwaita/scalable/status/network-wireless-signal-excellent-symbolic.svg'
import VolumeIconSymbolic from '../assets/adwaita-icon-theme/Adwaita/scalable/status/audio-volume-high-symbolic.svg'
import PowerIconSymbolic from '../assets/adwaita-icon-theme/Adwaita/scalable/actions/system-shutdown-symbolic.svg'
import PanDownIconSymbolic from '../assets/adwaita-icon-theme/Adwaita/scalable/ui/pan-down-symbolic.svg'

@Component({
    components: {
        WifiIconSymbolic,
        PowerIconSymbolic,
        VolumeIconSymbolic,
        PanDownIconSymbolic
    }
})
export default class Panel extends Vue {
    @Prop(String)
    private time!: string

    @Emit()
    private toggleOverlay(): void { return }
}
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
