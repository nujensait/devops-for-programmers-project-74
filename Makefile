setup:
    npm install

test:
    npm test

dev:
    npm start

docker-test:
    docker-compose -f docker-compose.yml up --abort-on-container-exit --exit-code-from app

docker-run:
    docker-compose up
