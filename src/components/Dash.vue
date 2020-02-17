<template>
<div class="dash" :class="overlayState">
</div>     
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class Dash extends Vue {
@Prop(String)
private readonly overlayState!: string
}
</script>

<style scoped lang="scss">
$dash-width: 32px;
.dash {
    align-self: center;
    background-color: #1B1B1C;
    border-radius: 0 8px 8px 0;
    height: 100px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: $dash-width;
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


