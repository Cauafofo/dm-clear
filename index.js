const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json");

client.on("ready", () => {
    client.user.setActivity("Cupido7#0002", {
        type: "STREAMING",
        url: "https://www.twitch.tv/cupido7"
      });
  console.log(` `)
  console.log(` `)
  console.log(`                                 █████╗ ██╗   ██╗██████╗ ██╗██████╗  █████╗ ███████╗`)
  console.log(`                                ██╔══██╗██║   ██║██╔══██╗██║██╔══██╗██╔══██╗╚════██║`)
  console.log(`                                ██║  ╚═╝██║   ██║██████╔╝██║██║  ██║██║  ██║    ██╔╝`)
  console.log(`                                ██║  ██╗██║   ██║██╔═══╝ ██║██║  ██║██║  ██║   ██╔╝`)                                                   
  console.log(`                                ╚█████╔╝╚██████╔╝██║     ██║██████╔╝╚█████╔╝  ██╔╝`)
  console.log(`                                 ╚════╝  ╚═════╝ ╚═╝     ╚═╝╚═════╝  ╚════╝   ╚═╝`)    
  console.log(` `)
  console.log(` `)
  console.log(`[Cupido7] Conectado com sucesso em: ${client.user.username}#${client.user.discriminator}`)
  console.log(`[Cupido7] ID da conta utilizada: ${client.user.id}`)
  console.log(` `)
  });

client.on("message", async (message) => {

    if (message.author.id == client.user.id && message.content.startsWith(config.prefixo)) {
        const max = 50 // cada 1 = 100. Exemplo: 10 = as últimas 1000 mensagens
        let lastMessageID;
        for (let a = 0; a < max; a++) {
            const messages = await message.channel.fetchMessages({ limit: 10, before: lastMessageID });
            lastMessageID = messages.last().id;

            const mymessages = messages.filter(m => m.author.id === message.author.id).array()

            for (let msg of mymessages) {
                await msg.delete().catch(() => { })
            }
        }
    }
});

client.login(config.token)