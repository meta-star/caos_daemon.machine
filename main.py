import socket
import sys
import os

from json import dumps
from sensor import get_data

serverAddr = 'caos.socket'


def main():
    # create sockert
    sock = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
    if not sock:
        print('socket error', file=sys.stderr)
    # bind to a file
    if os.path.exists(serverAddr):
        os.unlink(serverAddr)
    if sock.bind(serverAddr):
        print('socket.bind error', file=sys.stderr)

    # listen
    if sock.listen(5):
        print('socket.listen error', file=sys.stderr)

    while True:
        print('waiting for connection...', file=sys.stderr)
        # waiting for client connecting
        conn, _ = sock.accept()
        try:
            data = get_data({'pin': 4})
            conn.sendall(dumps(data).encode('utf-8'))
            conn.sendall()
        finally:
            # close the connection
            conn.close()
            os.unlink(serverAddr)


if __name__ == "__main__":
    main()
