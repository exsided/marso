<template>
  <div class="app">
    <header-component />
    <nuxt-page class=""/>
    <canvas
      id="gradient-canvas"
      class="gradient-canvas"
    />
    <popup-component />
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/Header/Header.vue';
import PopupComponent from '@/components/Popup/Popup.vue';

import { useMainStore } from '@/store/main';
import { useTimerStore } from '@/store/timer';

const mainStore = useMainStore();
const timerStore = useTimerStore();

const scrollBarWidth = ref(0);

const disableScroll = computed(() => !!mainStore.disableScrollUids.length);

const checkScrollDisable = () => {
  if (process.server)
    return;

  const page = document.querySelector('html');

  if (disableScroll.value) {
    page.style.width = `calc(100% - ${scrollBarWidth.value}px)`;
    page.classList.add('disable-scroll');
  }
  else {
    page.style.width = '';
    page.classList.remove('disable-scroll');
  }
};

const getScrollBarWidth = () => {
  const div = document.createElement('div');

  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';

  document.body.append(div);

  scrollBarWidth.value = div.offsetWidth - div.clientWidth;

  div.remove();
};

watch(disableScroll, () => checkScrollDisable());

onMounted(() => {
  // 30мин * 60с * 1000мс = 1_800_000
  timerStore.startTimer(1_800_000);
  getScrollBarWidth();
  checkScrollDisable();
});

useHead({
  script: [
    {
      src: '/js/gradient.min.js',
      body: true,
    },
  ],
});
</script>

<style lang="scss">
@use '@/assets/styles/app';
</style>
