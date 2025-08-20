const fs = require("fs");
const path = __dirname + "/chicken_status.json";

// Ensure the status file exists
if (!fs.existsSync(path)) {
  fs.writeFileSync(path, JSON.stringify({ enabled: true }, null, 2));
}

function getStatus() {
  const data = fs.readFileSync(path);
  return JSON.parse(data).enabled;
}

function setStatus(value) {
  fs.writeFileSync(path, JSON.stringify({ enabled: value }, null, 2));
}

module.exports = {
  config: {
    name: "chicken",
    version: "1.1",
    author: "Santo+ChatGPT",
    countDown: 0,
    role: 0,
    shortDescription: {
      en: "Responds to 🐤 or 🐥"
    },
    longDescription: {
      en: "Replies to chicken emojis. Can be turned on/off"
    },
    category: "fun",
    guide: {
      en: "{pn} [on/off] — to enable or disable auto-reply\nJust sending 🐤 or 🐥 triggers reply when on"
    }
  },

  onStart: async function ({ args, message, event, role }) {
    if (args[0] === "on") {
      setStatus(true);
      return message.reply("✅ Chicken auto-reply is now ON.");
    } else if (args[0] === "off") {
      setStatus(false);
      return message.reply("❌ Chicken auto-reply is now OFF.");
    } else if (args.length > 0) {
      return message.reply("⚙️ Usage: chicken [on/off]");
    }
  },

  onChat: async function ({ message, event }) {
    const content = event.body;

    if (!getStatus()) return;

    if (content && (content.includes("Shanto") || content.includes("Santo"))) {
      return message.reply("𝐀𝐦𝐚𝐫 𝐛𝐨𝐬𝐬 𝐬𝐡𝐚𝐧𝐭𝐨 𝐚𝐤𝐡𝐨𝐧 𝐛𝐮𝐬𝐲 𝐚𝐜𝐡𝐞 𝐣𝐚 𝐛𝐨𝐥𝐚𝐫 𝐚𝐦𝐚𝐤𝐞 𝐛𝐨𝐥𝐨🐤");
    }
  }
};
