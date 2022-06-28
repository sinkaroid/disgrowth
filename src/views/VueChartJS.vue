<template>
  <section class="container">
    <h1>{{ name }} bot</h1>
    <br />
    <img :src="avatar" alt="avatar" class="avatar" width="200" />
    <br /><br />
    <a :href="topgglink" target="_blank" class="switch">Visit on Top.gg</a>
    <h2>{{ today_ya_sekarang }}</h2>
    <h1>
      <code>
        <number
          ref="number1"
          :from="1"
          :to="today"
          :format="theFormat"
          :duration="10"
          :delay="2"
          easing="Power1.easeOut"
        />
        (+<number
          ref="number1"
          :from="1"
          :to="today_growth"
          :format="theFormat"
          :duration="3"
          :delay="2"
          easing="Power1.easeOut"
        />
        new servers)
      </code>
    </h1>
    <br />

    <div class="columns">
      <div class="column">
        <h3>🗓️Monthly Growth</h3>
        <h1>
          +
          <number
            ref="number1"
            :from="1"
            :to="average_server_growth_monthly"
            :format="theFormat"
            :duration="6"
            :delay="2"
            easing="Power1.easeOut"
          />
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
            ref="number1"
            :from="1"
            :to="average_server_growth_daily"
            :format="theFormat"
            :duration="3"
            :delay="1"
            easing="Power1.easeOut"
          />
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
          <number
            ref="number1"
            :from="1"
            :to="average_server_growth_hourly"
            :format="theFormat"
            :duration="5"
            :delay="2"
            easing="Power1.easeOut"
          />
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
          <number
            ref="number1"
            :from="1"
            :to="total_votes"
            :format="theFormat"
            :duration="10"
            :delay="2"
            easing="Power1.easeOut"
          />
          votes /
          <number
            ref="number1"
            :from="1"
            :to="average_votes_growth_monthly"
            :format="theFormat"
            :duration="10"
            :delay="2"
            easing="Power1.easeOut"
          />
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
    <h3>
      According this statistics it can be concluded, {{ name }} will get
      <font color="red"
        ><b>+{{ approximate_server_growth_three_months }}</b></font
      >
      server growth in the next 3 months
    </h3>
    <h2>
      Then will get
      <font color="red"
        ><b>+{{ approximate_server_growth_annually }}</b></font
      >
      server growth in the next year
    </h2>
    <iframe
      src="https://github.com/sponsors/sinkaroid/button"
      title="Sponsor sinkaroid"
      height="35"
      width="116"
      style="border: 0"
    ></iframe>
    <br /><br />
  </section>
</template>

<script>
import LineChart from "@/components/LineChart";
import BarChart from "@/components/BarChart";
import LineChartHourly from "@/components/LineChartHourly";
import LineChartVotes from "@/components/LineChartVotes";
import { getInfo } from "../base";

export default {
  name: "VueChartJS",
  components: {
    LineChart,
    BarChart,
    LineChartHourly,
    LineChartVotes,
  },
  data() {
    return {
      avatar: null,
      topgglink: null,
      datacollection: null,
      name: null,
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
    };
  },
  async created() {
    this.fillData();
    await getInfo().then((response) => {
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
      return number.toFixed();
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
</style>
