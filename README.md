# projeto-teste

API REST construída com NestJS e SQLite para gerenciamento de gatos.

## Tecnologias

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)
- [class-validator](https://github.com/typestack/class-validator)

## Instalação

```bash
npm install
```

## Rodando o projeto

```bash
# desenvolvimento
npm run start:dev

# produção
npm run start:prod
```

## Endpoints

### Cats

| Método | Rota        | Descrição              |
|--------|-------------|------------------------|
| POST   | /cats        | Criar um gato          |
| GET    | /cats        | Listar todos os gatos  |
| GET    | /cats/:id    | Buscar gato por ID     |
| PATCH  | /cats/:id    | Atualizar gato por ID  |
| DELETE | /cats/:id    | Remover gato por ID    |

### Exemplo de payload (POST/PATCH)

```json
{
  "name": "Whiskers",
  "age": 3,
  "breed": "Siamese"
}
```

## Testes

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# cobertura
npm run test:cov
```
