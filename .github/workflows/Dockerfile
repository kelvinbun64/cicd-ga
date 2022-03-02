FROM node:alpine

RUN apk update && apk add ca-certificates && update-ca-certificates

WORKDIR /app
ADD . /app

CMD npm start