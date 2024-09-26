import { defineStore } from "pinia";
import Api from "../api/Api";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    profile: {},
  }),
  getters: {
    //
  },
  actions: {
    async getProfile() {
      try {
        const token = localStorage.getItem("token");
        Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        const response = await Api.get("/profile");

        this.profile = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },

    async updateProfile(formData) {
      try {
        const token = localStorage.getItem("token");
        Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        const response = await Api.post("/profile", formData);

        this.profile = response.data.data;

        return response;
      } catch (error) {
        throw error.response.data;
      }
    },

    async updatePassword(user) {
      try {
        const token = localStorage.getItem("token");
        Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        const response = await Api.post("/profile/password", {
          password: user.password,
          password_confirmation: user.password_confirmation,
        });

        this.profile = response.data.data;

        return response;
      } catch (error) {
        throw error.response.data;
      }
    },
  },
});
