<script>
import { Line, mixins } from "vue-chartjs";
import { getRandomColor } from "../../src/base";
import { inMemoryBotInfo } from "../base";
import { lineChartColor } from "../../config";

export default {
  extends: Line,
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
        //map all date inside response.stats_daily, and filter empty arrays.
        let dates = response.stats_daily.map((item) => {
          return item.date;
        });

        let filteredDates = dates.filter((item) => {
          return item !== "";
        });

        //membalikan array dari kanan ke kiri.
        let reversedDates = filteredDates.reverse();

        //map all total_server inside response.stats_daily, and filter empty or "0" arrays.
        let total_server = response.stats_daily.map((item) => {
          return item.total_server;
        });

        let filteredTotal_server = total_server.filter((item) => {
          return item !== "0" && item !== "";
        });

        //membalikan array dari kanan ke kiri.
        let reversedTotal_server = filteredTotal_server.reverse();

        this.title = response.data.title;
        this.chartData = {
          labels: reversedDates,
          datasets: [
            {
              label: `${response.data.title}'s total guilds`,
              backgroundColor: lineChartColor ? lineChartColor : getRandomColor(),
              pointBackgroundColor: lineChartColor ? lineChartColor : getRandomColor(),
              borderWidth: 1,
              pointBorderColor: getRandomColor(),
              data: reversedTotal_server,
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
