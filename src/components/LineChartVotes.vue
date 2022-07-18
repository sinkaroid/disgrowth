<script>
import { Line, mixins } from "vue-chartjs";
import { getRandomColor } from "../../src/base";
import { inMemoryBotInfo } from "../base";
import { lineChartVotesColor } from "../../config";

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
        //map all date inside response.data.stats_daily, and filter empty arrays.
        let dates = response.stats_daily.map((item) => {
          return item.date;
        });

        let filteredDates = dates.filter((item) => {
          return item !== "";
        });

        //membalikan array dari kanan ke kiri.
        let reversedDates = filteredDates.reverse();

        //map all votes_growth inside response.data.stats_daily, and filter empty or "0" arrays.
        let votes_growth = response.stats_daily.map((item) => {
          return item.votes_growth;
        });

        let filteredvotes_growth = votes_growth.filter((item) => {
          return item !== "0" && item !== "";
        });

        //membalikan array dari kanan ke kiri.
        let reversedvotes_growth = filteredvotes_growth.reverse();

        this.title = response.data.title;
        this.chartData = {
          labels: reversedDates,
          datasets: [
            {
              label: `${response.data.title}'s daily votes`,
              backgroundColor: lineChartVotesColor ? lineChartVotesColor : getRandomColor(),
              pointBackgroundColor: lineChartVotesColor ? lineChartVotesColor : getRandomColor(),
              borderWidth: 1,
              pointBorderColor: getRandomColor(),
              data: reversedvotes_growth,
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
