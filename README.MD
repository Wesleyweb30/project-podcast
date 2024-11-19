# Podcast Manager API

**Podcast Manager API** é uma aplicação backend construída com **Node.js** e **TypeScript** para gerenciar e exibir episódios de podcasts. A API permite listar episódios organizados por categorias e filtrar episódios por nome de podcast. 

Este projeto é ideal para plataformas ou aplicativos que desejam integrar conteúdo de podcasts, com suporte para vídeos hospedados no YouTube.

## Tecnologias Usadas

- **Node.js**: Plataforma JavaScript para execução do backend.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática para maior segurança e manutenção do código.
- **tsx**: Ferramenta para execução direta de arquivos TypeScript durante o desenvolvimento.
- **tsup**: Ferramenta de empacotamento para compilar o código TypeScript em JavaScript otimizado para produção.
- **@types/node**: Fornece os tipos necessários para trabalhar com a API do Node.js em TypeScript.
- **dotenv** (presumido): Gerencia variáveis de ambiente sensíveis.

## Funcionalidades

- **Listar episódios por categorias**: A API retorna os episódios de podcast organizados por categoria (ex: Anime, Gamer, Fitness, Programação, Saúde, Filmes).
- **Filtrar episódios por nome de podcast**: Permite filtrar episódios com base no nome do podcast.

## Endpoints

### 1. **GET `/list`**
   - **Descrição**: Lista todos os episódios de podcast organizados por categorias.
   - **Exemplo de resposta**:
   ```json
   [
      {
         "podcastName": "Plantão Nerd",
         "videoId": "C0OIR5YxKj4",
         "episode": "A SEMANA [03/10 a 10/11] DE LANÇAMENTOS 2024 = STREAMINGS + CINEMA - Plantão Nerd #009",
         "cover": "https://i.ytimg.com/vi/C0OIR5YxKj4/maxresdefault.jpg",
         "link": "https://www.youtube.com/watch?v=C0OIR5YxKj4",
         "category": ["Anime", "Gamer"]
      },
      {
         "podcastName": "Plantão Nerd",
         "videoId": "yeXSkgLGjLI",
         "episode": "GARCIA JR. + THIAGO DE SOUZA + CARLOS ALBERTO - Histórias Tenebrosas #008",
         "cover": "https://i.ytimg.com/vi/yeXSkgLGjLI/maxresdefault.jpg",
         "link": "https://www.youtube.com/watch?v=yeXSkgLGjLI",
         "category": ["História", "Filme"]
      }
   ]
   ```

### 2. **GET `/podcast/p=plantao`**
   - **Descrição**: Filtra episódios de podcast com base no nome do podcast.
   - **Parâmetros de consulta**:
     - `p` (opcional): Nome do podcast para filtrar.
   - **Exemplo de resposta**:
   ```json
   [
      {
         "podcastName": "Plantão Nerd",
         "videoId": "C0OIR5YxKj4",
         "episode": "A SEMANA [03/10 a 10/11] DE LANÇAMENTOS 2024 = STREAMINGS + CINEMA - Plantão Nerd #009",
         "cover": "https://i.ytimg.com/vi/C0OIR5YxKj4/maxresdefault.jpg",
         "link": "https://www.youtube.com/watch?v=C0OIR5YxKj4",
         "category": ["Anime", "Gamer"]
      }
   ]
   ```

## Instalação

### Pré-requisitos

- **Node.js** (recomendado versão 16 ou superior)
- **npm** ou **Yarn** para gerenciamento de dependências

### Passos para Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Wesleyweb30/project-podcast.git
   cd project-podcast
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

### Executando o Projeto

1. **Modo Desenvolvimento (Com hot reload)**:

   Para iniciar o servidor em modo de desenvolvimento, com recarregamento automático das alterações, execute:

   ```bash
   npm run start:watch
   ```

2. **Modo Produção**:

   Para compilar o código TypeScript e executar a versão final do projeto:

   ```bash
   npm run dist
   npm run start:dist
   ```

3. **Iniciar o servidor em modo de desenvolvimento (sem watch)**:

   ```bash
   npm run start:dev
   ```

### Variáveis de Ambiente

Este projeto pode utilizar um arquivo `.env` para armazenar variáveis de ambiente, como chaves de API, configurações de banco de dados e outras informações sensíveis. Certifique-se de criar o arquivo `.env` na raiz do projeto, conforme necessário.

## Estrutura de Diretórios

```
/project-root
│
├── /docs                    # Documentação do projeto
├── /src                     # Código-fonte do servidor
│   ├── /controllers         # Controladores de funcionalidade da API
│   ├── /router              # Definição de rotas da API
│   ├── /utils               # Utilitários (ex: métodos HTTP)
│   ├── server.ts            # Arquivo principal do servidor
├── /node_modules            # Dependências do projeto
├── package.json             # Arquivo de dependências e scripts
├── tsconfig.json            # Configuração do TypeScript
└── .env                     # Arquivo de variáveis de ambiente (se necessário)
```

## Comandos de Desenvolvimento

- **Iniciar servidor em desenvolvimento**:

  ```bash
  npm run start:dev
  ```

- **Iniciar servidor com observação de arquivos**:

  ```bash
  npm run start:watch
  ```

- **Criar build de distribuição**:

  ```bash
  npm run dist
  ```

- **Iniciar servidor com build de distribuição**:

  ```bash
  npm run start:dist
  ```

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Crie uma nova branch para suas alterações.
3. Realize suas alterações e envie um commit com uma mensagem descritiva.
4. Abra um pull request para a branch principal deste repositório.

## Licença

Este projeto é licenciado sob a **MIT License**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Se você tiver dúvidas ou sugestões, fique à vontade para abrir uma *issue* ou entrar em contato.
