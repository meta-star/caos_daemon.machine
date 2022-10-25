// caOS
// (c) 2022 Star Inc.
"use strict";

const { sync: commandExistsSync } = require('command-exists');
const { execSync } = require('child_process');

module.exports = () => {
    if (commandExistsSync('openrc-shutdown')) {
        execSync('openrc-shutdown -h now');
    }
    if (commandExistsSync('systemctl')) {
        execSync('systemctl poweroff');
    }
    if (commandExistsSync('shutdown')) {
        execSync('shutdown -h now');
    }
    if (commandExistsSync('poweroff')) {
        execSync('poweroff');
    }
    if (commandExistsSync('halt')) {
        execSync('halt');
    }
    throw new Error('Unable to shutdown the system');
}
