import { defineStore } from "pinia";
import Api from "../api/Api";

export const useCategoryStore = defineStore("category", {
	state: () => ({
		categories: [],
	}),
	getters: {
		//
	},
	actions: {
		async getCategoryHome() {
			try {
				const response = await Api.get("/categoryHome");
				this.categories = response.data.data;
			} catch (error) {
				console.log(error);
			}
		},

		async getCategory() {
			try {
				const response = await Api.get("/category");

				this.categories = response.data.data.data;
			} catch (error) {
				console.log(error);
			}
		},
	},
});
