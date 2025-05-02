<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getProduct } from '@/api/products';

const route = useRoute()

const pending = ref(true)
const product = ref([])

const addFavorites = (item) => {
  localStorage.setItem('favorites', JSON.stringify(item))
};

const addCart = (item) => {
  localStorage.setItem('cart', JSON.stringify(item))
};

const getData = async () => {
  pending.value = true;
  try {
    product.value = await getProduct(route.params.id);
    console.log(product.value)
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
  <div class="flex flex-col justify-center items-center w-full">
    <h1 class="mr-auto text-4xl font-bold mb-3">
      {{ product.title }}
    </h1>
    <ProgressSpinner v-if="pending" />
    <div v-else class="flex justify-between items-start gap-6">
      <img
        :src="product.image"
        :alt="product.description"
        class="rounded-sm"
      >
      <div class="flex flex-col gap-3">
        <span class="text-2xl">
          {{ product.description }}
        </span>

        <span class="text-2xl flex items-center gap-2">
          <vue-feather type="star" stroke="gold" fill="gold"></vue-feather>
          {{ product.rating.rate }}
        </span>

        <span class="text-2xl">
          ${{ product.price }}
        </span>

        <div class="flex justify-end items-center gap-3">
          <vue-feather
            @click.prevent="addFavorites(product)"
            class="cursor-pointer"
            type="heart"
          />
          <vue-feather
            @click.prevent="addCart(product)"
            class="cursor-pointer"
            type="shopping-cart"
          />

        </div>

      </div>
    </div>
  </div>
</template>

<style >

</style>
