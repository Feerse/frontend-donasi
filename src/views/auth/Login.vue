<template>
  <div class="pb-20 pt-20">
    <div class="container mx-auto grid grid-cols-1 p-5 sm:w-full md:w-5/12">
      <form @submit.prevent="login">
        <div class="bg-white rounded-md shadow-md p-5">
          <div class="text-xl">MASUK AKUN</div>
          <div class="border-2 border-gray-200 mt-3 mb-2"></div>

          <div class="mb-5">
            <label class="mt-2">Alamat Email</label>
            <input
              type="email"
              v-model="user.email"
              class="mt-2 appearance-none w-full bg-gray-200 border border-gray-200 rounded h-7 shadow-sm placeholder-gray-600 focus:outline-none focus:placeholder-gray-600 focus:bg-white focus-within:text-gray-600 p-5"
              placeholder="Alamat Email"
            />
          </div>

          <div class="mb-5">
            <label class="mt-2">Password</label>
            <input
              type="password"
              v-model="user.password"
              class="mt-2 appearance-none w-full bg-gray-200 border border-gray-200 rounded h-7 shadow-sm placeholder-gray-600 focus:outline-none focus:placeholder-gray-600 focus:bg-white focus-within:text-gray-600 p-5"
              placeholder="Password"
            />
          </div>

          <div>
            <button
              class="bg-gray-700 py-1 px-3 text-white rounded-md shadow-md text-xl inline-block w-full focus:outline-none focus:bg-gray-900"
            >
              MASUK
            </button>
          </div>
        </div>
      </form>
      <router-link
        :to="{ name: 'register' }"
        class="text-center mt-5 underline text-blue-600"
        >Belum punya akun?</router-link
      >
    </div>
  </div>
</template>

<script setup>
  import { reactive, onMounted } from "vue";
  import { useRouter } from "vue-router";
  import { useToast } from "vue-toastification";
  import { useAuthStore } from "../../stores/auth";

  // User State
  const user = reactive({
    email: "",
    password: "",
  });

  const authStore = useAuthStore();
  const router = useRouter();
  const toast = useToast();

  async function login() {
    try {
      // Define variable
      const email = user.email;
      const password = user.password;

      await authStore.login({ email, password });
      // Redirect ke dashboard
      router.push({ name: "dashboard" });
      toast.success("Login Berhasil!");
    } catch (error) {
      if (error.email) {
        toast.error(`${error.email[0]}`);
      }
      if (error.password) {
        toast.error(`${error.password[0]}`);
      }
      // Show login failed
      if (error.message) {
        toast.error(`${error.message}`);
      }
    }
  }

  onMounted(() => {
    if (authStore.isLoggedIn) {
      router.push({ name: "dashboard" });
    }
  });
</script>
