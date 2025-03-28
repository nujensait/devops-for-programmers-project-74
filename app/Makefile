setup: install db-migrate

install:
	[ -d app ] && cd app
	npm install

db-migrate:
	[ -d app ] && cd app
	npm run migrate

build:
	[ -d app ] && cd app
	npm run build

prepare-env:
	[ -d app ] && cd app
	cp -n .env.example .env

start:
	[ -d app ] && cd app
	NODE_ENV=production npm run start

dev:
	[ -d app ] && cd app
	npx concurrently "make start-frontend" "make start-backend"

start-backend:
	[ -d app ] && cd app
	npm start -- --watch --verbose-watch --ignore-watch='node_modules .git .sqlite'

start-frontend:
	[ -d app ] && cd app
	npx webpack --watch --progress

lint:
	[ -d app ] && cd app
	npx eslint .

lint-fix:
	[ -d app ] && cd app
	npx eslint --fix .

test:
	[ -d app ] && cd app
	NODE_ENV=test npm test -s
