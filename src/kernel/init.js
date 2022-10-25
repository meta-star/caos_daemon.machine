// caOS
// (c) 2022 Star Inc.
"use strict";

const { existsSync } = require("fs");
const { join: pathJoin } = require("path");

module.exports = () => {
    // Force the app only to run on Unix-like systems
    const unixSystems = ["linux", "darwin", "freebsd", "openbsd", "sunos", "aix", "android", "cygwin", "netbsd"];
    if (!unixSystems.includes(process.platform)) {
        console.error("caOS only runs on Unix-like systems.");
        process.exit(1);
    }

    // Load config
    const dotenvPath = pathJoin(__dirname, '..', '..', '.env');
    if (!existsSync(dotenvPath) && !process.env.APP_CONFIGURED) {
        throw new Error(".env not exists");
    }
    require('dotenv').config();
}
