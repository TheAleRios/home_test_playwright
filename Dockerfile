FROM mcr.microsoft.com/playwright:v1.44.1-jammy

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY playwright.config.ts ./

RUN npm install

COPY . .

CMD ["npx", "cross-env", "BROWSER=chromium", "npm", "run", "test"]