<template>
  <section class="container">
    <PageLoader />
    <h1>{{ name }} bot</h1>
    <br />
    <img :src="avatar" alt="avatar" class="avatar" width="200" />
    <br /><br />
    <a :href="topgglink" v-if="topggExternalButton" target="_blank" class="switch">Visit on Top.gg</a>
    <br /><br />
    <table v-if="showPresentData" class="styled-table">
      <thead>
        <tr>
          <th>
            <h3>
              <b>{{ today_ya_sekarang }}</b>
            </h3>
          </th>
          <th>
            <h3><b>Statistics</b></h3>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><h3>Current servers</h3></td>
          <td>
            <h3>
              <number v-if="animatedCounter"
                ref="number1"
                :from="1"
                :to="today"
                :format="theFormat"
                :duration="7"
                :delay="2"
                easing="Power1.easeOut"
              /> 
              <span v-else>{{ today }}</span>
            </h3>
          </td>
        </tr>
        <tr class="active-row">
          <td><h3>New servers</h3></td>
          <td>
            <h3>
              +<number v-if="animatedCounter"
                ref="number1"
                :from="1"
                :to="today_growth"
                :format="theFormat"
                :duration="3"
                :delay="2"
                easing="Power1.easeOut"
              />
              <span v-else>{{ today_growth }}</span>
            </h3>
          </td>
        </tr>

        <tr class="active-row">
          <td><h3>Current votes</h3></td>
          <td>
            <h3>
              <number v-if="animatedCounter"
                ref="number1"
                :from="1"
                :to="total_votes"
                :format="theFormat"
                :duration="10"
                :delay="2"
                easing="Power1.easeOut"
              />
              <span v-else>{{ total_votes }}</span>
            </h3>
          </td>
        </tr>

        <tr class="active-row">
          <td><h3>New votes</h3></td>
          <td>
            <h3>
              +<number v-if="animatedCounter"
                ref="number1"
                :from="1"
                :to="today_votes"
                :format="theFormat"
                :duration="3"
                :delay="2"
                easing="Power1.easeOut"
              />
              <span v-else>{{ today_votes }}</span>
            </h3>
          </td>
        </tr>
      </tbody>
    </table>
    <br />

    <div class="columns">
      <div class="column">
        <h3>🗓️Monthly Growth</h3>
        <h1>
          +
          <number v-if="animatedCounter"
            ref="number1"
            :from="1"
            :to="average_server_growth_monthly"
            :format="theFormat"
            :duration="6"
            :delay="2"
            easing="Power1.easeOut"
          />
          <span v-else>{{ average_server_growth_monthly }}</span>
          Servers
        </h1>
        <h3>Total Increments</h3>
        <line-chart></line-chart>
      </div>
      <div class="column">
        <h3>🕘Daily Growth</h3>
        <h1>
          +
          <number
            ref="number1" v-if="animatedCounter"
            :from="1"
            :to="average_server_growth_daily"
            :format="theFormat"
            :duration="3"
            :delay="1"
            easing="Power1.easeOut"
          />
          <span v-else>{{ average_server_growth_daily }}</span>
          Servers
        </h1>
        <h3>Daily Increments</h3>
        <bar-chart></bar-chart>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h3>⌛Hourly Growth</h3>
        <h1>
          +
          <number v-if="animatedCounter"
            ref="number1"
            :from="1"
            :to="average_server_growth_hourly"
            :format="theFormat"
            :duration="5"
            :delay="2"
            easing="Power1.easeOut"
          />
          <span v-else>{{ average_server_growth_hourly }}</span>
          Servers
        </h1>
        <h3>Hourly Data</h3>
        <LineChartHourly></LineChartHourly>
        <h2>
          Approximate new servers in a day:
          <code>+{{ average_server_growth_daily }}</code>
        </h2>
      </div>
      <div class="column">
        <h3>🎉Votes Growth</h3>
        <h1>
          <number v-if="animatedCounter"
            ref="number1"
            :from="1"
            :to="average_votes_growth_monthly"
            :format="theFormat"
            :duration="10"
            :delay="2"
            easing="Power1.easeOut"
          />
          <span v-else>{{ average_votes_growth_monthly }}</span>
          /
          <number
            ref="number1" v-if="animatedCounter"
            :from="1"
            :to="total_votes"
            :format="theFormat"
            :duration="10"
            :delay="2"
            easing="Power1.easeOut"
          />
          <span v-else>{{ total_votes }}</span>
          votes
        </h1>
        <h3>Daily Increments</h3>
        <LineChartVotes :chart-data="datacollection"></LineChartVotes>
        <h2>
          Approximate
          <a
            href="https://support.top.gg/support/solutions/articles/73000528198-using-your-vote-credit#:~:text=What%20are%20Vote%20Credits%3F,vote%20credit%20as%20a%20reward."
            >Top.gg credits</a
          >: <code>{{ approximate_credits_rewards_monthly }}</code>
        </h2>
      </div>
    </div>
    <div v-if="showPredictsData">
    <h1>According those data, we can predicts</h1>
    <table class="styled-table">
      <thead>
        <tr>
          <th>
            <h3>
              <b>{{ name }} bot</b>
            </h3>
          </th>
          <th>
            <h3><b>Approximate / Can be more and less</b></h3>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><h2>After 3 months</h2></td>
          <td>
            <h2>
              <img :src="avatar" class="small-avatar" /> {{ name }} should
              get<number
                ref="number1"
                :from="1"
                :to="approximate_server_growth_three_months"
                :format="theFormat"
                :duration="5"
                :delay="1"
                easing="Power1.easeOut"
              />
              new servers in the next 3 months
            </h2>
          </td>
        </tr>
        <tr class="active-row">
          <td><h2>After 6 months</h2></td>
          <td>
            <h2>
              <img :src="avatar" class="small-avatar" /> {{ name }} should
              get<number
                ref="number1"
                :from="1"
                :to="approximate_after_6"
                :format="theFormat"
                :duration="5"
                :delay="1"
                easing="Power1.easeOut"
              />
              new servers in the next 6 months
            </h2>
          </td>
        </tr>

        <tr class="active-row">
          <td><h2>After a year</h2></td>
          <td>
            <h2>
              <img :src="avatar" class="small-avatar" /> {{ name }} should
              get<number
                ref="number1"
                :from="1"
                :to="approximate_server_growth_annually"
                :format="theFormat"
                :duration="10"
                :delay="2"
                easing="Power1.easeOut"
              />
              new servers in the next year
            </h2>
          </td>
        </tr>

        <tr class="active-row">
          <td><h2>Total servers (A year later)</h2></td>
          <td>
            <h2>
              <img :src="avatar" class="small-avatar" /> {{ name }} should
              get<number
                ref="number1"
                :from="1"
                :to="estimate_total_server_in_the_next_year"
                :format="theFormat"
                :duration="10"
                :delay="2"
                easing="Power1.easeOut"
              />total servers
            </h2>
          </td>
        </tr>

        <tr class="active-row">
          <td><h2>Total servers (3 years later)</h2></td>
          <td>
            <h2>
              <img :src="avatar" class="small-avatar" /> {{ name }} should
              get<number
                ref="number1"
                :from="1"
                :to="estimate_total_server_in_the_3_years"
                :format="theFormat"
                :duration="10"
                :delay="2"
                easing="Power1.easeOut"
              />total servers
            </h2>
          </td>
        </tr>

        <tr class="active-row">
          <td><h2>Monthly rewards</h2></td>
          <td>
            <h2>
              <img :src="avatar" class="small-avatar" /> {{ name }}'s dev should
              get {{ approximate_credits_rewards_monthly }} on Top.gg credits
            </h2>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    <!-- if predictsTable true, show <div> available </> -->
    
    <br /><br />
  </section>
</template>

<script>
import LineChart from "@/components/LineChart";
import BarChart from "@/components/BarChart";
import LineChartHourly from "@/components/LineChartHourly";
import LineChartVotes from "@/components/LineChartVotes";
import { inMemoryBotInfo } from "../base";
import PageLoader from "@/components/PageLoader";
import { showPredictsData, showPresentData, 
  topggExternalButton, animatedCounter } from "../../config";

export default {
  name: "VueChartJS",
  components: {
    PageLoader,
    LineChart,
    BarChart,
    LineChartHourly,
    LineChartVotes,
  },
  data() {
    return {
      avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
      topgglink: null,
      datacollection: null,
      name: "Loading",
      description: null,
      average_server_growth_monthly: null,
      average_server_growth_daily: null,
      average_server_growth_hourly: null,
      total_votes: null,
      average_votes_growth_monthly: null,
      approximate_server_growth_three_months: null,
      approximate_credits_rewards_monthly: null,
      approximate_server_growth_annually: null,
      today: null,
      today_growth: null,
      today_ya_sekarang: null,
      today_votes: null,
      approximate_after_6: null,
      estimate_total_server_in_the_next_year: null,
      estimate_total_server_in_the_3_years: null,
      estimate_total_server_in_the_5_years: null,
    };
  },
  async created() {
    this.fillData();
    await inMemoryBotInfo().then((response) => {
      this.avatar = response.data.avatar;
      this.name = response.data.title;
      this.total_votes = response.data.total_votes;
      this.description = response.data.description;
      this.average_server_growth_monthly =
        response.average_server_growth_monthly;
      this.average_server_growth_daily = response.average_server_growth_daily;
      this.average_server_growth_hourly = response.average_server_growth_hourly;
      this.average_votes_growth_monthly = response.average_votes_growth_monthly;
      this.approximate_server_growth_three_months =
        response.approximate_server_growth_three_months;
      this.approximate_credits_rewards_monthly =
        response.approximate_credits_rewards_monthly;
      this.approximate_server_growth_annually =
        response.approximate_server_growth_annually;
      this.today = response.stats_daily[0].total_server;
      this.today_growth = response.stats_daily[0].server_growth;
      this.today_ya_sekarang = response.stats_daily[0].date;
      this.topgglink = `https://top.gg/bot/${response.data.id}`;
      this.today_votes = response.stats_daily[0].votes_growth;
      this.approximate_after_6 = response.average_server_growth_monthly * 6;
      this.estimate_total_server_in_the_next_year =
        response.data.server_count +
        response.approximate_server_growth_annually;
      this.showPredictsData = showPredictsData;
      this.showPresentData = showPresentData;
      this.topggExternalButton = topggExternalButton;
      this.animatedCounter = animatedCounter;
      this.estimate_total_server_in_the_3_years = 
        response.approximate_server_growth_annually * 3 + response.data.server_count;

        
    });
  },
  methods: {
    fillData() {
      this.datacollection = null;
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
    theFormat(number) {
      let nf = new Intl.NumberFormat("en-US");
      return nf.format(number.toFixed(0));
    },
    completed() {
      console.log("Animation ends!");
    },
    playAnimation() {
      this.$refs.number2.play();
    },
  },
};
</script>
<style>
@keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
    transform: translatey(-20px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
}

.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-sizing: border-box;
  overflow: hidden;
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
}

.small-avatar {
  vertical-align: middle;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-sizing: border-box;
  overflow: hidden;
  border: 3px solid #22b99b;
}

.styled-table {
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;

  font-size: 0.9em;
  font-family: "Helvetica Neue", Helvetica;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
  background-color: #22b99b;
  color: #ffffff;
  text-align: left;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
}

.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}
</style>
