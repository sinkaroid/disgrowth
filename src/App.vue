<template>
  <div id="app">
    <div id="nav">
      <ul>
        <li>
          <router-link to="/">{{ title }}</router-link>
        </li>
        <li><router-link to="/graph">graph</router-link></li>
        <li>
          <a
            href="https://disgrow.js.org/"
            style="text-decoration: none"
            target="_blank"
            >documentation</a
          >
        </li>
      </ul>
    </div>

    <div v-if="switchTheme" id="mybutton">
      <button type="button" @click="darkThemeSwitch" class="switch">
        Switch
      </button>
    </div>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import themeChanger from "./switch.js";
import Footer from "./components/Footer";
import { switchTheme } from "../config";

export default {
  name: "app",
  data() {
    return {
      switchTheme: switchTheme,
      themeChanger: null,
      loading: false,
      all_users: null,
      title: "Bot growth monitoring",
      sca: null,
    };
  },
  components: {
    //PageLoader,
    Footer,
  },
  methods: {
    darkThemeSwitch() {
      this.themeChanger._darkThemeSwitch();
    },
  },
  created() {
    this.themeChanger = new themeChanger();
  },
};
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  height: 90px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: underline;
}

#nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: none;
}

#nav ul {
  list-style-type: none;
  padding: 0;
}

#nav ul li {
  display: inline-block;
  margin: 0 10px;
}

h1 {
  font-size: 1.75em;
}

h2 {
  line-height: 2.5em;
  font-size: 1.25em;
}

.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}

#btndisclaimer {
  position: fixed;
  right: 0;
  bottom: 0;
}

.switch {
  background-color: #31b0d5;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  padding: 6px 10px;
  border-color: #46b8da;
}

#mybutton {
  position: fixed;
  bottom: 20px;
  right: 10px;
}
</style>
