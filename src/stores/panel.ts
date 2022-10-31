import { defineStore, ref } from 'pinia';
import { ref } from 'vue';

export const usePanelStore = defineStore('main', () => {
    const time = ref('');

    function updateTime() {
        const MONTHS = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];

        const now = new Date();

        const date = now.getDate();
        const dateString = date > 9 ? date.toString() : `0${date}`;
        const monthDate = `${date} ${MONTHS[now.getMonth()]}`;

        const hour = now.getHours();
        const hourString = hour > 9 ? hour.toString() : `0${hour}`;

        const minute = now.getMinutes();
        const minuteString = minute > 9 ? minute.toString() : `0${minute}`;

        time.value = `${monthDate} ${hourString}:${minuteString}`;
    }

    return { time, updateTime }
});
