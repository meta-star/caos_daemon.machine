// caOS
// (c) 2022 Star Inc.
"use strict";

module.exports = (ctx) => {
    ctx.unixSocketClient.on("sensor", (data) => {
        switch (data.action) {
            case "get": {
                ctx.unixSocketClient.emit("sensor", {
                    action: "get",
                    sensor: data.sensor,
                    message: -1
                });
                break;
            }
        }
    });
};
