<template>
<div class="dash" :class="overlayState">
  <TerminalIcon class="app-icon" />
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

import TerminalIcon from '../assets/terminal.svg'

@Component({
    components: {
        TerminalIcon
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
    padding: 0;

    .app-icon {
        transform: scale($dash-width / 4 / $dash-width);
        transform-origin: top left;
        margin: 4px;
        padding: 0;

        &:hover {
            cursor: pointer;
        }
    }
}
.inactive {
    margin-left: -1 * $dash-width;
    animation: 250ms slideout;
}
.active {
    margin-left: 0;
    animation: 250ms slidein;
}
@keyframes slidein {
    from {
        margin-left: -1 * $dash-width;
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
        margin-left: -1 * $dash-width;
    }
}
</style>


