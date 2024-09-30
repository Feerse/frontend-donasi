<template>
  <div v-if="sliders.length > 0">
    <vueper-slides slide-image-inside autoplay>
      <template v-slot:arrow-left>
        <i class="icon icon-arrow-left" />
      </template>
      <vueper-slide
        v-for="(slider, i) in sliders"
        :key="i"
        :image="slider.image"
        :link="slider.link"
      />
      <template v-slot:arrow-right>
        <i class="icon icon-arrow-right" />
      </template>
    </vueper-slides>
  </div>
  <div v-else>
    <ContentLoader />
  </div>
</template>

<script setup>
  import { computed, onMounted } from "vue";
  import { useSliderStore } from "../stores/slider";
  import { ContentLoader } from "vue-content-loader";
  import { VueperSlides, VueperSlide } from "vueperslides";
  import "vueperslides/dist/vueperslides.css";

  const sliderStore = useSliderStore();

  // Jalankan action `getSlider()` dari store `slider`
  onMounted(() => {
    sliderStore.getSlider();
  });

  // Get data state `sliders` dari store `slider`
  const sliders = computed(() => sliderStore.sliders);
</script>

<style scoped>
  .vueperslide__image {
    transform: scale(1.5) rotate(-10deg);
  }

  .vueperslide__title {
    font-size: 7em;
    opacity: 0.7;
  }
</style>
