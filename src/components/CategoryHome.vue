<template>
  <div v-if="categories.length > 0">
    <div class="mt-5 grid grid-cols-4 gap-4 md:gap-4 text-center items-center">
      <div
        v-for="category in categories"
        :key="category.id"
        class="col-span-2 md:col-span-2 lg:col-span-1 bg-white rounded-md shadow-md p-4 text-center text-xs"
      >
        <a href="#">
          <img
            :src="category.image"
            alt="Kategori"
            width="40"
            class="inline-block mb-2"
          />
          {{ category.name.toUpperCase() }}
        </a>
      </div>
      <div
        class="col-span-2 md:col-span-1 lg:col-span-1 bg-white rounded-md shadow-md p-4 text-center text-xs"
      >
        <a href="#">
          <img
            src="../assets/images/menu.png"
            alt="Menu"
            width="40"
            class="inline-block mb-2"
          />
          LAINNYA
        </a>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="mt-5 grid grid-cols-4 gap-4 md:gap-4 text-center items-center">
      <div
        v-for="i in 4"
        :key="i"
        class="sm:col-span-2 md:col-span-2 lg:col-span-2 bg-white rounded-md shadow-md text-center text-xs"
      >
        <ContentLoader />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, onMounted } from "vue";
  import { useCategoryStore } from "../stores/category";
  import { ContentLoader } from "vue-content-loader";

  const categoryStore = useCategoryStore();

  // Jalankan action `getCategoryHome()` dari store `category`
  onMounted(() => {
    categoryStore.getCategoryHome();
  });

  // Get data state `categories` dari store `category`
  const categories = computed(() => categoryStore.categories);
</script>
