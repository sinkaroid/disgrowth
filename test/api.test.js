const Disgrow = require("disgrow");
const { bot_id } = require("../src/config");

const bot = new Disgrow(bot_id);
bot.myStats().then((res) => { console.log("myStats", res); });