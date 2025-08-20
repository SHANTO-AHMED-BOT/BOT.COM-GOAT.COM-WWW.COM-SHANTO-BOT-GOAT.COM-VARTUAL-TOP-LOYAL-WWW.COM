const axios = require("axios");

module.exports = {
  config: {
    name: "shanto",
    version: "1.0",
    author: "💋𝗔𝗛𝗠𝗘𝗗 × 𝗦𝗛𝗔𝗡𝗧𝗢💀",
    countDown: 5,
    role: 0,
    shortDescription: "sarcasm",
    longDescription: "sarcasm",
    category: "reply",
  },
  onStart: async function () {},

  onChat: async function ({ event, message }) {
    const input = event.body?.toLowerCase();
    const triggers = ["shanto info", "bot tmr boss ke", "tmr boss ke", "shanto ke", "tomar boss ke"];

    const replies = [
`𝐌𝐘 𝐎𝐖𝐍𝐄𝐑: 𝐒𝐇𝐀𝐍𝐓𝐎
╔                            ╗  
《 ⚙️ 𝐀𝐃𝐌𝐈𝐍 𝐈𝐍𝐅𝐎 》
╚                            ╝
╔═ ══════════════ ═╗
     🛡️ 𝐁𝐎𝐓 𝐂𝐎𝐍𝐓𝐑𝐎𝐋 🛡️ 
  𝐎𝐏𝐄𝐑𝐀𝐓𝐎𝐑: 𝐒𝐇𝐀𝐍𝐓𝐎 
╚═ ══════════════ ═╝

═《 💬 𝐁𝐎𝐓 𝐈𝐍𝐓𝐑𝐎 💬 》═

✨𝗜 𝗔𝗠 𝗬𝗢𝗨𝗥 𝗙𝗔𝗩𝗢𝗨𝗥𝗜𝗧𝗘 𝗠𝗘𝗦𝗦𝗘𝗡𝗚𝗘𝗥 𝗖𝗛𝗔𝗧𝗕𝗢𝗧✨  

💙𝗠𝗬 𝗡𝗔𝗠𝗘 𝗜𝗦💙
— ღ´🦋𝗔𝗟𝗜𝗦𝗛𝗔 𝗕𝗕𝗭🍒🥂

👑 𝐌𝐘 𝐎𝐖𝐍𝐄𝐑: 𝐒𝐇𝐀𝐍𝐓𝐎
📡 𝐎𝐧𝐥𝐢𝐧𝐞: ✅  𝐎𝐍𝐋𝐈𝐍𝐄
📛 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞: ღ´🦋𝗔𝗟𝗜𝗦𝗛𝗔 𝗕𝗕𝗭🍒🥂
🔖 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: 1.0.0  
➤ 𝐏𝐫𝐞𝐟𝐢𝐱: [ - ]  

📘 COMMANDS:  200
🔐 ADMINS ONLINE: ∞ 
🌍 USERS: ∞

👑 𝐀𝐝𝐦𝐢𝐧 𝐍𝐚𝐦𝐞: 𝐒𝐇𝐀𝐍𝐓𝐎
🕌 𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍: 𝐌𝐔𝐒𝐋𝐈𝐌
🎓 𝐒𝐓𝐔𝐃𝐘: 𝐈𝐧𝐭𝐞𝐫 𝟐𝐧𝐝
🇧🇩 𝐍𝐀𝐓𝐈𝐎𝐍𝐀𝐋𝐈𝐓𝐘: 𝐁𝐀𝐍𝐆𝐋𝐀𝐃𝐄𝐒𝐇𝐈
🏠 𝐀𝐃𝐃𝐑𝐄𝐒𝐒: 𝐁𝐇𝐎𝐋𝐀, 𝐂𝐇𝐀𝐑𝐅𝐀𝐒𝐎𝐍

📎 𝐒𝐎𝐂𝐈𝐀𝐋𝐒 & 𝐂𝐎𝐍𝐓𝐀𝐂𝐓𝐒:
📸 IG: 𝐒𝐂𝐘𝐋4_𝐒𝐌0𝐊3
📘 FB: SANTO──😘😈🩵🪽󱢏
📨 TG: +8801828500740
▶️ YT: 𝐒𝐇𝐀𝐍𝐓𝐎 𝐘𝐓
🎮 Discord: 𝐀𝐇𝐌𝐄𝐃_𝐒𝐇𝐀𝐍𝐓𝐎
📧 Email: fmzshantoeditor@gmail.com
📱 Phone/WhatsApp: +8801828500740

📅 LAST RESTART: 2025-04-25
🌐 SERVER ID: #83472`
    ];

    if (triggers.includes(input)) {
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      const fileUrl = "https://drive.google.com/uc?export=download&id=1uD0zrMb7oYJle4EbUezE_4UqKnnZ7QKH";

      try {
        const response = await axios.get(fileUrl, { responseType: "stream" });
        return message.reply({
          body: randomReply,
          attachment: response.data
        });
      } catch (err) {
        return message.reply(randomReply + "\n\n(Attachment failed to load)");
      }
    }
  }
};
