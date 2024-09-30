<template>
  <div class="pb-20 pt-20">
    <div class="container mx-auto grid grid-cols-1 p-3 sm:w-full md:w-5/12">
      <!-- Slider -->
      <div class="grid grid-cols-1 bg-white rounded shadow-md p-1 text-sm">
        <Slider />
      </div>

      <!-- CategoryHome -->
      <CategoryHome />

      <!-- Campaign -->
    </div>
  </div>
</template>

<script setup>
  import Slider from "../../components/Slider.vue";
  import CategoryHome from "../../components/CategoryHome.vue";
</script>
