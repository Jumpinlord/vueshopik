<script setup>
defineProps({
  item: {
    type: Object,
    default: null
  },
});

const addFavorites = (item) => {
  localStorage.setItem('favorites', JSON.stringify(item))
};

const addCart = (item) => {
  localStorage.setItem('cart', JSON.stringify(item))
};
</script>

<template>
  <router-link :to="`product/${item.id}`" class="flex flex-col gap-3 overflow-hidden shadow-md">
    <img
      :src="item.image"
      :alt="item.description"
      class="w-full h-80 object-cover mx-auto rounded-sm"
    >
    <span class="font-semibold text-xl truncate">
      {{ item.title }}
    </span>

    <span class="font-semibold text-xl">
      ${{ item.price }}
    </span>

    <div class="flex justify-end items-center gap-3">
      <vue-feather
        @click.prevent="addFavorites(item)"
        class="cursor-pointer"
        type="heart"
      />

      <vue-feather
        @click.prevent="addCart(item)"
        class="cursor-pointer"
        type="shopping-cart"
      />

    </div>
  </router-link>
</template>

