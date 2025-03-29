# DevOps for Programmers Project

### Hexlet tests and linter status:

#### Hexlet check pipeline:
[![Actions Status](https://github.com/nujensait/devops-for-programmers-project-74/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/nujensait/devops-for-programmers-project-74/actions)

#### Push pipeline:
[![CI](https://github.com/nujensait/devops-for-programmers-project-74/actions/workflows/push.yml/badge.svg)](https://github.com/nujensait/devops-for-programmers-project-74/actions/workflows/push.yml)

## Требования
- Docker 20.10+
- Docker Compose 1.29+
- Node.js 18+ (только для разработки)

## Инструкции
### Запуск в production
```bash
docker-compose -f docker-compose.yml up
```