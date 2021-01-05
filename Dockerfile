FROM node:12-alpine

RUN mkdir -p /usr/src

WORKDIR /usr/src

COPY . /usr/src

RUN npm install

RUN npm run build

RUN apk add --no-cache jq

RUN apk add --no-cache \
  python3 \
  py3-pip \
  && pip3 install --upgrade pip \
  && pip3 install \
  awscli \
  && rm -rf /var/cache/apk/*

RUN aws --version

RUN sh get-env.sh

EXPOSE 3000

CMD npm run start
