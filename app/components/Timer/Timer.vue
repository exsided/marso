<template>
  <div class="timer">
    {{ timerStore.timerFormattedTime }}
  </div>
</template>

<script setup lang="ts">
import { useTimerStore } from '@/store/timer';

const timerStore = useTimerStore();
</script>

<style src="./styles/index.scss" lang="scss" />
