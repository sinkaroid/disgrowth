<template>
  <div id="app">
    <PageLoader />
    <div id="nav">
      <ul>
        <li>
          <router-link to="/">{{ title }}</router-link>
        </li>
        <li><router-link to="/graph">graph</router-link></li>
        <li>
          <a
            href="https://disgrowth.js.org/"
            style="text-decoration: none"
            target="_blank"
            >documentation</a
          >
        </li>
      </ul>
    </div>

    <div id="mybutton">
      <button type="button" @click="darkThemeSwitch" class="switch">
        Switch
      </button>
    </div>
    <router-view />
    <div class="grid-wrapper">
      <Card
        v-for="(card, index) in cards"
        :key="'card' + index"
        :item="card"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import themeChanger from "./switch.js";
import axios from "axios";
import PageLoader from "./components/PageLoader";

export default {
  name: "app",
  data() {
    return {
      themeChanger: null,
      loading: false,
      all_users: null,
      title: null,
      sca: null,
    };
  },
  components: {
    PageLoader,
  },
  async mounted() {
    try {
      let response = await axios.get(
        "https://api.github.com/repos/sinkaroid/disgrowth"
      );
      this.title = response.data.name;
    } catch (err) {
      console.log(err.response.data);
    }
  },
  methods: {
    darkThemeSwitch() {
      this.themeChanger._darkThemeSwitch();
    },
  },
  created() {
    this.themeChanger = new themeChanger();
  },

  /*
  mounted () {
    this.loading = true;
    axios
      .get('https://reqres.in/api/users?page=1')
      .then(response => (this.all_users = response.data.data))
      .catch(error => console.log(error))
      .finally(() => this.loading = false)

      axios({
        method: 'get',
        url: 'https://nekos.life/api/v2/img/pussy',
        timeout: 5000
      })
      .then(response => (this.title = response.data.msg))
      .catch(error => console.log(error))
      .finally(() => this.loading = false)
  },
  */
};
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
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
