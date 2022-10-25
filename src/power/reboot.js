// caOS
// (c) 2022 Star Inc.
"use strict";

const { sync: commandExistsSync } = require('command-exists');
const { execSync } = require('child_process');

module.exports = () => {
    if (commandExistsSync('openrc-shutdown')) {
        execSync('openrc-shutdown -r now');
    }
    if (commandExistsSync('systemctl')) {
        execSync('systemctl reboot');
    }
    if (commandExistsSync('shutdown')) {
        execSync('shutdown -r now');
    }
    if (commandExistsSync('reboot')) {
        execSync('reboot');
    }
    throw new Error('Unable to reboot the system');
}
