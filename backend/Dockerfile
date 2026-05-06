FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
# Asegúrate de tener un "start": "node index.js" en tu package.json del backend
CMD ["npm", "start"]