import Disgrow from "disgrow";
import { botId, memCacheExpire, alertOnFetch } from "../config";
import lscache from "lscache";

export function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export async function getInfo() {
  const bot = new Disgrow(botId);
  const info = await bot.myStats().catch(err => {
    alert("Error: " + err);
  });
  return info;
}

export const botInfo = async () => {
  const info = await getInfo();
  return info;
};

export const inMemoryBotInfo = async () => {
  if (!lscache.get("bot_data")) {
    switch (alertOnFetch) {
    case true:
      alert("api firing");
      break;

    case false:
      console.log("api firing");
      break;
    }

    const fetchBot = await getInfo();
    lscache.set("bot_data", JSON.stringify(fetchBot), memCacheExpire);
    return fetchBot;
  } else {
    switch (alertOnFetch) {
    case true:
      alert("api does not firing");
      break;

    case false:
      console.log("api does not firing");
      break;
    }
    const fetchBotFromCache = lscache.get("bot_data");
    return JSON.parse(fetchBotFromCache);
  }
  
};