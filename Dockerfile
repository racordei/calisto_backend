FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm config set proxy ${HTTP_PROXY}
RUN npm install

COPY .sequelizerc .sequelizerc
COPY .env* .
COPY ./src ./src
COPY ./src/config/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh

RUN rm src/config/docker-entrypoint.sh

EXPOSE ${BACKEND_EXPOSE_PORT}