<template>
  <div
    v-if="items?.length"
    class="advantages container"
    id="advantages"
  >
    <h2 class="page-title-h2">
      Наши <span>преимущества</span>
    </h2>
    <p class="section-description">
      Мы создали идеальные условия для вашего выбора премиальной парфюмерии
    </p>
    <div class="advantages__list">
      <div
        v-for="item in items"
        :key="item.id"
        class="advantage-item"
      >
        <div class="advantage-item__icon">
          <img :src="item.icon" />
        </div>
        <h4 class="advantage-item__title">
          {{ item.title }}
        </h4>
        <p class="advantage-item__description">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Advantage from '@/types/advantage.js';

interface Props {
  items: Advantage[]
}

withDefaults(defineProps<Props>(), {
  items: () => []
})
</script>

<style lang="scss" src="./styles/index.scss"/>
