setup:
	[ -d app ] && cd app
	make install
	make db-migrate

install:
	[ -d app ] && cd app
	npm ci

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
	NODE_ENV=production npm start

dev:
	[ -d app ] && cd app
	npm run dev

lint:
	[ -d app ] && cd app
	npx eslint .

lint-fix:
	[ -d app ] && cd app
	npx eslint --fix .

test:
	[ -d app ] && cd app
	NODE_ENV=test npm test

ci:
	docker-compose -f docker-compose.yml up --abort-on-container-exit --exit-code-from app
