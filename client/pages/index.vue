<style>
	@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);
</style>

<template>
	<v-container id="jj">
		<h2>
			<v-icon icon="mdi-vuetify" />
			Launches
		</h2>
		<h5 style="margin-bottom: 1rem;">Nuxt 3 / Vuetify / Graphql / Pinia</h5>

		<v-row no-gutters>
			<v-col lg="5" md="7">
				<v-select
					label="Select" 
					:items="listOfYears" 
					variant="outlined"
					return-object
					v-model="selected"
				></v-select>
			</v-col>
			<v-col>
				<v-btn 
					style="font-size: 1.3rem;" 
					icon
					@click="toggleClick"
					variant="outline"
				>
					<i class="fa fa-sort-asc" v-if="isClicked"></i>
					<i class="fa fa-sort-desc" v-else></i>
				</v-btn>
			</v-col>
		</v-row>
	</v-container>

	<v-container>
		<v-layout class="flex-wrap justify-center">

			<v-flex v-for="item in launches">
				
				<v-card class="mx-5 my-5" max-width="374" min-width="20vw">
					<template #progress>
						<v-progress-linear color="deep-purple" height="10" indeterminate />
					</template>

					<div style="position: relative; text-align: center;">
						<v-img height="250" src="https://i0.wp.com/revolutionized.com/wp-content/uploads/sites/5/2022/05/rocket-launch-at-sunset.jpg?fit=1920%2C1280&amp;ssl=1"/>
						
						<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 1.3rem; font-weight: bold; text-shadow: 1px 1px 5px black;">{{ item.mission_name }}</div>
					</div>

					<v-card-title>
						<i class="fa fa-rocket" style="font-size:25px;"></i> 
						{{ item.rocket.rocket_name }}
					</v-card-title>

					<v-card-text>
						<v-row align="center" class="mx-0">
							<div>
								<i class="fa fa-calendar" style="font-size:20px;"></i> 
								{{ new Date(item.launch_date_utc).toLocaleDateString() }}
							</div>
						</v-row>

						<div class="my-4 text-subtitle-1">{{ item.site_name }}</div>

					</v-card-text>

					<v-divider class="mx-4" />

					<v-card-title>Details</v-card-title>
						<v-card-text>
							<div>
								{{ item.details }}
							</div>
						</v-card-text>

					<v-card-actions>
						<a :href="item.links.wikipedia" target="_blank">
							<v-btn color="deep-purple lighten-2">See More</v-btn>
						</a>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script lang="ts" setup>
	import {ref, computed} from 'vue'

	let selected = ref()
	let isClicked = ref(false)
	let listOfYears = []
	
	const {filters} = filtering(selected)
	const {sorts} = sorting(isClicked)
	const {getSelectedYear} = getSelectedYears()

	function toggleClick() { // toggle click
		isClicked.value = !isClicked.value
   	}

	const query = gql`
		query getLaunches {
			launches {
				mission_name
				launch_date_utc
				launch_site {
					site_name
				}
				rocket {
					rocket_name
				}
				details
				links {
					wikipedia
				}
			}
		}
	`
	const { data } = useAsyncQuery<{
		launches: {
			mission_name: String
			launch_date_utc: Date
			site_name: String
			rocket_name: String
			details: String
			links: String
		}
	}>(query)

	const launches = computed(()=> {
		return data.value?.launches
				.filter((i: any) => filters(i))
				.sort((a:any, b:any) => sorts(a, b))
	})

	getSelectedYear(data, listOfYears)
</script>