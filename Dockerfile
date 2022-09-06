FROM node:alpine3.16
WORKDIR /app
COPY package*.json .
CMD npm install
COPY . .
CMD npx tsc && npm run serve

