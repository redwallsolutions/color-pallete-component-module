FROM node:10-alpine

WORKDIR /opt/module

COPY . .

RUN yarn

CMD ["yarn", "start"]

EXPOSE 3000
