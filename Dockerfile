FROM mcr.microsoft.com/playwright:v1.53.0-jammy
ENV DOCKER=true

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY playwright.config.ts ./

RUN npm install

COPY . .

CMD ["npm", "run", "test"]