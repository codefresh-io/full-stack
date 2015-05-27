FROM ubuntu:14.04

RUN \
	sudo apt-get -q -y update \
	&& sudo apt-get -q -y install nodejs npm git \
	&& ln -s "$(which nodejs)" /usr/bin/node

COPY . /app
WORKDIR /app

RUN npm install

EXPOSE 9000

CMD node app.js