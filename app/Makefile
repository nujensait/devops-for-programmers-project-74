setup: install db-migrate

install:
	cd app
	npm install

db-migrate:
	cd app
	npm run migrate

build:
	cd app
	npm run build

prepare-env:
	cd app
	cp -n .env.example .env

start:
	cd app
	NODE_ENV=production npm run start

dev:
	cd app
	npx concurrently "make start-frontend" "make start-backend"

start-backend:
	cd app
	npm start -- --watch --verbose-watch --ignore-watch='node_modules .git .sqlite'

start-frontend:
	cd app
	npx webpack --watch --progress

lint:
	cd app
	npx eslint .

lint-fix:
	cd app
	npx eslint --fix .

test:
	cd app
	NODE_ENV=test npm test -s
