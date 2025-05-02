<script setup>
import { onMounted, ref } from 'vue';
import ProductItem from '@/components/product/ProductItem.vue';

const pending = ref(true)
const products = ref([])

onMounted(() => {
  pending.value = true;

  setTimeout(() => {
    const data = localStorage.getItem('cart')
    products.value.push(JSON.parse(data))
    pending.value = false
  }, 1000)
});

</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-60 w-full">
    <h1 class="mr-auto text-4xl font-bold mb-3">Cart</h1>
    <ProgressSpinner v-if="pending" />
    <div v-else class="flex justify-center items-start flex-wrap w-full">
      <!-- <router-link to="/product/1">{{ products }}</router-link> -->
       <ProductItem
        v-for="product in products"
        :key="product.id"
        :item="product"
        class="w-1/4 p-4"
       />
    </div>
  </div>
</template>
