setup:
    npm install

test:
    # Ждем пока БД будет готова
    @while ! pg_isready -h postgres -p 5432; do sleep 1; done
    NODE_ENV=test npm test

dev:
    npm start

docker-test:
    docker-compose -f docker-compose.yml up --abort-on-container-exit --exit-code-from app

docker-run:
    docker-compose up

docker-build-prod:
    docker-compose -f docker-compose.yml build app

docker-push:
    docker-compose -f docker-compose.yml push app

docker-pull:
    docker pull mishaikon/devops-for-programmers-project-74

ci:
	docker-compose -f docker-compose.yml up --abort-on-container-exit --exit-code-from app

migrate:
    @while ! pg_isready -h postgres -p 5432; do sleep 1; done
    npm run migrate

build:
    npx webpack
