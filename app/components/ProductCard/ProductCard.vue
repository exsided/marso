<template>
  <div class="product-card">
    <img
      :src="preview"
      :alt="title"
      class="product-card__preview"
    >
    <h4 class="product-card__title">
      {{ title }}
    </h4>
    <div
      v-if="code"
      class="product-card__code"
    >
      Код: {{ code }}
    </div>
    <button
      class="product-card__btn button button--primary"
      @click="showMore"
    >
      Подробнее
    </button>
  </div>
</template>

<script setup lang="ts">
import {usePopupsStore} from '@/store/popups';

import { POPUP_NAMES} from '@/constats/popups';

import type { Product } from '@/types/product'

interface Props extends Product {}

const props = withDefaults(defineProps<Props>(), {
  accords: () => [],
  description: () => '',
});

const popupsStore = usePopupsStore();

const showMore = () => {
  popupsStore.setData({ product: props });

  popupsStore.setState(POPUP_NAMES.product, true);
};
</script>

<style src="./styles/index.scss" lang="scss" />
