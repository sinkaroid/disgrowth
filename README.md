 [![Testing](https://github.com/sinkaroid/disgrow-visualization/workflows/Test%20unit/badge.svg)](https://github.com/sinkaroid/disgrow/actions/workflows/mocha.yml) [![Deps](https://img.shields.io/npm/v/disgrow?label=disgrow&logo=npm&logoColor=white&color=blue)](https://disgrow.js.org)

## The problem
There is a plenty monitoring and observability service for cloud-scale application, such as StatsD, DataDog, Prometheus, and etc. Those services are great for monitoring, but require a lot of effort to posts every parts and setup properly, many people probably still confused how to extends their discord bots with those services. Apart from complexity, the services is running, means It will consume extra Memory than usual, especially DataDog.

## The solution
There is a simple way to monitor your bot's growth. This [library](https://www.npmjs.com/package/disgrow) allows you to check your bot's growth statistics, no need posts any data, no need to extends or change your bot constructor, out of the box and less of pain.  

For non JavaScript libraries, [there is an API for it](https://github.com/sinkaroid/disgrow/tree/api)!  

## Prerequisites
<table>
	<td><b>NOTE:</b> Your bot must be listed on <a href="https://top.gg">top.gg</a>, because we will take advantage of top.gg to get the increments data, and You must <strong>Posting bot stats</strong> at least once per hour, there is a <code>stats_hourly</code> property in this module, otherwise null as it misleading and the graph will not accurate.</td>
</table>
That's all! All you need just keep posting your bot stats, and you are good to go.

## Getting started
1. Read the prerequisites, make sure your bots is passed the test, and install: `npm install` / `yarn install`

2. Fill the `config` properties with your bot's id and adjust the whole configuration  
```js
{
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
  alertOnFetch: false, // Alert when API is called, then memCache was expired
}
```

3. Test the unit first by running `npm run test:mocha`, You should get passing test like:

```
  Check the prerequisites
    Get the bots increments
      ✔ data should appear in the topgg
      ✔ data should have a key called 'title'
      ✔ data should have a key called 'total_votes'
      ✔ data should have a key called 'server_count'
      ✔ data should have property 'average_server_growth_daily' with value of type number
      ✔ data should have property 'average_server_growth_monthly' with value of type number
      ✔ data should have property 'approximate_credits_rewards_monthly' with value of type string
      ✔ data should have property 'approximate_server_growth_annually' with value of type number


  8 passing (3s)
```
> If there is an error, means does not meet the requirements. Make sure follow the [#prerequisites](#prerequisites).

4. Run `npm run serve` to start the server, for building files run `npm run build`


## For production ready
The final steps is deploying the stuff, after you have test it all, Simply you can using this [template](https://github.com/sinkaroid/disgrow-visualization/generate), and fill the `config.js` with your bot's id and read the [Vuejs deployment guide](https://cli.vuejs.org/guide/deployment.html)

- [Github pages](https://cli.vuejs.org/guide/deployment.html#github-pages)
- [Netlify](https://cli.vuejs.org/guide/deployment.html#netlify)
- [Vercel](https://cli.vuejs.org/guide/deployment.html#vercel)
- [Firebase](https://cli.vuejs.org/guide/deployment.html#firebase)

## Acknowledgements

I hope you have found this project useful. All the major credit really goes to the [Topgg](https://top.gg/) and [Dblstatistics](https://dblstatistics.com/) for actionable data, [Vuejs](https://vuejs.org) and [Chart.js](https://www.chartjs.org/) which allow this services to be used.

## Legal 
This tool can be freely copied, modified, altered, distributed without any attribution whatsoever. However, if you feel
like this tool deserves an attribution, mention it. It won't hurt anybody.