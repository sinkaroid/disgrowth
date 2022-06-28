const Disgrowth = require('disgrowth');
const c = require('../src/config');

const bot = new Disgrowth(c.bot_id);
bot.myStats().then((res) => { console.log("myStats", res); });