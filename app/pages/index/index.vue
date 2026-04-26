<template>
  <div class="main-page page">
    <hero />
    <register-promo />
    <advantages :items="ADVANTAGES_LIST" />
    <products-list
      id="perfume"
      title="Духи"
      :items="INDEX_PAGE_PRODUCTS"
    />
    <products-list
      id="mens_perfume"
      title="Мужской <span>парфюм</span>"
      :items="INDEX_PAGE_PRODUCTS"
    />
    <products-list
      id="auto_perfume"
      title="<span>Авто</span> парфюм"
      :items="INDEX_PAGE_PRODUCTS"
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
import {INDEX_PAGE_PRODUCTS} from '@/constats/products.ts';
</script>

<style src="./styles/index.scss" lang="scss" />
