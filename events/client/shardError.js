const Discord = require("discord.js");

module.exports = {
  name: "shardError",

  /**
   * @param {Discord.Client} client
   */

  async execute(client, error, id) {
    client.logger(`Shard #${id} Errored`.brightRed);
  }
}

/**
 * @INFO
 * Bot Coded by Zedro#2742 | https://discord.gg/yHdne85PvM
 * @INFO
 * Work for Milanio Development | https://discord.gg/yHdne85PvM
 * @INFO
 * Please Mention Us Milanio Development, When Using This Code!
 * @INFO
 */