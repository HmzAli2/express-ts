FROM node:alpine3.16
WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
RUN npm install
EXPOSE 8080
COPY . .
CMD ["npm", "run", "dev"]