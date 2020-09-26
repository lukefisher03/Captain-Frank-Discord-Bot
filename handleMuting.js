const Discord = require("discord.js")

let muteResponses = ["Frank did the big mute", "Frank shut ya'll up", "Frank stopped any cheaters", "Frank enforced com silence", "Frank made everyone go shhhhh....", "Frank silenced the peasants"]
let unmuteResponses = ["Frank started the party", "Frank bestowed the gift of voice", "Vocal chords back online", "Frank started the inaudiable mic spam", "Go get them imposters nerds"]

module.exports = {
    handleMuting: (client) => {
        client.on("message", message => {
            let lowercaseMessage = message.content.toLowerCase()
            if (message.author.tag !== client.user.tag) {
                let voiceChannel = message.member.voice.channel

                if (lowercaseMessage == "_frank mute" && voiceChannel !== null) {
                    for (const [snowflake, member] of voiceChannel.members) {
                        member.voice.setMute(true)
                            .then(guildMember => {
                                message.reply(muteResponses[Math.floor(Math.random() * muteResponses.length)])
                            })
                            .catch(reason => {
                                message.reply(`Something went wrong, try checking the bot \n\n ${reason}`)
                            })

                        console.log(`muted ${member.user.tag}`)
                    }

                } else if (lowercaseMessage == "_frank mute") {
                    if (voiceChannel == null) {
                        message.reply(`${message.author.tag} is not in a voice channel! You must join the channel you wish to mute!`)
                    }
                }

                if (lowercaseMessage == "_frank unmute" && voiceChannel !== null) {
                    for (const [ID, member] of voiceChannel.members) {

                        member.voice.setMute(false)
                            .then(guildMember => {
                                message.reply(unmuteResponses[Math.floor(Math.random() * unmuteResponses.length)])
                            })
                            .catch(reason => {
                                message.reply(`Something went wrong, try checking the bot \n\n ${reason}`)
                            })

                        console.log(`unmuted ${member.user.tag}`)
                    }
                } else if (lowercaseMessage == "_frank unmute") {
                    if (voiceChannel == null) {
                        message.reply(`${message.author.tag} is not in a voice channel! You must join the channel you wish to unmute`)
                    }
                }

            }

        })
    }
}