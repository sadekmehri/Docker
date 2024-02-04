FROM node:20-alpine3.18 AS base
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
