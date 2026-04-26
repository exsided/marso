<template>
  <header
    class="header"
    :class="{ 'header--menu-is-open': menuIsOpen}"
    id="header"
  >
    <div class="header__wrapper container container--large">
      <nuxt-link
        class="header__logo"
        to="/#header"
      >
        <logo-svg/>
      </nuxt-link>
      <div class="header__links">
        <nuxt-link
          v-for="link in HEADER_LINKS"
          class="header__link"
          :to="link.path"
          :key="link.name"
        >
          {{ link.name }}
        </nuxt-link>
      </div>

      <div
        class="header__burger"
        :class="{'header__burger--active': menuIsOpen}"
        @click="menuIsOpen = !menuIsOpen"
      />
      <transition name="header__menu">
        <div
          v-if="menuIsOpen"
          class="header__menu"
          v-click-outside="closeMenu"
        >
          <nuxt-link
            v-for="link in HEADER_LINKS"
            class="header__link"
            :to="link.path"
            :key="link.name"
            @click="menuIsOpen = false"
          >
            {{ link.name }}
          </nuxt-link>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import LogoSvg from '@/assets/svg/logo.svg';

import {HEADER_LINKS} from './entities/links';

const menuIsOpen = ref(false);

const closeMenu = () => {
  if (menuIsOpen.value)
    menuIsOpen.value = false;
}
</script>

<style lang="scss" src="./styles/index.scss"/>
