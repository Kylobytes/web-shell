<template>
<div class="panel">
  <div class="activities">
    <p>Activities</p>
  </div>
  <div class="time">
    <p>Sun 22:00</p>
  </div>
  <div class="user-menu">
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
    background-color: #000000;
    font-weight: 700;
    color: #cccccc;
    height: 27px;
    min-width: 720px;
    width: 100vw;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

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
