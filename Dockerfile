# Stage 1
FROM node:8 as react-build
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g serve

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["serve", "-s", "-l", "8080", "./build"]