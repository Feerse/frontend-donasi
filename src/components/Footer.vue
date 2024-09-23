<template>
  <div class="bg-white text-center fixed inset-x-0 bottom-0 z-10">
    <div
      class="container mx-auto grid grid-cols-4 gap-4 p-2 sm:w-full md:w-5/12"
    >
      <!-- Beranda -->
      <div>
        <a
          href="#"
          class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center"
        >
          <img
            src="../assets/images/home.png"
            alt="Home"
            class="inline-block mb-1"
            width="25"
            height="25"
          />
          <span class="block text-xs">Beranda</span>
        </a>
      </div>

      <!-- Donasi Saya -->
      <div>
        <router-link
          :to="{ name: 'donation.index' }"
          href="#"
          class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center"
        >
          <img
            src="../assets/images/heart.png"
            alt="Heart"
            class="inline-block mb-1"
            width="25"
            height="25"
          />
          <span class="block text-xs">Donasi Saya</span>
        </router-link>
      </div>

      <!-- Campaign -->
      <div>
        <a
          href="#"
          class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center"
        >
          <img
            src="../assets/images/flag.png"
            alt="Flag"
            class="inline-block mb-1"
            width="25"
            height="25"
          />
          <span class="tab tab-kategori block text-xs">Campaign</span>
        </a>
      </div>

      <!-- Akun -->
      <div>
        <router-link
          :to="{ name: 'login' }"
          class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center"
        >
          <img
            src="../assets/images/user.png"
            alt="User"
            class="inline-block mb-1"
            width="25"
            height="25"
          />
          <span class="block text-xs">Akun</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup></script>
