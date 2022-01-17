/**
 * @name AlwaysReplyMention
 * @description Automatically sets replies to always mention target
 * @author skibop
 * @authorId 737069109484847174
 * @authorLink https://github.com/skibop
 * @version 0.0.1
 * @source https://raw.githubusercontent.com/somebody1234/userscripts/master/NRM.plugin.js
 * @updateUrl https://raw.githubusercontent.com/somebody1234/userscripts/master/NRM.plugin.js
 */
module.exports = class NoReplyMention {
  start() {
    this.unpatch = BdApi.monkeyPatch(
      BdApi.findModuleByProps("createPendingReply"),
      "createPendingReply",
      { before: (data) => (data.methodArguments[0].shouldMention = true) }
    );
  }
  stop() {
    this.unpatch();
  }
};
