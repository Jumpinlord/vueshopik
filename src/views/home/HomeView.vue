<script setup>
import { onMounted, ref } from 'vue';
import { getProducts } from '@/api/products';
import ProductItem from '@/components/product/ProductItem.vue';

const pending = ref(true)
const products = ref([])

const getData = async () => {
  pending.value = true;
  try {
    products.value = await getProducts();
  } catch (e) {
    console.log(e)
  } finally {
    pending.value = false;
  }
}

onMounted(async () => {
  await getData()
});

</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-60 w-full">
    <h1 class="mr-auto text-4xl font-bold mb-3">Home page</h1>
    <ProgressSpinner v-if="pending" />
    <div v-else class="flex justify-center items-start flex-wrap w-full">
      <!-- <router-link to="/product/1">{{ products }}</router-link> -->
       <ProductItem
        v-for="product in products"
        :key="product.id"
        :item="product"
        class="w-full sm:w-1/3 p-4 lg:w-1/4"
       />
    </div>
  </div>
</template>

<style >

</style>
