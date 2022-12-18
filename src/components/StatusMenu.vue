<template>
    <div class="status-menu">
        <Transition name="fade">
            <div class="status-menu__overlay"
                 v-if="submenuShown"
                 @click.stop="submenuShown && hideSubmenus()">
            </div>
        </Transition>
        <div class="status-menu__top">
            <div class="status-menu__top-start">
                <button type="button"
                        class="status-menu__button status-menu__camera">
                    <CameraIcon class="status-menu__icon--symbolic" />
                </button>
                <button type="button"
                        class="status-menu__button status-menu__settings">
                    <SettingsIcon class="status-menu__icon--symbolic" />
                </button>
            </div>
            <div class="status-menu__top-end">
                <button type="button"
                        class="status-menu__button status-menu__lock">
                    <LockIcon class="status-menu__icon--symbolic" />
                </button>
                <button type="button"
                        class="status-menu__button status-menu__power"
                        @click.stop="toggleShowPowerOptions">
                    <PowerIcon class="status-menu__icon--symbolic" />
                </button>
            </div>
        </div>
        <div class="status-menu__volume-container">
            <VolumeIcon class="status-menu__volume-icon" />
            <input class="status-menu__volume-slider"
                   type="range"
                   min="0"
                   max="100"
                   value="100" />
        </div>
        <Transition name="fade">
            <div class="status-menu__submenu" v-if="showPowerOptions">
                <div class="status-menu__submenu-header">
                    <span class="status-menu__submenu-header-icon">
                        <PowerIcon class="status-menu__icon--symbolic" />
                    </span>
                    Power Off
                </div>
                <div class="status-menu__submenu-body">
                    <button type="button" class="status-menu__submenu-button">
                        Suspend
                    </button>
                    <button type="button" class="status-menu__submenu-button">
                        Restart...
                    </button>
                    <button type="button" class="status-menu__submenu-button">
                        Power Off...
                    </button>
                </div>
                <div class="status-menu__submenu-divider"></div>
                <div class="status-menu__submenu-footer">
                    <button type="button" class="status-menu__submenu-button">
                        Log Out...
                    </button>
                </div>
            </div>
        </Transition>
        <div class="status-menu__toggles">
            <button type="button" class="status-menu__network-toggle">
                <NetworkWiredIcon class="status-menu__icon--symbolic status-menu__network-icon" />
                Wired
                <ArrowRightIcon class="status-menu__icon--symbolic status-menu__arrow-icon"
                                @click.stop="toggleShowNetworkOptions" />
            </button>
            <button type="button" class="status-menu__performance-toggle">
                <PowerProfileBalancedIcon class="status-menu__icon--symbolic" />
                Balanced
            </button>
            <Transition name="fade">
                <div class="status-menu__submenu" v-if="showNetworkOptions">
                    <div class="status-menu__submenu-header">
                        <span class="status-menu__submenu-header-icon-toggleable status-menu__submenu-header-icon-toggleable--active">
                            <NetworkWiredIcon class="status-menu__icon--symbolic status-menu__network-icon" />
                        </span>
                        <span class="status-menu__network-options-title">
                            Wired Connections
                        </span>
                    </div>
                    <div class="status-menu__submenu-body">
                        <button type="button" class="status-menu__submenu-button">
                            <NetworkWiredIcon class="status-menu__icon--symbolic status-menu__disconnect-wired-icon" />
                            Disconnect Wired
                        </button>
                    </div>
                    <div class="status-menu__submenu-divider"></div>
                    <div class="status-menu__network-options-footer">
                        <button type="button" class="status-menu__submenu-button">
                            Wired Settings
                        </button>
                    </div>
                </div>
            </Transition>
            <button type="button" class="status-menu__theme-toggle">
                <DarkModeIcon class="status-menu__icon--symbolic" />
                Dark Mode
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
 import { storeToRefs } from 'pinia';
 import { useUserMenuStore } from '@/stores/userMenu';

 import CameraIcon from 'gnomicon/dist/svg/camera-large.svg?component';
 import SettingsIcon from 'gnomicon/dist/svg/settings.svg?component';
 import LockIcon from 'gnomicon/dist/svg/padlock.svg?component';
 import PowerIcon from 'gnomicon/dist/svg/system-shutdown.svg?component';
 import VolumeIcon from 'gnomicon/dist/svg/audio-volume-high.svg?component';
 import ArrowRightIcon from 'gnomicon/dist/svg/right.svg?component';
 import NetworkWiredIcon from 'gnomicon/dist/svg/network-wired.svg?component';
 import DarkModeIcon from 'gnomicon/dist/svg/dark-mode.svg?component';
 import PowerProfileBalancedIcon from 'gnomicon/dist/svg/power-profile-balanced.svg?component';
 import HeadphonesIcon from 'gnomicon/dist/svg/headphones.svg?component';
 import SoundcardIcon from 'gnomicon/dist/svg/soundcard.svg?component';
 import CheckmarkSmallIcon from 'gnomicon/dist/svg/checkmark-small.svg?component';

 const store = useUserMenuStore();
 const {
     showNetworkOptions,
     showPowerOptions,
     submenuShown
 } = storeToRefs(store);
 
const {
     toggleShowNetworkOptions,
     toggleShowPowerOptions,
     hideSubmenus
 } = store;
</script>

<style scoped lang="scss">
 .status-menu {
     background-color: #303030;
     width: 21vw;
     min-width: 360px;
     margin-top: 8px;
     margin-right: 8px;
     border-radius: 32px;
     border: 1px solid #343434;
     padding: 16px;
     box-shadow: 0px 0px 2px 2px #00000033;
     overflow: hidden;

     display: flex;
     flex-flow: column;
     row-gap: 16px;

     &__overlay {
         position: absolute;
         width: 100%;
         height: 100%;
         background-color: #00000077;
         z-index: 1;
         left: 0;
         top: 0;
         margin: 0;
         padding: 0;
     }

     &__top {
         width: 100%;
         display: flex;
         flex-flow: row nowrap;
         justify-content: space-between;
     }

     &__top-start, &__top-end {
         display: flex;
         flex-flow: row nowrap;
         column-gap: 8px;
     }

     &__button {
         background-color: #3a3a3a;
         border-radius: 50%;
         border: none;
         color: #fff;
         padding: 12px 14px;

         &:hover {
             background-color: #4a4a4a;
         }
     }

     &__icon--symbolic {
         transform: scale(1.1);
     }

     &__volume-container {
         color: #fff;
         width: 100%;

         display: flex;
         flex-flow: row nowrap;
         justify-content: space-between;
         align-items: center;
         column-gap: 12px;
     }

     &__volume-slider {
         flex-grow: 1;
         background: none;

         &::-webkit-slider-thumb, &::-moz-range-thumb {
             background-color: #fff;
             border-radius: 50%;
             height: 16px;
             width: 16px;
         }

         &::-webkit-slider-runnable-track, &::-moz-range-track {
             background: #3584e4;
             height: 6px;
             box-shadow: none;
             border-radius: 4px;
         }
     }

     &__submenu {
         background-color: #353535;
         z-index: 2;
         border-radius: 16px;
         color: #fff;
         padding: 24px 16px 8px 16px;
         grid-column: 1 / -1;

         display: flex;
         flex-flow: column;

         &-header {
             font-size: 1.2rem;
             font-weight: 600;

             &-icon, &-icon-toggleable {
                 padding: 8px 12px;
                 background-color: #494949;
                 border-radius: 50%;
             }

             &-icon-toggleable--active {
                 background-color: #3584e4;                     
             }
         }
     }

     &__headphones-icon {
         transform: scale(1.6);
     }

     &__network-options-title {
         margin-left: 8px;
     }

     &__submenu-body {
         margin-top: 24px;
     }

     &__submenu-button {
         background: none;
         border: none;
         width: 100%;
         color: #fff;
         font-size: 1rem;
         text-align: start;
         padding: 8px 24px;
         border-radius: 12px;
         margin: 0px;

         &:hover {
             background-color: #494949;
         }
     }

     &__disconnect-wired-icon {
         margin-right: 4px;
     }

     &__submenu-divider {
         height: 1px;
         width: 100%;
         margin: 4px 0;
         background-color: #494949;
     }

     &__wired-settings-button {
         background: none;
         border: none;
         color: #fff;
         font-size: 1rem;
         text-align: start;
         padding: 12px 24px;
         border-radius: 16px;
         width: 100%;

         &:hover {
             background-color: #494949;

             & * {
                 cursor: pointer;
             }
         }
     }

     &__toggles {
         display: grid;
         grid-template-columns: 1fr 1fr;
         color: #fff;
         column-gap: 16px;
         row-gap: 16px;
     }

     &__network-toggle {
         grid-column: auto;
     }

     &__performance-toggle {
         grid-column: auto;
     }

     &__theme-toggle {
         grid-column: auto;
     }

     &__network-toggle, &__performance-toggle, &__theme-toggle {
         border: none;
         border-radius: 1rem;
         color: #fff;
         fill: #fff;
         font-weight: 600;
         font-size: 1rem;

         display: flex;
         column-gap: 4px;
         align-items: center;
     }

     &__performance-toggle, &__theme-toggle {
         background-color: #3a3a3a;
         padding: 8px 16px;
     }

     &__network-toggle {
         background-color: #3482e1;
         overflow: hidden;
     }

     &__network-toggle &__network-icon {
         margin-left: 12px;
     }

     &__network-toggle &__arrow-icon {
         margin-left: auto;
         background-color: #4990e7;
         height: 100%;
         width: 32px;
         padding-top: 10px;
         padding-left: 6px;
     }
 }

 .fade-enter-active, .fade-leave-active {
     transition: opacity 300ms;
 }

 .fade-enter-from, .fade-leave-to {
     opacity: 0;
 }

 .fade-enter-from {
     transition-delay: 300ms;
 }
</style>
