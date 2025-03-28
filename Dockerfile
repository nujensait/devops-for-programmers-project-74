FROM node:20.12.2
WORKDIR /app

# Сначала копируем только файлы зависимостей
COPY ./app/package.json ./app/package-lock.json ./
COPY ./app/config ./app/config

RUN npm install

# Затем копируем остальные файлы
# COPY . .
COPY ./app .

CMD ["make", "dev"]
