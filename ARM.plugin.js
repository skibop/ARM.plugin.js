/**
 * @name AlwaysReplyMention
 * @description Automatically sets replies to always mention target
 * @author skibop
 * @authorId 737069109484847174
 * @authorLink https://github.com/skibop
 * @version 0.0.1
 * @source https://github.com/skibop/ARM.plugin.js/blob/main/ARM.plugin.js
 * @updateUrl https://github.com/skibop/ARM.plugin.js/blob/main/ARM.plugin.js
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
