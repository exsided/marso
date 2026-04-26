<template>
  <div class="contacts-page page container container--large">
    <h1 class="contacts-page__title page-title-h1">
      Контакты
    </h1>
    <contacts-block />
  </div>
</template>

<script setup lang="ts">
import ContactsBlock from '@/components/Contacts/ContactsBlock.vue';
</script>

<style src="./styles/index.scss" lang="scss" />
