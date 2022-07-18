// Make sure you have follow the type data it all
// Does not filling the color values will generate random color

module.exports = {
  botId: "724047481561809007", // Your bot's ID
  memCacheExpire: 60, // How long to keep the data in memory cache (in minutes)
  animatedCounter: true, // Whether number data will show as animated counter 
  barChartColor: "", // Color of the bar chart
  lineChartColor: "", // Color of the line chart
  lineChartHourlyColor: "", // Color of the line chart for hourly data
  lineChartVotesColor: "", // Color of the line chart for votes
  showPresentData: true, // Whether to show the present day's data or not
  showPredictsData: true, // Whether to show the predicted data or not
  switchTheme: true, // Switch dark to light themes, and otherwise
  topggExternalButton: true, // Show the external of bot pages
  alertOnFetch: false, // Alert when API is called, then memCache was expired,
};