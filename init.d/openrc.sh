#!/sbin/openrc-run
supervisor=supervise-daemon

name="daemon.linux"
description="The daemon for caOS"

directory="/opt/daemon.linux"
command="/usr/bin/node app.py"

depend() {
	need localmount
	use logger dbus
	after bootmisc modules entropy udev-settle
	before dns dhcpcd net
	keyword -shutdown
}
