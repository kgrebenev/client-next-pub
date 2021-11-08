FROM node:alpine
 
WORKDIR /app
COPY .npmrc ./.npmrc
COPY package.json .
RUN npm install
COPY . .
 
CMD ["npm", "run", "dev"]