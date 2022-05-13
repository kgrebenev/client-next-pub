FROM node:alpine
 
WORKDIR /app
COPY .npmrc ./.npmrc
COPY package.json .
RUN npm install
RUN rm -f .npmrc
COPY . .
 
CMD ["npm", "run", "dev"]