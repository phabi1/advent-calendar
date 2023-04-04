FROM node:16-alpine
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["yarn", "nx", "serve", "api-gateway"]
