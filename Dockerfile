FROM node:9-slim

WORKDIR /workhorse-server

COPY . /workhorse-server
RUN yarn install && yarn run build


EXPOSE 3000
CMD [ "yarn", "run","prod" ]
