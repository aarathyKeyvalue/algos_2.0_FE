#Copy app to image
FROM node:latest

WORKDIR /tmp
COPY . /tmp/
RUN npm install webpack -g
RUN npm install --loglevel verbose
RUN npm run build

RUN cp -a /tmp/node_modules /usr/src/app/

CMD [ "npm", "run", "start:dev" ]