<template>
  <div class="pb-20 pt-20">
    <div class="container mx-auto grid grid-cols-1 p-3 sm:w-full md:w-5/12">
      <div class="bg-white p-5 rounded-md shadow-md mb-5">
        <div class="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
          <div class="col-span-1 md:col-span-2">
            <img
              :src="user.avatar"
              class="rounded-full"
              width="112px"
              height="112px"
              alt="Avatar"
            />
          </div>
          <div class="col-span-1 md:col-span-6">
            <div class="font-bold text-base">
              {{ user.name }}
            </div>
            <div class="mt-3">
              <a
                href="#"
                class="bg-gray-700 py-1 px-3 rounded shadow-md text-white uppercase"
                >Edit Profile</a
              >
            </div>
          </div>
        </div>
        <div class="border-2 border-gray-200 mt-3 mb-2"></div>

        <a href="#">
          <div
            class="grid grid-cols-5 gap-4 bg-gray-300 p-3 rounded-md shadow-sm mb-3"
          >
            <div class="col-span-5">
              <i class="fa fa-heart" aria-hidden="true"></i> Donasi Saya
            </div>
          </div>
        </a>

        <router-link :to="{ name: 'profile' }">
          <div
            class="grid grid-cols-5 gap-4 bg-gray-300 p-3 rounded-md shadow-sm mb-3"
          >
            <div class="col-span-5">
              <i class="fa fa-user-circle" aria-hidden="true"></i> Profile Saya
            </div>
          </div>
        </router-link>

        <router-link :to="{ name: 'profile.password' }">
          <div
            class="grid grid-cols-5 gap-4 bg-gray-300 p-3 rounded-md shadow-sm mb-3"
          >
            <div class="col-span-5">
              <i class="fa fa-key" aria-hidden="true"></i> Ubah Password
            </div>
          </div>
        </router-link>

        <a @click="logout" style="cursor: pointer"
          ><div
            class="grid grid-cols-5 gap-4 bg-gray-300 p-3 rounded-md shadow-sm mb-3"
          >
            <div class="col-span-5">
              <i class="fa fa-sign-out-alt" aria-hidden="true"></i> Logout
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, onMounted } from "vue";
  import { useAuthStore } from "../../stores/auth";
  import { useRouter } from "vue-router";
  import { useToast } from "vue-toastification";

  const authStore = useAuthStore();
  const router = useRouter();
  const toast = useToast();

  // Mounted
  onMounted(() => {
    // Panggil action `getUser()` dari store auth Pinia
    authStore.getUser();
  });

  // Data user login
  const user = computed(() => authStore.user);

  async function logout() {
    try {
      // Panggil action "logout" di dalam Pinia store
      await authStore.logout();
      // Jika berhasil, diarahkan ke route login
      router.push({
        name: "login",
      });
      toast.success("Logout Berhasil!");
    } catch (error) {
      console.log(error);
      toast.error("Logout Gagal!");
    }
  }
</script>
