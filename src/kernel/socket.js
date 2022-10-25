// caOS
// (c) 2022 Star Inc.
"use strict";

const net = require('net');

module.exports = (ctx) => {
    const unixServer = net.createServer(function (client) {
        ctx.unixSocketClient = client;
    });

    unixServer.listen(process.env.UNIX_SOCKET_PATH);
}
