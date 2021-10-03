FROM node:lts

WORKDIR /usr/app

COPY . .
RUN yarn
RUN yarn dist

EXPOSE 5002

CMD ["yarn", "start"]