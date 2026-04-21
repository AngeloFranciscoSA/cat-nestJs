# projeto-teste

API REST construída com NestJS e SQLite para gerenciamento de gatos, com autenticação JWT.

## Tecnologias

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)
- [class-validator](https://github.com/typestack/class-validator)
- [Passport JWT](https://github.com/mikenicholson/passport-jwt)
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js)

## Instalação

```bash
npm install
```

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com base no `.env.example`:

```env
JWT_SECRET=sua-chave-secreta
JWT_EXPIRES_IN=1d
DATABASE_NAME=cats.sqlite
PORT=3000
BCRYPT_SALT_ROUNDS=10
```

## Rodando o projeto

```bash
# desenvolvimento
npm run start:dev

# produção
npm run start:prod
```

## Endpoints

### Auth

| Método | Rota             | Descrição           | Auth |
|--------|------------------|---------------------|------|
| POST   | /auth/register   | Registrar usuário   | Não  |
| POST   | /auth            | Login (retorna JWT) | Não  |

#### Payload de registro/login

```json
{
  "username": "angelo",
  "password": "123456"
}
```

#### Resposta do registro

```json
{
  "message": "User created!",
  "username": "angelo"
}
```

### Cats

| Método | Rota        | Descrição              | Auth |
|--------|-------------|------------------------|------|
| POST   | /cats        | Criar um gato          | Não  |
| GET    | /cats        | Listar todos os gatos  | Sim  |
| GET    | /cats/:id    | Buscar gato por ID     | Não  |
| PATCH  | /cats/:id    | Atualizar gato por ID  | Não  |
| DELETE | /cats/:id    | Remover gato por ID    | Não  |

#### Payload de cats (POST/PATCH)

```json
{
  "name": "Whiskers",
  "age": 3,
  "breed": "Siamese"
}
```

#### Rotas protegidas

Para acessar rotas que exigem autenticação, envie o token no header:

```
Authorization: Bearer <token>
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
