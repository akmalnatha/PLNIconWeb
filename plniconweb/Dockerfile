FROM node:20-alpine as builder

WORKDIR /app

COPY package* .

RUN npm install

COPY . .

RUN npm run build

# CMD [ "npm", "run", "preview" ]

FROM nginx:1.25.2-alpine
EXPOSE 5050
COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html