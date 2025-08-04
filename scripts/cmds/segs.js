const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "segs",
    author: "BADHON",
    version: "2.0",
    role: 0,
    prefix: false,
    usage: "just type svd to see masala🥵",
    description: "Premium adult content provider",
    aliases: ["sexvid", "sex", "segsv", "Svd", "svd"]
  },

  onStart: async function({ api, event, args, message }) {
    const cooldownTime = 120000;
    const cooldowns = this.cooldowns || (this.cooldowns = {});
    const now = Date.now();

    if (cooldowns[event.senderID] && now < cooldowns[event.senderID] + cooldownTime) {
      const remainingTime = Math.ceil((cooldowns[event.senderID] + cooldownTime - now) / 1000);
      return message.reply(`🕒 | Please wait ${remainingTime} seconds before using this command again.`);
    }

    cooldowns[event.senderID] = now;

    const videos = [
      "https://files.catbox.moe/e364a5.mp4",
      "https://files.catbox.moe/fywdn5.mp4",
      "https://files.catbox.moe/6zft23.mp4",
      "https://files.catbox.moe/4h8p8w.mp4",
      "https://files.catbox.moe/42f2eb.mp4",
      "https://files.catbox.moe/vzuf5e.mp4",
      "https://files.catbox.moe/1gwfdh.mp4",
      "https://files.catbox.moe/clvyaw.mp4",
      "https://files.catbox.moe/svm13z.mp4",
      "https://files.catbox.moe/tbqr63.mp4",
      "https://files.catbox.moe/b95hy0.mp4",
      "https://files.catbox.moe/ft3x34.mp4",
      "https://files.catbox.moe/3cpc2q.mp4",
      "https://files.catbox.moe/sbuef8.mp4",
      "https://files.catbox.moe/dmacm0.mp4",
      "https://files.catbox.moe/cfvlqh.mp4",
      "https://files.catbox.moe/vp2vw5.mp4",
      "https://files.catbox.moe/vaxzy3.mp4",
    ];

    const hotMessages = [
      "💦 𝗥𝗘𝗔𝗗𝗬 𝗪𝗜𝗧𝗛 𝗧𝗜𝗦𝗦𝗨𝗘? 𝗛𝗘𝗥𝗘'𝗦 𝗬𝗢𝗨𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗖𝗢𝗡𝗧𝗘𝗡𝗧! 🥵",
      "🔥 𝗕𝗔𝗗𝗛𝗢𝗡'𝗦 𝗦𝗣𝗘𝗖𝗜𝗔𝗟 𝗗𝗘𝗟𝗜𝗩𝗘𝗥𝗬 𝗙𝗢𝗥 𝗬𝗢𝗨! 𝗘𝗡𝗝𝗢𝗬 𝗧𝗛𝗜𝗦 𝗛𝗢𝗧 𝗖𝗟𝗜𝗣! 💋",
      "🎬 𝗬𝗢𝗨𝗥 𝗣𝗥𝗜𝗩𝗔𝗧𝗘 𝗦𝗛𝗢𝗪 𝗜𝗦 𝗦𝗧𝗔𝗥𝗧𝗜𝗡𝗚! 𝗚𝗘𝗧 𝗬𝗢𝗨𝗥 𝗧𝗜𝗦𝗦𝗨𝗘𝗦 𝗥𝗘𝗔𝗗𝗬! 😈",
      "🍆 𝗛𝗢𝗧 𝗔𝗡𝗗 𝗦𝗧𝗘𝗔𝗠𝗬 𝗖𝗢𝗡𝗧𝗘𝗡𝗧 𝗜𝗡𝗖𝗢𝗠𝗜𝗡𝗚! 𝗗𝗥𝗘𝗣𝗔𝗥𝗘 𝗧𝗢 𝗚𝗘𝗧 𝗗𝗜𝗥𝗧𝗬! 💦",
      "👅 𝗕𝗔𝗗𝗛𝗢𝗡'𝗦 𝗘𝗫𝗖𝗟𝗨𝗦𝗜𝗩𝗘 𝗦𝗘𝗫 𝗧𝗜𝗗𝗘𝗢 𝗙𝗢𝗥 𝗬𝗢𝗨! 𝗪𝗔𝗧𝗖𝗛 𝗜𝗧 𝗦𝗟𝗢𝗪𝗟𝗬! 😘",
      "💋 𝗬𝗢𝗨𝗥 𝗙𝗔𝗡𝗧𝗔𝗦𝗜𝗘𝗦 𝗔𝗥𝗘 𝗔𝗕𝗢𝗨𝗧 𝗧𝗢 𝗖𝗢𝗠𝗘 𝗧𝗥𝗨𝗘! 𝗘𝗡𝗝𝗢𝗬 𝗧𝗛𝗜𝗦 𝗛𝗢𝗧 𝗖𝗟𝗜𝗣! 🍑",
      "🥵 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗦𝗘𝗫 𝗖𝗢𝗡𝗧𝗘𝗡𝗧 𝗟𝗢𝗔𝗗𝗘𝗗! 𝗚𝗘𝗧 𝗥𝗘𝗔𝗗𝗬 𝗧𝗢 𝗚𝗘𝗧 𝗗𝗜𝗥𝗧𝗬! 💦",
      "👙 𝗛𝗘𝗥𝗘'𝗦 𝗬𝗢𝗨𝗥 𝗗𝗔𝗜𝗟𝗬 𝗗𝗢𝗦𝗘 𝗢𝗙 𝗦𝗘𝗫𝗬 𝗖𝗢𝗡𝗧𝗘𝗡𝗧! 𝗘𝗡𝗝𝗢𝗬! 😻",
      "🍑 𝗕𝗔𝗗𝗛𝗢𝗡'𝗦 𝗣𝗥𝗜𝗩𝗔𝗧𝗘 𝗖𝗢𝗟𝗟𝗘𝗖𝗧𝗜𝗢𝗡! 𝗪𝗔𝗧𝗖𝗛 𝗔𝗡𝗗 𝗝𝗘𝗥𝗞! 💦",
      "😈 𝗬𝗢𝗨 𝗔𝗦𝗞𝗘𝗗 𝗙𝗢𝗥 𝗜𝗧, 𝗛𝗘𝗥𝗘'𝗦 𝗬𝗢𝗨𝗥 𝗦𝗘𝗫 𝗩𝗜𝗗𝗘𝗢! 𝗚𝗘𝗧 𝗪𝗘𝗧! 💋"
    ];

    async function checkUrl(url) {
      try {
        const response = await axios.head(url, { timeout: 5000 });
        return response.status === 200;
      } catch (error) {
        return false;
      }
    }

    async function getWorkingVideo() {
      const shuffled = [...videos].sort(() => 0.5 - Math.random());
      for (const url of shuffled) {
        if (await checkUrl(url)) {
          return url;
        }
      }
      throw new Error("No working video URLs available");
    }

    const loadingMessage = "🔄 𝗛𝗘𝗥𝗘 𝗜𝗦 𝗕𝗔𝗗𝗛𝗢𝗡 𝗕𝗢𝗦𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗖𝗢𝗡𝗧𝗘𝗡𝗧 𝗥𝗘𝗔𝗗𝗬 𝗪𝗜𝗧𝗛 𝗧𝗜𝗦𝗦𝗨𝗘 𝗪𝗔𝗜𝗧 𝗨𝗣 𝗧𝗢 𝟱 𝗠𝗜𝗡𝗨𝗧𝗘 𝗕𝗔𝗗𝗛𝗢𝗡'𝗦 𝗣𝗢𝗢𝗞𝗜𝗘'𝗦 𝗖𝗢𝗡𝗧𝗘𝗡𝗧 𝗜𝗦 𝗟𝗢𝗔𝗗𝗜𝗡𝗚 😗😗🥵👻";

    try {
      api.setMessageReaction("😗", event.messageID, () => {}, true);
      
      const loadingMsg = await message.reply(loadingMessage);
      
      const videoUrl = await getWorkingVideo();
      const randomMessage = hotMessages[Math.floor(Math.random() * hotMessages.length)];

      const response = await axios({
        method: 'get',
        url: videoUrl,
        responseType: 'stream',
        timeout: 10000
      });

      const tempFilePath = path.join(__dirname, `temp_${Date.now()}.mp4`);
      const writer = fs.createWriteStream(tempFilePath);
      
      response.data.pipe(writer);

      await new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });

      await message.unsend(loadingMsg.messageID);
      await message.reply(randomMessage);
      
      const sentMsg = await message.reply({
        body: "💦 𝗘𝗡𝗝𝗢𝗬 𝗧𝗛𝗜𝗦 𝗛𝗢𝗧 𝗖𝗟𝗜𝗣! 𝗗𝗢𝗡'𝗧 𝗙𝗢𝗥𝗚𝗘𝗧 𝗧𝗢 𝗦𝗔𝗬 𝗧𝗛𝗔𝗡𝗞 𝗕𝗔𝗗𝗛𝗢𝗡! 😘",
        attachment: fs.createReadStream(tempFilePath)
      });
      
      api.setMessageReaction("🥵", sentMsg.messageID, () => {}, true);

      fs.unlink(tempFilePath, (err) => {
        if (err) console.error("Error deleting temp file:", err);
      });

    } catch (error) {
      console.error("Error:", error);
      message.reply("😿 Oops! Something went wrong. Please try again later.");
    }const
