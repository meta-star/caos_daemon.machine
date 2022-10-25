const net = require('net');

module.exports = (config) => {
    const unixServer = net.createServer(function (client) {

    });

    unixServer.listen(process.env.UNIX_SOCKET_PATH);
}
