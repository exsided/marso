<template>
  <div class="main-page page">
    <hero />
    <register-promo />
    <advantages :items="ADVANTAGES_LIST" />
    <products-list
      id="authors_perfum"
      title="Авторские <span>духи</span>"
      :items="INDEX_AUTHORS_PERFUME_LIST"
    />
    <products-list
      id="mens_perfume"
      title="Мужские <span>духи</span>"
      :items="INDEX_MENS_PERFUME_LIST"
    />
    <products-list
      id="womans_perfume"
      title="<span>Женские</span> духи"
      :items="INDEX_WOMANS_PERFUME_LIST"
    />
    <products-list
      id="auto_perfume"
      title="Автопарфюм"
      :items="INDEX_AUTO_PERFUME_LIST"
    />
    <contacts-section />
    <div></div>
  </div>
</template>

<script setup>
import Hero from '@/components/Hero/Hero.vue';
import Advantages from '@/components/Advantages/Advantages.vue';
import RegisterPromo from '@/components/RegisterPromo/RegisterPromo.vue';
import ProductsList from '@/components/ProductsList/ProductsList.vue';
import ContactsSection from '@/pages/index/components/ContactsSection/ContactsSection.vue';

import {ADVANTAGES_LIST} from '@/pages/index/entities/advantagesList.ts';
import {INDEX_AUTHORS_PERFUME_LIST, INDEX_MENS_PERFUME_LIST, INDEX_WOMANS_PERFUME_LIST, INDEX_AUTO_PERFUME_LIST} from '@/constats/products.ts';
</script>

<style src="./styles/index.scss" lang="scss" />
