FROM node:20.12.2
WORKDIR /app

COPY app/package.json package.json
COPY app/package-lock.json package-lock.json

# Устанавливаем все зависимости включая devDependencies
RUN npm install

COPY . .

# Добавляем sequelize-cli в PATH
ENV PATH /app/node_modules/.bin:$PATH

CMD ["make", "test"]