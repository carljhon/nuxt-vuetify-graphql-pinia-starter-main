<template>
    <v-card
      class="mx-auto"
      max-width="1500"
    >
      <v-toolbar color="secondary">
        <v-btn variant="text" icon="mdi-menu"></v-btn>
  
        <v-toolbar-title>My files</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn variant="text" icon="mdi-magnify"></v-btn>
  
        <v-btn variant="text" icon="mdi-view-module"></v-btn>
      </v-toolbar>
  
      <v-list lines="three">
        <v-list-subheader inset>Rockets</v-list-subheader>
  
        <v-list-item
          v-for="folder in folders"
          :key="folder.title"
          :title="folder.title"
          :subtitle="folder.subtitle"
          >
          
          <template v-slot:subtitle="{ subtitle }">
            <div v-html="subtitle"></div>
        </template>

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
            ></v-btn>
          </template>

          <v-divider inset></v-divider>

        </v-list-item>

      </v-list>
    </v-card>
  </template>

<script>
  export default {
    data: () => ({
      folders: [
        {
          subtitle: `
            <span class="text-primary">Trailblazer</span>
            &mdash; Residual stage 1 thrust led to collision between stage 1 and stage 2`,
          title: 'Falcon 1',
        },
        {
          subtitle: 'Jan 17, 2014',
          title: 'Falcon 2',
        },
        {
          subtitle: 'Jan 28, 2014',
          title: 'Volt 5',
        },
      ],
    }),
  }
</script>