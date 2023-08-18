# E-commerce - README

O desafio consistiu em desenvolver uma aplicação que permita a listagem de produtos em um e-commerce. Essa aplicação contém algumas funcionalidades, como busca pelo nome do produto, paginação e limite de produtos por página.

## Visão Geral

Este projeto consiste em uma aplicação de E-commerce que permite a listagem de produtos. A aplicação possui funcionalidades como busca pelo nome do produto, paginação e limite de produtos por página.

## Tecnologias Utilizadas

As principais tecnologias utilizadas neste projeto foram:

### Backend

- Typescript
- Javascript
- Jest (para testes)
- Postgres (banco de dados)
- Redis (cache)
- Docker (para construção de ambiente)
- Clean Code Architecture (arquitetura)

### Frontend

- Typescript
- React
- Javascript
- Material-UI (componentes de interface)

## Instalação

Siga os passos abaixo para configurar e rodar a aplicação:

1. **Pré-requisitos:**
   Certifique-se de ter o Docker Desktop instalado na sua máquina e o Ubuntu/WSL2 para rodar o Redis localmente. Opcionalmente, você pode usar o DBeaver para gerenciamento do banco de dados.

2. **Clonando os repositórios:**
   Clone o repositório principal e o repositório do backend:
   
   ```
   git clone https://github.com/nicscz/ecommerce.git
   cd ecommerce
   git clone https://github.com/nicscz/ecommerce-backend.git
   ```

3. **Instalando dependências:**
   Execute o seguinte comando em ambas as pastas (frontend e backend) para instalar as dependências:
   
   ```
   npm install
   ```

4. **Configurando as variáveis de ambiente:**
   Crie um arquivo `.env` tanto na pasta do backend quanto do frontend. Consulte os arquivos `.env.example` para as configurações necessárias.

5. **Construindo a aplicação com Docker:**
   Na pasta principal do projeto, execute o seguinte comando para construir a aplicação no Docker:
   
   ```
   docker-compose up --build
   ```
   
   **Atenção:** Lembre-se de atualizar as variáveis de ambiente no arquivo `.env` para o ambiente Docker.

6. **Configurando o banco de dados:**
   Execute as duas queries a seguir no seu banco de dados Postgres para criar a tabela de produtos e inserir alguns dados iniciais:

   ```sql
   CREATE TABLE products (
       id SERIAL PRIMARY KEY,
       nome VARCHAR(255),
       descricao TEXT,
       preco_promocional DECIMAL(10, 2),
       preco_original DECIMAL(10, 2),
       imagens JSONB,
       categoria VARCHAR(50),
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```
   
   ```sql
   INSERT INTO products (nome, descricao, preco_promocional, preco_original, imagens, categoria)
   VALUES
        ('Cadeira de Escritório', 'Cadeira ergonômica com suporte lombar para maior conforto durante o trabalho.', 129.99, 169.99, '["https://www.comfy.com.br/media/catalog/product/cache/be00e66d6037499d540c5ce12579d442/c/a/cadeira_de_escrito_rio_comfy_ergoboost_tela_mesh_preta_base_girato_ria_1.webp"]', 'Móveis'),
        ('Toalha de Praia', 'Toalha grande e colorida, perfeita para aproveitar os dias ensolarados na praia.', 8.99, 12.99, '["https://trackfield.vtexassets.com/arquivos/ids/250524-1200-1677?v=638000835702730000&width=1200&height=1677&aspect=true"]', 'Casa e Decoração'),
        ('Luminária de Mesa', 'Luminária moderna com ajuste de intensidade, ideal para iluminar seu espaço de trabalho.', 34.99, 44.99, '["https://http2.mlstatic.com/D_NQ_NP_958737-MLB53396426739_012023-O.webp"]', 'Iluminação'),
        ('Conjunto de Panelas', 'Conjunto de panelas antiaderentes com variedade de tamanhos para suas necessidades culinárias.', 49.99, 69.99, '["https://product-hub-prd.madeiramadeira.com.br/2689731/images/0810a1d2-16b8-47ac-88e1-9693eddd71fb50980463conjuntodepanelasrochedo6pecassmartr2t1gqb515913661531600x600.jpg"]', 'Utensílios de Cozinha'),
        ('Vaso Sanitário', 'Vaso sanitário moderno de baixo consumo de água com design elegante.', 189.99, 229.99, '["https://tezbgl.vteximg.com.br/arquivos/ids/160387-1000-1000/Vaso-Sanitario-para-Caixa-Acoplada-POP-Sabara-Cinza-Claro-IP36-03-Icasa-42666.png?v=637559897833530000"]', 'Banheiro'),
        ('Mesa de Centro', 'Mesa de centro com prateleira inferior para armazenamento e estilo na sua sala de estar.', 79.99, 99.99, '["https://a-static.mlcdn.com.br/800x560/mesa-de-centro-sala-classic-oval-com-pes-em-madeira-macica-tebarrot/lojadocelar/17323/f3dd1175d9fffefe26260aaf1b5c8ce1.jpeg"]', 'Móveis'),
        ('Jogo de Toalhas de Banho', 'Jogo completo de toalhas de banho, rosto e mão, combinando estilo e praticidade.', 32.99, 44.99, '["https://7749028l.ha.azioncdn.net/img/2022/09/produto/2417/jogo-de-toalhas-monarca-4pc-preto-appel.jpg?ims=fit-in/800x800/filters:fill(white)"]', 'Casa e Decoração'),
        ('Mesa de Cabeceira', 'Mesa compacta com gaveta para armazenamento ao lado da sua cama.', 39.99, 49.99, '["https://product-hub-prd.madeiramadeira.com.br/143107942/images/c84255b6-c67e-4599-9bbc-3f57374309af2ImS32o.jpg?width=700&canvas=1:1&bg-color=FFF"]', 'Móveis'),
        ('Saboneteira', 'Saboneteira de cerâmica com design elegante para manter seu sabonete sempre organizado.', 7.99, 9.99, '["https://cdn.leroymerlin.com.br/products/saboneteira_bancada_branco_plastico_step_umbra_90370245_c921_600x600.jpg"]', 'Banheiro'),
        ('Pendente Decorativo', 'Luminária pendente com estilo moderno para iluminar e decorar seus espaços.', 49.99, 59.99, '["https://m.media-amazon.com/images/I/61URE2HNP+L._AC_SL1500_.jpg"]', 'Iluminação'),
        ('Relógio de Parede', 'Relógio de parede silencioso com design minimalista para manter o controle do tempo.', 18.99, 24.99, '["https://m.media-amazon.com/images/I/61cuHfvx8FL._AC_SL1024_.jpg"]', 'Decoração'),
        ('Tapete Shaggy', 'Tapete macio e felpudo para adicionar conforto e estilo ao seu espaço.', 39.99, 49.99, '["https://m.media-amazon.com/images/I/817th+MyaSL._AC_SL1280_.jpg"]', 'Decoração');

   ;
   ```

7. **Rodando a aplicação frontend:**
   Para rodar o frontend, altere a porta no arquivo `.env` para uma porta que não seja 3000 (por exemplo, 3001). Em seguida, execute o seguinte comando na pasta do frontend:
   
   ```
   npm start
   ```

## Funcionalidades

A aplicação oferece as seguintes funcionalidades:

- Listagem de produtos
- Busca pelo nome do produto
- Paginação de resultados
- Limite de produtos por página

## Estrutura de Diretórios

A estrutura de diretórios do projeto é organizada da seguinte forma:

```
ecommerce/
├── ecommerce-backend/
├── ecommerce-frontend/
├── docker-compose.yml
├── README.md
```
