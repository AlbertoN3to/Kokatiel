FROM node:10.15.1


RUN mkdir server

COPY . ./server

RUN cd server && npm i
RUN npm install typescript -g
RUN npm install ts-node -g

EXPOSE 3000