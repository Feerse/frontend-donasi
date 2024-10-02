<template>
	<div class="pb-20 pt-20">
		<div class="container mx-auto grid grid-cols-1 p-5 sm:w-full md:w-5/12">
			<div v-if="categories.length > 0">
				<div class="grid grid-cols-4 gap-4 md:gap-4 text-center items-center">
					<div
						v-for="category in categories"
						:key="category.id"
						class="col-span-2 md:col-span-2 lg:col-span-2 bg-white rounded-md shadow-md p-4 text-center text-xs"
					>
						<router-link
							:to="{
								name: 'category.show',
								params: { slug: category.slug },
							}"
						>
							<img
								:src="category.image"
								alt="Category"
								width="40"
								class="inline-block mb-2"
							/>
							{{ category.name.toUpperCase() }}
						</router-link>
					</div>
				</div>
			</div>
			<div v-else>
				<div
					class="mt-5 grid grid-cols-4 gap-4 md:gap-4 text-center items-center"
				>
					<div
						v-for="index in 4"
						:key="index"
						class="sm:col-span-2 md:col-span-1 lg:col-span-1 bg-white rounded-md shadow-md text-center text-xs"
					>
						<ContentLoader />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { onMounted, computed } from "vue";
	import { useCategoryStore } from "../../stores/category";
	import { ContentLoader } from "vue-content-loader";

	const categoryStore = useCategoryStore();

	onMounted(() => {
		categoryStore.getCategory();
	});

	// Get data state `categories` dari store `category`
	const categories = computed(() => categoryStore.categories);
</script>
