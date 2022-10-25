// caOS
// (c) 2022 Star Inc.
"use strict";

// Create context storage
const ctx = {
    now: () => Math.floor(new Date().getTime() / 1000),
};

// Load kernel modules
require('./src/kernel')(ctx);

// Show status message
console.info(
    "daemon.linux - The daemon for caOS",
    "\n====",
    `\nStarted: ${ctx.now()}`,
    `\nPID: ${process.pid}`,
    `\nUnixPlatform: ${process.platform}`,
    `\nUnixSocket: ${process.env.UNIX_SOCKET_PATH}`,
);
