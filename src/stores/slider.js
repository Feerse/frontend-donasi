import { defineStore } from "pinia";
import Api from "../api/Api";

export const useSliderStore = defineStore("slider", {
  state: () => ({
    sliders: [],
  }),
  getters: {
    //
  },
  actions: {
    async getSlider() {
      try {
        const response = await Api.get("/slider");

        this.sliders = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
