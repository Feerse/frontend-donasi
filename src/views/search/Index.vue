<template>
	<div class="pb-20 pt-20">
		<div class="container mx-auto grid grid-cols-1 p-3 sm:w-full md:w-5/12">
			<div v-if="campaigns.length > 0">
				<div
					class="mt-5 grid grid-cols-4 gap-4"
					v-for="campaign in campaigns"
					:key="campaign.id"
				>
					<div class="col-span-4">
						<div class="bg-white rounded-md shadow-md p-2">
							<div class="md:flex rounded-xl md:p-0">
								<img
									:src="campaign.image"
									alt="Campaign"
									width="384"
									height="512"
									class="w-full h-34 md:w-56 rounded object-cover"
								/>
								<div
									class="pt-6 p-5 md:p-3 text-center md:text-left space-y-4"
								>
									<router-link
										:to="{
											name: 'campaign.show',
											params: { slug: campaign.slug },
										}"
									>
										<p class="text-sm font-semibold">
											{{ campaign.title }}
										</p>
									</router-link>
									<div class="font-medium">
										<div class="mt-3 text-gray-500 text-xs">
											{{ campaign.user.name }}
										</div>
										<div
											v-if="
												campaign.sum_donation.length > 0
											"
										>
											<div
												v-for="donation in campaign.sum_donation"
												:key="donation"
											>
												<div class="relative pt-1">
													<div
														class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200"
													>
														<div
															:style="{
																width:
																	percentage(
																		donation.total,
																		campaign.target_donation
																	) + '%',
															}"
															class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
														></div>
													</div>
												</div>

												<p
													class="text-xs text-gray-500"
												>
													<span
														class="font-bold text-blue-400"
														>Rp.
														{{
															formatPrice(
																donation.total
															)
														}}
													</span>
													terkumpul dari
													<span class="font-bold"
														>Rp.
														{{
															formatPrice(
																campaign.target_donation
															)
														}}</span
													>
												</p>
											</div>
										</div>
										<div v-else>
											<div class="relative pt-1">
												<div
													class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200"
												>
													<div
														:style="{
															width:
																percentage(
																	0,
																	campaign.target_donation
																) + '%',
														}"
														class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
													></div>
												</div>
											</div>

											<p class="text-xs text-gray-500">
												<span
													class="font-bold text-blue-400"
													>Rp. 0
												</span>
												terkumpul dari
												<span class="font-bold"
													>Rp.
													{{
														formatPrice(
															campaign.target_donation
														)
													}}</span
												>
											</p>
										</div>
										<div class="mt-3 text-xs">
											<strong>{{
												countDay(campaign.max_date)
											}}</strong>
											hari lagi
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div v-else>
				<div class="mb-3 bg-red-500 text-white p-4 rounded-md">
					Data Campaign Tidak Ditemukan!
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { computed } from "vue";
	import { useCampaignStore } from "../../stores/campaign";

	const campaignStore = useCampaignStore();
	const campaigns = computed(() => campaignStore.campaigns);
</script>
