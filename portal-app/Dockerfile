FROM node:10.16.1-alpine

# Creating app directory
RUN mkdir -p /usr/app/portal-app
WORKDIR /usr/app/portal-app

COPY package.json /usr/app/portal-app
COPY yarn.lock /usr/app/portal-app

RUN yarn install

COPY . /usr/app/portal-app

CMD ["yarn", "run", "dev"]

