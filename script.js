const Discord = require("discord.js")
const muter = require("./handleMuting.js")
const Frank = new Discord.Client()

Frank.on("ready", () => {
    console.log("Frank has entered the chat")
})

Frank.on("message", (msg) => {
    if (msg.author.tag !== Frank.user.tag) {
        if (msg.content.toLowerCase() == "_frank info") {
            msg.reply(`Hey There! I'm Frank! \n\n I was a bot created specifically for the game Among Us. On certain commands I can mute/unmute entire voice channels. That way you can restrict discussion while in game and then have voice chat while discussing suspects. Here's a little guide to get started: \n\n 1. I need voice channel permissions to work!\n 2. To mute/unmute a channel you say "_frank mute" or "_frank unmute" respectively. \n 3. The user who calls a mute/unmute command must be in the voice channel he wishes to mute! \n \nThat's all folks, \nEnjoy playing Among Us!\n -Frank`)
        }
    }
})

muter.handleMuting(Frank)


Frank.login('NzU5MTUyMjc1MTU4NzI4NzM2.X25Vpg.CFCk-VdWfa24PzctyEFAf44W_MQ');