<template>
  <section
    v-if="items.length"
    class="product-list container"
  >
    <h2
      v-if="title"
      class="product-list__title page-title-h2"
      v-html="title"
    />

    <div class="product-list__grid">
      <product-card
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :preview="item.preview"
        :code="item.code"
        :description="item.description"
        :accords="item.accords"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProductCard from '@/components/ProductCard/ProductCard.vue';
import type { Product } from '@/types/product';

interface Props {
  title: string;
  items: Product[];
}

withDefaults(defineProps<Props>(), {
  title: '',
  items: () => []
});
</script>

<style src="./styles/index.scss" lang="scss" />
