import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useUserMenuStore = defineStore('user-menu', () => {
    const showNetworkOptions = ref(false);
    const showPowerOptions = ref(false);

    const submenuShown = computed(() =>
        showNetworkOptions.value || showPowerOptions.value);

    function toggleShowNetworkOptions() {
        showNetworkOptions.value = !showNetworkOptions.value
        showPowerOptions.value = false;
    }

    function toggleShowPowerOptions() {
        showPowerOptions.value = !showPowerOptions.value;
        showNetworkOptions.value = false;
    }

    function hideSubmenus() {
        showNetworkOptions.value = false;
        showPowerOptions.value = false;
    }

    return {
        showNetworkOptions,
        showPowerOptions,
        submenuShown,
        toggleShowNetworkOptions,
        toggleShowPowerOptions,
        hideSubmenus
    };
});
