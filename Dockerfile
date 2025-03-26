# Используем базовый образ Node.js версии 20.12.2
FROM node:20.12.2-alpine

# Устанавливаем необходимые зависимости для компиляции нативных модулей
RUN apk add --no-cache python3 make gcc g++

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем только package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci --only=production

# Устанавливаем пользователя с ограниченными правами
USER node

# Команда по умолчанию
CMD ["npm", "start"]
