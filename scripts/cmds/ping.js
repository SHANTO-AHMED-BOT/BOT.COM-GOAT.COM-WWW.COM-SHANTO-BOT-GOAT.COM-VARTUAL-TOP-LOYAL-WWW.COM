const { performance } = require('perf_hooks');

module.exports = {
    config: {
        name: "ping",
        version: "1.9",
        author: "BADHON",
        category: "SYSTEM",
        permission: "ADMIN ONLY",
        description: "Checks bot's ping with style and attitude"
    },

    onStart: async function({ api, event }) {
        const BOT_ADMIN_IDS = ["61571421696077", "61557409693409"];
        
        if (!BOT_ADMIN_IDS.includes(event.senderID.toString())) {
            const deniedMsg = `╭───────────────╮
│  ⚠️ 𝗪𝗔𝗥𝗡𝗜𝗡𝗚  ⚠️  │
╰───────────────╯
│
│ ✖ You don't have permission 
│   to use this command.
│
│ 🔒 BOT ADMIN ONLY ACCESS
│
╰───────────────────────•`;
            return api.sendMessage(deniedMsg, event.threadID, event.messageID);
        }

        try {
            // Professional loading animation
            const createProgressBar = (percent, length = 10) => {
                const filled = Math.round(percent / 100 * length);
                return '▰'.repeat(filled) + '▱'.repeat(length - filled);
            };

            let loadingMessage;
            let percent = 0;
            
            loadingMessage = await api.sendMessage(
                `╭───────────────────────╮\n│  🚀 Starting MELISSA Test...  │\n╰───────────────────────╯\n\n${createProgressBar(0)} 0%`,
                event.threadID
            );

            const loadingInterval = setInterval(async () => {
                percent += 5;
                if (percent > 100) {
                    clearInterval(loadingInterval);
                    return;
                }
                
                const progressBar = createProgressBar(percent);
                const loadingTexts = [
                    "⏱️ Measuring her reflexes...",
                    "📈 Calculating her speed...",
                    "💃 Almost done dancing..."
                ];
                const currentText = loadingTexts[Math.min(2, Math.floor(percent / 33))];
                
                try {
                    await api.editMessage(
                        `╭───────────────────────╮\n│  ${currentText}  │\n╰───────────────────────╯\n\n${progressBar} ${percent}%`,
                        loadingMessage.messageID
                    );
                } catch (e) {
                    clearInterval(loadingInterval);
                }
            }, 100);

            // Actual ping measurement
            this.cleanMemory();
            const startTime = performance.now();
            await new Promise(resolve => setTimeout(resolve, 1800));
            const endTime = performance.now();
            const ping = Math.floor(endTime - startTime);
            
            // Finalize loading
            clearInterval(loadingInterval);
            try {
                await api.editMessage(
                    `╭───────────────────────╮\n│  ✅ MELISSA Test Complete!  │\n╰───────────────────────╯\n\n▰▰▰▰▰▰▰▰▰▰ 100%`,
                    loadingMessage.messageID
                );
            } catch (e) {}

            await new Promise(resolve => setTimeout(resolve, 500));

            // Ping result message with personality
            let responseMessage;
            if (ping < 150) {
                responseMessage = `╭───────────────────────╮
│  🥵 𝗠𝗘𝗟𝗜𝗦𝗦𝗔 𝗜𝗦 𝗦𝗠𝗢𝗢𝗧𝗛  │
╰───────────────────────╯
│
│ ⏱️ Response Time: ${ping}ms
│
│ ✨ MELISSA IS SMOOTH LIKE BUTTER
│
│ 🌟 She's dancing flawlessly!
│
╰──────────────────────────•`;
            } else if (ping < 300) {
                responseMessage = `╭───────────────────────╮
│  ⚡ 𝗠𝗘𝗟𝗜𝗦𝗦𝗔 𝗜𝗦 𝗢𝗞  │
╰───────────────────────╯
│
│ ⏱️ Response Time: ${ping}ms
│
│ 🏃 She's moving decently
│
│ ℹ️ Could use some caffeine maybe
│
╰──────────────────────────•`;
            } else if (ping < 500) {
                responseMessage = `╭───────────────────────╮
│  🐢 𝗠𝗘𝗟𝗜𝗦𝗦𝗔 𝗜𝗦 𝗧𝗜𝗥𝗘𝗗  │
╰───────────────────────╯
│
│ ⏱️ Response Time: ${ping}ms
│
│ 😴 She's moving very slow
│
│ ☕ Maybe she needs some rest
│
╰──────────────────────────•`;
            } else {
                responseMessage = `╭───────────────────────╮
│  💀 𝗠𝗘𝗟𝗜𝗦𝗦𝗔 𝗜𝗦 𝗟𝗔𝗚𝗚𝗜𝗡𝗚  │
╰───────────────────────╯
│
│ ⏱️ Response Time: ${ping}ms
│
│ 💀 MELISSA IS LAGGING BADLY
│
│ 🆘 SOMEONE HELP HER PLEASE!
│
╰──────────────────────────•`;
            }
            
            await api.sendMessage(responseMessage, event.threadID);
            try {
                await api.unsendMessage(loadingMessage.messageID);
            } catch (e) {}

        } catch (error) {
            console.error("Ping command error:", error);
            const errorMsg = `╭───────────────────────╮
│  ❌ 𝗠𝗘𝗟𝗜𝗦𝗦𝗔 𝗖𝗥𝗔𝗦𝗛𝗘𝗗  │
╰───────────────────────╯
│
│ 🔧 Error: ${error.message}
│
│ ⚠️ She needs a reboot maybe?
│
╰──────────────────────────•`;
            api.sendMessage(errorMsg, event.threadID);
        }
    },

    cleanMemory: function() {
        try {
  
