const Disgrow = require("disgrow");
const c = require("../src/config");

const bot = new Disgrow(c.bot_id);
bot.myStats().then((res) => { console.log("myStats", res); });