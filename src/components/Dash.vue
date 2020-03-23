<template>
<div class="dash" :class="overlayState">
  <TerminalIcon class="app-icon" viewBox="0 0 128 128" width="auto"
                height="100%" />
  <FilesIcon class="app-icon" viewBox="0 0 128 128" width="auto"
             height="100%" />
  <MusicIcon class="app-icon" viewBox="0 0 128 128" width="auto"
             height="100%" />
  <VideosIcon class="app-icon" viewBox="0 0 128 128" width="auto"
             height="100%" />
  <AppGridIcon class="app-icon app-grid-icon" viewBox="0 0 16 16" width="100%" height="auto" />
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

import TerminalIcon from '../assets/terminal.svg'
import FilesIcon from '../assets/files.svg'
import MusicIcon from '../assets/music.svg'
import VideosIcon from '../assets/videos.svg'
import AppGridIcon from '../assets/adwaita-icon-theme/Adwaita/scalable/actions/view-app-grid-symbolic.svg'

@Component({
    components: {
        TerminalIcon,
        FilesIcon,
        MusicIcon,
        VideosIcon,
        AppGridIcon
    }
})
export default class Dash extends Vue {
@Prop(String)
private readonly overlayState!: string
}
</script>

<style scoped lang="scss">
$dash-width: 48px;
.dash {
    align-self: center;
    background-color: #1B1B1C;
    border-top: 1px solid #444444;
    border-right: 1px solid #444444;
    border-bottom: 1px solid #444444;
    border-radius: 0 8px 8px 0;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: $dash-width;
    margin: 0;
    padding: 8px 8px 8px 4px;

    .app-icon {
        margin: 4px 0;
        padding: 0;

        &:hover {
            cursor: pointer;
        }
    }
    .app-grid-icon * {
        fill: white;
    }
}
.inactive {
    margin-left: -2 * $dash-width;
    animation: 250ms slideout;
}
.active {
    margin-left: 0;
    animation: 250ms slidein;
}
@keyframes slidein {
    from {
        margin-left: -2 * $dash-width;
    }
    to {
        margin-left: 0;
    }
}
@keyframes slideout {
    from {
        margin-left: 0;
    }
    to {
        margin-left: -2 * $dash-width;
    }
}
</style>


