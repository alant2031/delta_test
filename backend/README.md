# backend

Para uma melhor experiência da API instale o **docker** e **docker-compose**. O banco de dados é instanciado através de uma imagem docker do mysql.

---

## Configuração e inicialização

1. Instale as dependencias do projeto: `yarn` ou `npm install`
2. Renomeie o arquivo _.env.example_ para _.env_
3. No terminal rode os seguintes comandos:
   - `yarn db-up`: para iniciar e preparar uma instancia do banco de dados. OBS: Utilize o shell do **bash**!
   - `yarn dev`: para iniciar a aplicação em modo **dev**(nodemon)
   - `yarn start`: para iniciar a aplicação em modo **prod**(node)
   - `yarn test`: para rodar os testes (incompleto)

Caso opte por instalar um banco no seu sistema operacional, atualize as variáveis de ambiente e também o arquivo .env de acordo com as configurações do seu banco.