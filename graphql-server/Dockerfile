FROM node:10.16.1-alpine

# Creating app directory
RUN mkdir -p /usr/app/graphql-server
WORKDIR /usr/app/graphql-server

COPY package.json /usr/app/graphql-server
COPY yarn.lock /usr/app/graphql-server

RUN yarn install

COPY . /usr/app/graphql-server

CMD ["yarn", "run", "dev"]

