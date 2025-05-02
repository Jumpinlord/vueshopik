<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';


</script>

<template>
  <TheHeader />
  <main class="flex justify-center items-start grow container mx-auto py-2 px-4 my-5">
    <RouterView />
  </main>
  <TheFooter />
</template>

