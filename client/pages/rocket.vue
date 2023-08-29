<style>
	@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);
</style>

<template>
	<v-container id="jj">
		<h2>
			<v-icon icon="mdi-vuetify" />
			Rockets
		</h2>
		<h5 style="margin-bottom: 1rem;">Nuxt 3 / Vuetify / Graphql / Pinia</h5>
	</v-container>

	<v-container>
		<v-layout class="flex-wrap justify-center">

			<v-flex v-for="rocket in rockets">
                <v-card class="mx-5 my-5" max-width="374" min-width="20vw">
                    <v-img
                    height="200"
                    src="https://www.callcentrehelper.com/images/stories/2019/01/night-sky-rock-vector-760.jpg"
                    cover
                    class="text-white"
                    >
                    <v-toolbar
                        color="rgba(0, 0, 0, 0)"
                        theme="dark"
                    >

                        <v-toolbar-title class="text-h6">
                            {{ rocket.name }}
                        </v-toolbar-title>

                    </v-toolbar>
                    </v-img>

                    <v-card-text>
                    <div class="font-weight-bold ms-1 mb-2">
                        Details
                    </div>

                    <v-timeline density="compact" align="start">
                        <v-timeline-item
                        :dot-color="green"
                        size="x-small"
                        >
                        <div class="mb-4">
                            <div class="font-weight-normal">
                            <strong><i class="fa fa-calendar"></i></strong> Date: {{ rocket.first_flight }}
                            </div>
                            <div>{{ rocket.description }}</div>
                        </div>
                        </v-timeline-item>
                        <v-timeline-item
                        :dot-color="green"
                        size="x-small"
                        >
                        <div class="mb-4">
                            <div class="font-weight-normal">
                            <strong><i class="fa fa-arrows-v"></i></strong> Height: {{ rocket.height.meters }}
                            </div>
                        </div>
                        </v-timeline-item>

                        <v-timeline-item
                        :dot-color="green"
                        size="x-small"
                        >
                        <div class="mb-4">
                            <div class="font-weight-normal">
                            <strong><i class="fa fa-dot-circle-o"></i></strong> Diameter: {{ rocket.diameter.meters }}
                            </div>
                        </div>
                        </v-timeline-item>

                        <v-timeline-item
                        :dot-color="green"
                        size="x-small"
                        >
                            <div class="mb-4">
                                <div class="font-weight-normal">
                                <strong><i class="fa fa-cubes"></i></strong> Mass: {{ rocket.mass.lb }}
                                </div>
                            </div>
                        </v-timeline-item>

                        <v-timeline-item
                        :dot-color="green"
                        size="x-small"
                        >
                        <div class="mb-4">
                            <div class="font-weight-normal">
                            <strong><i class="fa fa-line-chart"></i></strong> Stages: {{ rocket.stages }}
                            </div>
                        </div>
                        </v-timeline-item>
                        
                    </v-timeline>
                    </v-card-text>
                </v-card>
            </v-flex>
		</v-layout>
	</v-container>
</template>

<script lang="ts" setup>
    import {ref} from 'vue'
	
	const query = gql`
        query Rockets {
            rockets {
                name
                description
                first_flight
                height {
                    meters
                }
                diameter {
                    meters
                }
                mass {
                    lb
                }
                stages
            }
    }
	`
	const { data } = useAsyncQuery<{
		rockets: {
			name: String
            description: String
            first_flight: Date
            meters: Number
            lb: Number
            stages: Number
		}
	}>(query)

	const rockets = computed(()=> {
		return data.value?.rockets ?? []
	})

</script>