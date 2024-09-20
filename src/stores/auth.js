import Api from "../api/Api";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    // Menggunakan `localStorage` untuk menyimpan informasi tentang token yang nantinya didapatkan dari Laravel Passport
    token: localStorage.getItem("token") || "",

    // Menggunakan `localStorage` untuk menyimpan data user yang sedang login
    user: JSON.parse(localStorage.getItem("user")) || {},
  }),
  getters: {
    // Getter for current user
    currentUser: (state) => state.user,

    // Check if logged in
    isLoggedIn: (state) => !!state.token, // <-- Jika ada token, maka hasilnya true
  },
  actions: {
    async register(user) {
      try {
        // Send data ke server
        const response = await Api.post("/register", {
          name: user.name,
          email: user.email,
          password: user.password,
          password_confirmation: user.password_confirmation,
        });

        // Ambil token dan user dari response
        const token = response.data.token;
        const userData = response.data.data;

        // Set `localStorage` untuk menyimpan token dan data user
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));

        // Set default header axios dengan token
        Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        // Mutate state token dan user
        this.token = token;
        this.user = userData;

        return response;
      } catch (error) {
        // Jika gagal, hapus token dari `localStorage`
        localStorage.removeItem("token");

        // Lempar error kembali ke komponen
        throw error.response.data;
      }
    },

    async getUser() {
      const token = localStorage.getItem("token");

      // Set authorization header
      Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      try {
        const response = await Api.get("/user");

        // Update user in state
        this.user = response.data;
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    },

    async logout() {
      this.token = "";
      this.user = {};

      // Remove value dari `localStorage` / Set data-nya menjadi 0
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Delete header axios
      delete Api.defaults.headers.common["Authorization"];

      // Resolve dengan async
      return Promise.resolve();
    },
  },
});
