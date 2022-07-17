const Disgrow = require("disgrow");
const { botId } = require("../config");

const bot = new Disgrow(botId);
bot.myStats().then((res) => { console.log("myStats", res); });