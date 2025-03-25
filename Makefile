setup: install db-migrate

install:
	npm ci

db-migrate:
	npm run migrate

build:
	npm run build

prepare-env:
	cp -n .env.example .env

start:
	NODE_ENV=production npm start

dev:
	NODE_ENV=development npx concurrently "npm run start:frontend" "npm run start:backend"

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .

test:
	NODE_ENV=test npm test

ci:
	docker-compose -f docker-compose.yml up --abort-on-container-exit --exit-code-from app
