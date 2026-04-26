import {defineStore} from 'pinia';

export const useTimerStore = defineStore('timer', () => {
  const timerMs = ref<number>(0);

  const startTimer = (timerMsNewVal: 0) => {
    timerMs.value = timerMsNewVal;
    setInterval(() => timerMs.value -= 1000, 1000);
  }

  const timerFormattedTime = computed(() => {
    const totalSeconds = Math.floor(timerMs.value / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  });

  return {
    timerMs,
    startTimer,
    timerFormattedTime
  };
});
