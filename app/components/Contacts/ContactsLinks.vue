<template>
  <div class="contacts-links">
    <a
      class="contacts-link"
      :href="`tel:${CONTACTS_CLEAR_PHONE}`"
    >
      <phone-svg />
      {{ CONTACTS_PHONE }}
    </a>
    <a
      class="contacts-link"
      :href="`mailto:${CONTACTS_EMAIL}`"
    >
      <email-at-svg />
      {{ CONTACTS_EMAIL }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { CONTACTS_EMAIL, CONTACTS_PHONE, CONTACTS_CLEAR_PHONE} from '@/constats/contacts';

import PhoneSvg from '@/assets/svg/phone.svg';
import EmailAtSvg from '@/assets/svg/email-at.svg';
</script>

<style lang="scss" src="./styles/ContactsLinks.scss"/>
