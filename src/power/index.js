// caOS
// (c) 2022 Star Inc.
"use strict";

const rebootMethod = require("./reboot");
const shutdownMethod = require("./shutdown");

module.exports = (ctx) => {
    ctx.unixSocketClient.on("power", (data) => {
        switch (data.action) {
            case "reboot": {
                rebootMethod(ctx);
                break;
            }
            case "shutdown": {
                shutdownMethod(ctx);
                break;
            }
        }
    });
}
