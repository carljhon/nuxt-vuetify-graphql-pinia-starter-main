<template>
  <v-card
    class="mx-auto"
    max-width="1200"
  >
    <v-toolbar color="red-accent-4">
      <v-toolbar-title class="text-h6 text-center">
        My Favorite Rockets
      </v-toolbar-title>
    </v-toolbar>

    <v-list lines="three">

      <v-list-item
        v-for="item in useCounters.listOfFav"
        :key="item.mission_name"
        :title="item.rocket.rocket_name"
        :subtitle=setNewDate(item.launch_date_utc)
        >

        <i style="color: gray;">{{ item.mission_name }} - {{ item.details }}</i>
        
        <template v-slot:prepend>
          <v-avatar color="grey-lighten-1">
            <v-icon color="white">mdi-rocket-launch</v-icon>
          </v-avatar>
        </template>

        <template v-slot:append>
          <v-btn
            color="grey-lighten-1"
            icon="mdi-close-thick"
            variant="text"
            @click=close(item)
          ></v-btn>
        </template>

        <v-divider inset></v-divider>

      </v-list-item>

    </v-list>
  </v-card>
</template>


<script lang="ts" setup>
  import {useCounter} from '@/stores/useCounter'

  const useCounters = useCounter()

  function setNewDate(e: any){
    return new Date(e).toLocaleDateString()
  }

  function close(r: any) {
    useCounters.removeItemValue(r)
  }
</script>