# From You
### Aplicativo de anotações

![alt text](./readme/screenshot.png)

## Como usar:
- Clone o repositório. Eu recomendo usar o github cli.
- Instale as dependências usando `npm i` ou `yarn`
- Crie um arquivo nomeado `.env` na raiz do projeto.
- Configure o `.env` com `[NOME_DA_VARIÁVEL]=[valor da variável]`. As variáveis requeridas estão visíveis em `src/env.ts`
- Você pode usar `docker-compose up` para iniciar um banco de dados Mongo local, ou usar outro. Isso é configurado com a variável de ambiente `MONGO_URL`.
- Use `yarn dev` para iniciar o servidor de desenvolvimento.
- _Happy coding_ 
