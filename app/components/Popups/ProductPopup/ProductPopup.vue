<template>
    <div class="product-popup">
      <img
        :src="product.preview"
        :alt="product.title"
        class="product-popup__preview"
      >
      <div class="product-popup__content">
        <h4 class="product-popup__title">
          {{ product.title }}
        </h4>
        <div
          v-if="product.code"
          class="product-popup__code"
        >
          Код: {{ product.code }}
        </div>

<!--        <div class="product-popup__separator" />-->

        <a
          class="product-popup__btn button button--primary"
          :href="CONTACTS_RIGISTER_LINK"
        >
          Зарегистрироваться и купить
        </a>

        <div class="product-popup__separator" />

        <div
          v-if="product.description"
          v-html="product.description"
          class="product-popup__description"
        />

        <template v-if="product.accords && product.accords.length">
          <div class="product-popup__separator" />

          <p class="product-popup__text">
            Аккорды
          </p>

          <div
            v-if="product.accords && product.accords.length"
            class="product-popup__accords"
          >
            <div
              v-for="accord in product.accords"
              :key="accord"
              :style="ACCORDS_VOCABULARY[accord]"
              class="product-popup__accord"
            >
              {{ accord }}
            </div>
          </div>
        </template>
      </div>
    </div>
</template>

<script lang="ts" setup>
import {usePopupsStore} from "@/store/popups";

import { CONTACTS_RIGISTER_LINK } from '@/constats/contacts';
import { ACCORDS_VOCABULARY } from '@/constats/accords';

import type { Product } from '@/types/product'

const emit = defineEmits<{
  close: []
}>();

const popupsStore = usePopupsStore();

const product = computed<Product>(() => popupsStore.data?.product || {});
</script>

<style lang="scss" src="./styles/ProductPopup.scss"/>
