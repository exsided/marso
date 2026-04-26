<template>
  <div class="contacts-links">
    <a
      class="contacts-link"
      href="tel:+79888750796"
    >
      <phone-svg />
      +7 (988) 875 07 96
    </a>
    <a
      class="contacts-link"
      href="mailto:never-lucky@inbox.ru"
    >
      <email-at-svg />
      never-lucky@inbox.ru
    </a>
  </div>
</template>

<script setup lang="ts">
import PhoneSvg from '@/assets/svg/phone.svg';
import EmailAtSvg from '@/assets/svg/email-at.svg';
</script>

<style lang="scss" src="./styles/ContactsLinks.scss"/>
