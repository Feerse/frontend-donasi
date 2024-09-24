<template>
  <div class="pb-20 pt-20">
    <div class="container mx-auto grid grid-cols-1 p-3 sm:w-full md:w-5/12">
      <form method="POST" enctype="multipart/form-data">
        <div class="bg-white p-5 rounded-md shadow-md mb-5">
          <div class="flex flex-col justify-center items-center relative">
            <div>
              <img
                :src="profile.avatar"
                alt="Avatar"
                class="rounded-full w-28 h-28 object-cover"
              />
            </div>
            <div class="mt-4">
              <input
                type="file"
                class="rounded bg-gray-300 p-2 w-full shadow-sm"
              />
            </div>
          </div>
        </div>

        <div class="bg-white p-3 rounded-md shadow-sm">
          <div class="grid grid-cols-1 gap-4">
            <div class="mb-2">
              <label for="name" class="mt-2">Nama Lengkap</label>
              <input
                id="name"
                type="text"
                class="mt-2 appearance-none w-full bg-gray-200 rounded h-7 shadow-sm placeholder-gray-700 focus:outline-none focus:placeholder-gray-600 focus:bg-gray-300 focus-within:text-gray-600 p-5"
                placeholder="Nama Lengkap"
                v-model="profile.name"
              />
            </div>

            <div class="mb-2">
              <label for="email" class="mt-2">Email</label>
              <input
                id="email"
                type="text"
                class="mt-2 appearance-none w-full bg-gray-200 opacity-70 rounded h-7 shadow-sm placeholder-gray-700 focus:outline-none focus:placeholder-gray-600 focus:bg-gray-300 focus-within:text-gray-600 p-5"
                placeholder="Email"
                v-model="profile.email"
                disabled
              />
            </div>

            <div>
              <button
                type="submit"
                class="mt-3 bg-gray-700 text-white p-2 w-full rounded-md shadow-md focus:outline-none"
              >
                UPDATE PROFILE
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
  import { computed, onMounted } from "vue";
  import { useProfileStore } from "../../stores/profile";

  const profileStore = useProfileStore();

  onMounted(() => {
    profileStore.getProfile();
  });

  const profile = computed(() => profileStore.profile);
</script>
