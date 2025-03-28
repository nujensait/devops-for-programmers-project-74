setup:
	if [ -d app ]; then cd app; fi
	make install
	make db-migrate

install:
	if [ -d app ]; then cd app; fi
	npm install
	npm ci

db-migrate:
	if [ -d app ]; then cd app; fi
	npm run migrate

build:
	if [ -d app ]; then cd app; fi
	npm run build

prepare-env:
	if [ -d app ]; then cd app; fi
	cp -n .env.example .env

start:
	if [ -d app ]; then cd app; fi
	NODE_ENV=production npm start

dev:
	if [ -d app ]; then cd app; fi
	npm run dev

lint:
	if [ -d app ]; then cd app; fi
	npx eslint .

lint-fix:
	if [ -d app ]; then cd app; fi
	npx eslint --fix .

test:
	if [ -d app ]; then cd app; fi
	NODE_ENV=test npm test

ci:
	docker-compose -f docker-compose.yml up --abort-on-container-exit --exit-code-from app
