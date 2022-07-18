<script>
import { Bar, mixins } from "vue-chartjs";
import { getRandomColor } from "../../src/base";
import { inMemoryBotInfo } from "../base";
import { lineChartHourlyColor } from "../../config";

export default {
  extends: Bar,
  mixins: [mixins.reactiveData],
  data() {
    return {
      chartData: "",
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
  async created() {
    await inMemoryBotInfo()
      .then((response) => {
        //map all date inside response.data.stats_hourly, and filter empty arrays.
        let dates = response.stats_hourly.map((item) => {
          return item.date;
        });

        let filteredDates = dates.filter((item) => {
          return item !== "";
        });

        //membalikan array dari kanan ke kiri.
        let reversedDates = filteredDates.reverse();

        //map all server_growth inside response.data.stats_hourly, and filter empty or "0" arrays.
        let server_growth = response.stats_hourly.map((item) => {
          return item.server_growth;
        });

        let filteredserver_growth = server_growth.filter((item) => {
          return item !== "0" && item !== "";
        });

        //membalikan array dari kanan ke kiri.
        let reversedserver_growth = filteredserver_growth.reverse();

        this.title = response.data.title;
        this.chartData = {
          labels: reversedDates,
          datasets: [
            {
              label: `${response.data.title}'s hourly guilds`,
              backgroundColor: lineChartHourlyColor ? lineChartHourlyColor : getRandomColor(),
              pointBackgroundColor: lineChartHourlyColor ? lineChartHourlyColor : getRandomColor(),
              borderWidth: 1,
              pointBorderColor: getRandomColor(),
              data: reversedserver_growth,
            },
          ],
        };

        this.chartOptions = {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
                gridLines: {
                  display: true,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
          legend: {
            display: true,
          },
          responsive: true,
          maintainAspectRatio: false,
        };
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>
