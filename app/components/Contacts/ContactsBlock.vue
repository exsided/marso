<template>
  <div class="contacts-block">
    <contacts-links />
    <social-links />
  </div>
</template>

<script setup lang="ts">
import ContactsLinks from '@/components/Contacts/ContactsLinks.vue';
import SocialLinks from '@/components/Contacts/SocialLinks.vue';
</script>

<style lang="scss" src="./styles/ContactsBlock.scss"/>
