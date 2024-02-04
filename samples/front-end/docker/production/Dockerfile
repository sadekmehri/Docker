FROM node:20-alpine3.18 AS builder
WORKDIR /app
COPY package*.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx:stable AS production
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/docker/production/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
