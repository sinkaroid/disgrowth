 [![Testing](https://github.com/sinkaroid/disgrow-visualization/workflows/Testing/badge.svg)](https://github.com/sinkaroid/disgrow/actions/workflows/disgrow.yml) [![Deps](https://img.shields.io/npm/v/disgrow?label=disgrow&logo=npm&logoColor=white&color=blue)](https://disgrow.js.org)

## The problem
There is a plenty monitoring and observability service for cloud-scale application, such as StatsD, DataDog, Prometheus, and etc. Those services are great for monitoring, but require a lot of effort to posts every parts and setup properly, many people probably still confused how to extends their discord bots with those services. Apart from complexity, the services is running, means It will consume extra Memory than usual, especially DataDog.

## The solution
There is a simple way to monitor your bot's growth. This library allows you to check your bot's growth statistics, no need posts any data, no need to extends or change your bot constructor, out of the box and less of pain.  

## Prerequisites
<table>
	<td><b>NOTE:</b> Your bot must be listed on <a href="https://top.gg">top.gg</a>, because we will take advantage of top.gg to get the increments data, and You must <strong>Posting bot stats</strong> at least once per hour, there is a <code>stats_hourly</code> property in this module, otherwise null as it misleading.</td>
</table>
That's all! All you need just keep posting your bot stats, and you are good to go.

## Getting started
1. Read the prerequisites, make sure your bots is passed the test, and install: `npm install` / `yarn install`

2. Fill the `src/config.json` with your bot's id.

3. Test the unit first by running `npm run test:dry`, You should get an object returns if passed, otherwise does not met the requirements, then run `npm run serve`

### For development and testing
After the testing pass, you can run `npm run serve` to start the development server.  

You can adjust anything with your own stuff apart from the default templates, and run `npm run build`

### For production ready
The final steps is deploying the stuff, after you have tested the unit, You can using this [template](https://github.com/sinkaroid/disgrow-visualization/generate), and fill the `src/config.json` with your bot's id and read the [Vuejs deployment guide](https://cli.vuejs.org/guide/deployment.html)

- [Github pages](https://cli.vuejs.org/guide/deployment.html#github-pages)
- [Netlify](https://cli.vuejs.org/guide/deployment.html#netlify)
- [Vercel](https://cli.vuejs.org/guide/deployment.html#vercel)
- [Firebase](https://cli.vuejs.org/guide/deployment.html#firebase)

## Acknowledgements

I hope you have found this project useful. All the major credit really goes to the [Topgg](https://top.gg/) and [Dblstatistics](https://dblstatistics.com/) for actionable data, [Vuejs](https://vuejs.org) and [Vue-chartjs](https://vue-chartjs.org/) which allow this services to be used.

## Legal
This tool can be freely copied, modified, altered, distributed without any attribution whatsoever. However, if you feel
like this tool deserves an attribution, mention it. It won't hurt anybody