<template>
  <div class="h-screen">
    <!-- Header -->
    <Header />

    <!-- Content -->
    <router-view></router-view>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
</script>
