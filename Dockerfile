FROM node:alpine
# if app is there, use it, otherwise create it
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
CMD node index.js