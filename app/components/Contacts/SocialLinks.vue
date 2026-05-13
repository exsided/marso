<template>
  <div class="social-links">
    <a class="social-link" :href="CONTACTS_TG_LINK" target="_blank">
      <telegram-svg />
    </a>
    <a class="social-link" :href="CONTACTS_VK_LINK" target="_blank">
      <vk-svg />
    </a>
    <a class="social-link" :href="CONTACTS_INSTAGRAM_LINK" target="_blank">
      <instagram-svg />
    </a>
    <a class="social-link" :href="CONTACTS_MAX_LINK" target="_blank">
      <max-svg />
    </a>
  </div>
</template>

<script setup lang="ts">

import { CONTACTS_MAX_LINK, CONTACTS_VK_LINK, CONTACTS_TG_LINK, CONTACTS_INSTAGRAM_LINK } from '@/constats/contacts';
import TelegramSvg from '@/assets/svg/telegram.svg';
import VkSvg from '@/assets/svg/vk.svg';
import MaxSvg from '@/assets/svg/max.svg';
import InstagramSvg from '@/assets/svg/instagram.svg';
</script>

<style lang="scss" src="./styles/SocialLinks.scss"/>
