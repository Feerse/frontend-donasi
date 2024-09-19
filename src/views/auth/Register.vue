<template>
  <div class="pb-20 pt-20">
    <div class="container mx-auto grid grid-cols-1 p-5 sm:w-full md:w-5/12">
      <!-- Ketika form di-submit, maka akan memanggil function register -->
      <form @submit.prevent="register">
        <div class="bg-white rounded-md shadow-md p-5">
          <div class="text-xl uppercase">register akun</div>
          <div class="border-2 border-gray-200 mt-3 mb-2"></div>

          <div class="mb-2">
            <label for="name" class="mt-2">Nama Lengkap</label>
            <input
              id="name"
              type="text"
              v-model="user.name"
              class="mt-2 appearance-none w-full bg-gray-200 border border-gray-200 rounded h-7 shadow-sm placeholder-gray-600 focus:outline-none focus:placeholder-gray-600 focus:bg-white focus-within:text-gray-600 p-5"
              placeholder="Nama Lengkap"
            />
          </div>

          <div class="mb-2">
            <label for="email" class="mt-2">Alamat Email</label>
            <input
              id="email"
              type="email"
              v-model="user.email"
              class="mt-2 appearance-none w-full bg-gray-200 border border-gray-200 rounded h-7 shadow-sm placeholder-gray-600 focus:outline-none focus:placeholder-gray-600 focus:bg-white focus-within:text-gray-600 p-5"
              placeholder="Alamat Email"
            />
          </div>

          <div class="mb-2">
            <label for="password" class="mt-2">Password</label>
            <input
              id="password"
              type="password"
              v-model="user.password"
              class="mt-2 appearance-none w-full bg-gray-200 border border-gray-200 rounded h-7 shadow-sm placeholder-gray-600 focus:outline-none focus:placeholder-gray-600 focus:bg-white focus-within:text-gray-600 p-5"
              placeholder="Password"
            />
          </div>

          <div class="mb-2">
            <label for="password_confirmation" class="mt-2"
              >Konfirmasi Password</label
            >
            <input
              id="password_confirmation"
              type="password"
              v-model="user.password_confirmation"
              class="mt-2 appearance-none w-full bg-gray-200 border border-gray-200 rounded h-7 shadow-sm placeholder-gray-600 focus:outline-none focus:placeholder-gray-600 focus:bg-white focus-within:text-gray-600 p-5"
              placeholder="Konfirmasi Password"
            />
          </div>

          <div>
            <button
              class="bg-gray-700 py-1 px-3 text-white rounded-md shadow-md text-xl inline-block w-full focus:outline-none focus:bg-gray-900"
            >
              Daftar
            </button>
          </div>
        </div>
      </form>
      <div class="text-center mt-5">
        <router-link
          :to="{ name: 'login' }"
          class="text-center mt-5 underline text-blue-600"
          >Sudah punya akun?</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive } from "vue";
  import { useAuthStore } from "../../stores/auth";
  import { useRouter } from "vue-router";
  import { useToast } from "vue-toastification";

  const user = reactive({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  // Validation state
  const validation = ref([]);

  // Use auth store pinia
  const authStore = useAuthStore();

  // Route
  const router = useRouter();

  // Interface yang sama dengan `this.$toast`
  const toast = useToast();

  // Fungsi ini di jalankan ketika form di submit
  function register() {
    // Define variable
    let name = user.name;
    let email = user.email;
    let password = user.password;
    let password_confirmation = user.password_confirmation;

    // Panggil actions "register" dari module "auth"
    authStore
      .register({
        name,
        email,
        password,
        password_confirmation,
      })
      // Kondisi jika berhasil register
      .then(() => {
        // Redirect ke dashboard
        router.push({ name: "dashboard" });
        toast.success("Register Berhasil!");
      })
      .catch((error) => {
        // Jika gagal, tampilkan pesan error validasi
        validation.value = error;

        if (validation.value.name) {
          toast.error(`${validation.value.name[0]}`);
        }
        if (validation.value.email) {
          toast.error(`${validation.value.email[0]}`);
        }
        if (validation.value.password) {
          toast.error(`${validation.value.password[0]}`);
        }
      });
  }
</script>
