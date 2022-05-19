# Blogs API

Nesse projeto, foi construído um back-end usando `ORM` com o pacote `sequelize` do `npm`, além de:
 - Criadas e associadas tabelas usando `models` do `sequelize`
 - Construídos endpoints para consumir os models criados
 - Feito um `CRUD` com o `ORM`

---

## <strong>Rodando o projeto</strong>

> Instale as dependências com `npm install`

> Inicie o projeto com `npm start` ou `npm run debug`


**⚠️ Atenção:**

- Não há front-end neste projeto;

**⚠️ É essencial configurar essas 4 variáveis de ambiente para testar o projeto localmente:**

```
  MYSQL_USER
  MYSQL_PASSWORD
  HOSTNAME
  JWT_SECRET
```

## <strong>Tabelas</strong>

O banco tem quatro tabelas: _BlogPosts_, _Categories_, _PostsCategories_ e _Users_.

Essas tabelas podem ser populadas com os seeders fornecidos pela Trybe (`src/sequelize/seeders`).