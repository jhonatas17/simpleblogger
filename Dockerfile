FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN groupadd -r app && useradd -r -g app appuser

USER appuser

CMD ["node", "server.js"]