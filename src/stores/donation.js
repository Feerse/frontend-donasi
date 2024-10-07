import { defineStore } from "pinia";
import Api from "../api/Api";

export const useDonationStore = defineStore("donation", {
	state: () => ({
		// Donations
		donations: [],

		// Load More
		nextExist: false,
		nextPage: 0,
	}),
	getters: {
		//
	},
	actions: {
		async getDonation() {
			try {
				// Ambil data token dan user
				const token = localStorage.getItem("token");

				// Set axios header dengan type Authorization + Bearer token
				Api.defaults.headers.common[
					"Authorization"
				] = `Bearer ${token}`;

				const response = await Api.get("/donation");

				this.donations = response.data.data.data;

				if (
					response.data.data.current_page <
					response.data.data.last_page
				) {
					this.nextExist = true;
					this.nextPage = response.data.data.current_page + 1;
				} else {
					this.nextExist = false;
				}
			} catch (error) {
				console.log(error);
			}
		},

		async getLoadMore(nextPage) {
			try {
				// Ambil data token dan user
				const token = localStorage.getItem("token");

				// Set axios header dengan type Authorization + Bearer token
				Api.defaults.headers.common[
					"Authorization"
				] = `Bearer ${token}`;

				// Get data donations dengan parameter page ke server
				const response = await Api.get(`/donation?page=${nextPage}`);

				response.data.data.data.forEach((row) => {
					this.donations.push(row);
				});
				console.log(response.data.data.data);

				if (
					response.data.data.current_page <
					response.data.data.last_page
				) {
					this.nextExist = true;
					this.nextPage = response.data.data.current_page + 1;
				} else {
					this.nextExist = false;
				}
			} catch (error) {
				console.log(error);
			}
		},

		async storeDonation(data) {
			try {
				const token = localStorage.getItem("token");
				Api.defaults.headers.common[
					"Authorization"
				] = `Bearer ${token}`;

				const response = await Api.post("/donation", data);

				return response;
			} catch (error) {
				throw error.response.data;
			}
		},
	},
});
