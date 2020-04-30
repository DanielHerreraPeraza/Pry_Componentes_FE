# Stage 1
FROM node:8 as react-build
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8090

CMD ["npm", "start"]