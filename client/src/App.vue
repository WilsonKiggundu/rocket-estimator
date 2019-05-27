<template>
  <v-app light>
    <!-- TopBar -->
    <v-toolbar flat color="primary" :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" app>
      <v-toolbar-side-icon class="white--text" @click.stop="toggleDrawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline white--text">
        <span>Task Estimator</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2 white--text">Wilson Kiggundu</span>
      </v-btn>
      <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- Navigation drawer -->
    <v-navigation-drawer
      :clipped="drawer.clipped"
      :fixed="drawer.fixed"
      :permanent="drawer.permanent"
      :mini-variant="drawer.mini"
      v-model="drawer.open"
      app
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>people</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>People</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>

        <v-list-tile>
          <v-list-tile-action>
            <v-btn flat>
              <v-icon>view_list</v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Projects</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <TableView/>
    </v-content>
  </v-app>
</template>

<script>
import TableView from "./components/TableView";

export default {
  name: "App",
  components: {
    TableView
  },

  data: () => ({
    drawer: {
      // sets the open status of the drawer
      open: true,
      // sets if the drawer is shown above (false) or below (true) the toolbar
      clipped: true,
      // sets if the drawer is CSS positioned as 'fixed'
      fixed: true,
      // sets if the drawer remains visible all the time (true) or not (false)
      permanent: false,
      // sets the drawer to the mini variant, showing only icons, of itself (true)
      // or showing the full drawer (false)
      mini: true
    },
    toolbar: {
      //
      fixed: true,
      // sets if the toolbar contents is leaving space for drawer (false) or not (true)
      clippedLeft: true
    },
    footer: {
      // sets the CSS position of the footer
      fixed: true,
      // sets if the footer is full width (true) or gives space to the drawer (false)
      clippedLeft: true
    }
  }),

  props: {
    source: String
  },

  methods: {
    // changes the drawer to permanent
    makeDrawerPermanent() {
      this.drawer.permanent = true;
      // set the clipped state of the drawer and toolbar
      this.drawer.clipped = false;
      this.toolbar.clippedLeft = false;
    },
    // toggles the drawer variant (mini/full)
    toggleMiniDrawer() {
      this.drawer.mini = !this.drawer.mini;
    },
    // toggles the drawer type (permanent vs temporary) or shows/hides the drawer
    toggleDrawer() {
      if (this.drawer.permanent) {
        this.drawer.permanent = !this.drawer.permanent;
        // set the clipped state of the drawer and toolbar
        this.drawer.clipped = true;
        this.toolbar.clippedLeft = true;
      } else {
        // normal drawer
        this.drawer.open = !this.drawer.open;
      }
    }
  }
};
</script>
