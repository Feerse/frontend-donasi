import { defineStore } from "pinia";
import Api from "../api/Api";

export const useCampaignStore = defineStore("campaign", {
	state: () => ({
		// Index campaigns
		campaigns: [],

		// Load More
		nextExists: false,
		nextPage: 0,
	}),
	getters: {
		//
	},
	actions: {
		async getCampaign() {
			try {
				const response = await Api.get("/campaign");

				this.campaigns = response.data.data.data;

				// Kondisi apakah halaman saat ini kurang dari halaman terakhir
				if (response.data.data.current_page < response.data.data.last_page) {
					this.nextExists = true;
					this.nextPage = response.data.data.current_page + 1;
				} else {
					this.nextExists = false;
				}
			} catch (error) {
				console.log(error);
			}
		},

		async getLoadMore(nextPage) {
			try {
				// Get data campaign dengan page ke server
				const response = await Api.get(`/campaign?page=${nextPage}`);

				// Push data dari REST API ke dalam state `campaigns`
				response.data.data.data.forEach((row) => {
					this.campaigns.push(row);
				});

				if (response.data.data.current_page < response.data.data.last_page) {
					this.nextExists = true;
					this.nextPage = response.data.data.current_page + 1;
				} else {
					this.nextExists = false;
				}
			} catch (error) {
				console.log(error);
			}
		},
	},
});
