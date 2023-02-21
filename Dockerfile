FROM node:lts
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . /app
EXPOSE 8080
# ENV PORT=8080
CMD ["yarn", "start"]