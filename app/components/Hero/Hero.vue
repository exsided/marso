<template>
  <div class="hero container container--large">
    <div class="hero__content">
      <label-vue class="hero-label">
        <crown-outlined-svg width="24px" />
        ПРЕМИУМ КОЛЛЕКЦИЯ
      </label-vue>

      <h1 class="page-title-h1 page-title-h1--small-span hero__title">
        Откройте мир
        <br>
        <span>изысканных&nbsp;ароматов</span>
      </h1>

      <div class="hero__advantages">
        <div
          v-for="(advantage, index) in HERO_ADVANTAGES"
          :key="index"
          class="hero-advantage"
        >
          <div class="hero-advantage-title">
            {{ advantage.title }}
          </div>
          <div class="hero-advantage__description">
            {{ advantage.description }}
          </div>
        </div>
      </div>
    </div>

    <div class="hero-promo hero__promo">
      <img
        class="hero-promo__img"
        src="/img/img1.jpg"
      >
      <div class="hero-promo__label">
        Специальное предложение
        <br>
        <span>
          -30%
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CrownOutlinedSvg from '@/assets/svg/crown-circle.svg';
import LabelVue from '@/components/Label/Label.vue';

import { HERO_ADVANTAGES } from './entities/advantages';
</script>

<style src="./styles/index.scss" lang="scss" />
