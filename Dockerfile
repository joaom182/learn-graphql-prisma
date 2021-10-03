FROM node:alpine

RUN apk add --no-cache --virtual .build-deps \
    ca-certificates \
    wget \
    tar && \
    cd /usr/local/bin && \
    wget https://yarnpkg.com/latest.tar.gz && \
    tar zvxf latest.tar.gz && \
    ln -s /usr/local/bin/dist/bin/yarn.js /usr/local/bin/yarn.js && \
    apk del .build-deps

RUN apk add --update --no-cache alpine-sdk

WORKDIR /usr/app

COPY . .
RUN yarn
RUN yarn dist

EXPOSE 5002

CMD ["yarn", "start"]