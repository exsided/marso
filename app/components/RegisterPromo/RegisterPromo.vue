<template>
  <div class="register-promo container">
    <h2 class="page-title-h2">
      Регистрация в <span>MARSO</span>
    </h2>

    <p class="section-description">
      Получите эксклюзивный доступ к премиум коллекции
    </p>

    <div class="register-promo__wrapper">
      <div class="register-promo__register register-promo__block">
        <h4 class="register-promo__block-title">
          Получите <span>скидку -30%</span>, духи в подарок и кешбэк 20%
        </h4>
        <div class="register-promo__timer">
          <p>До конца предложения:</p>
          <timer />
        </div>
        <div class="register-promo__btn">
          <a class="button button--primary">
            Зарегистрироваться
          </a>
        </div>
      </div>
      <div class="register-promo__advantages register-promo__block">
        <h4 class="register-promo__block-title">
          Почему выбирают нас?
        </h4>
        <div
          v-for="advantage in REGISTER_PROMO_ADVANTAGES"
          :key="advantage"
          class="register-promo-advantage"
        >
          <div class="register-promo-advantage__check">
            <check-svg />
          </div>
          {{ advantage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CheckSvg from '@/assets/svg/check.svg'

import {REGISTER_PROMO_ADVANTAGES} from './entities/advantages';
import Timer from '@/components/Timer/Timer.vue';
</script>

<style src="./styles/index.scss" lang="scss" />
