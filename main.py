import socket
import sys
import os
import yaml

from json import dumps
from sensor import get_data

socket_address = 'caos.socket'

DEFAULT_CONFIG_FILENAME = "default.yaml"
CONFIG_FILENAME = "config.yaml"

config_filename = DEFAULT_CONFIG_FILENAME if not os.path.exists(CONFIG_FILENAME) else CONFIG_FILENAME
with open(config_filename, "r") as config_file:
    config = yaml.load(config_file, Loader=yaml.FullLoader)

def main():
    # create sockert
    sock = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
    if not sock:
        print('socket error', file=sys.stderr)
    # bind to a file
    if os.path.exists(socket_address):
        os.unlink(socket_address)
    if sock.bind(socket_address):
        print('socket.bind error', file=sys.stderr)

    # listen
    if sock.listen(5):
        print('socket.listen error', file=sys.stderr)

    while True:
        print('waiting for connection...', file=sys.stderr)
        # waiting for client connecting
        conn, _ = sock.accept()
        try:
            data = get_data(config.get('sensor'))
            conn.sendall(dumps(data).encode('utf-8'))
            conn.sendall()
        finally:
            # close the connection
            conn.close()
            os.unlink(socket_address)


if __name__ == "__main__":
    main()
