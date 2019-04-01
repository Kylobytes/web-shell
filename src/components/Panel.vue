<template>
<div class="panel">
  <div class="activities elem">
    <p>Activities</p>
  </div>
  <div class="time elem">
    <p>Sun 22:00</p>
  </div>
  <div class="user-menu elem">
    <i class="fa fa-wifi"></i>
    <i class="fa fa-volume-up"></i>
    <i class="fa fa-power-off"></i>
    <i class="fa fa-caret-down"></i>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class Panel extends Vue {}
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
        z-index: -1;
    }
    &:before {
        border: 0 solid transparent;
        border-top: 27px solid black;
        border-radius: 100% 0 0 0;
        top: 0;
        left: 0;
        width: 8px;
        height: 8px;
    }
    &:after {
        border: 0 solid transparent;
        border-top: 27px solid black;
        border-radius: 0 100% 0 0;
        top: 0;
        right: 0;
        width: 8px;
        height: 8px;

        @media (max-width: 800px) {
            left: 792px;
        }
    }
    
    .elem:hover {
        color: white;
    }
    
    .activities {
        margin-left: 12px;
    }
    
    .fa {
        margin-right: 12px;
    }
}
h2 {
    margin: 0;
    padding: 0;
}
</style>
