# Desafio estágio Rentcars - Projeto de Locadora de Veículos

Olá, candidatos!

Bem-vindos ao nosso desafio do Programa de Estágio 2023! Estamos empolgados em vê-los em ação e avaliar suas habilidades na criação de um sistema de gerenciamento de veículos para uma locadora de carros.

## Descrição do Projeto

O projeto consiste em um aplicativo CRUD (Create, Read, Update, Delete) desenvolvido em Node.js, que permitirá a gestão de veículos em uma locadora de carros. Cada veículo terá informações detalhadas, incluindo ID, locadora, modelo, marca, ano, motor, número de portas, tipo de câmbio, presença de ar-condicionado e datas de criação e atualização.

Este desafio tem como objetivo avaliar suas habilidades de desenvolvimento, incluindo o conhecimento de Node.js, Express, MySQL, Sequelize, e a capacidade de criar uma API RESTful.

## Tarefas

Você deve completar as seguintes tarefas:

1. Configurar o ambiente de desenvolvimento com Node.js e instalar as dependências necessárias (Express, mysql2, Sequelize, Nodemon).

2. Criar um banco de dados MySQL para armazenar os dados dos veículos.

3. Desenvolver endpoints de API para realizar as operações CRUD (Create, Read, Update, Delete) dos veículos.

4. Implementar a estrutura de dados dos veículos conforme descrito abaixo.

5. Testar a API e garantir que todas as operações funcionem corretamente.

6. Documentar o projeto, incluindo instruções de uso e informações de configuração.

## Recursos

Abaixo fornecemos os recursos que você deve usar para realizar o seu projeto.

### Banco de dados MySQL

```bash
mkdir /tmp/mysql-data
docker run --name basic-mysql --rm -v /tmp/mysql-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=ANSKk08aPEDbFjDO -e MYSQL_DATABASE=testing -p 3307:3306 -it mysql:8.0
```

### Endpoints da API

O projeto fornece os seguintes endpoints para gerenciar veículos:

- `GET /veiculos`: Retorna a lista de todos os veículos.
- `GET /veiculos/:id`: Retorna os detalhes de um veículo específico com base no ID.
- `POST /veiculos`: Cria um novo veículo.
- `PUT /veiculos/:id`: Atualiza os detalhes de um veículo existente com base no ID.
- `DELETE /veiculos/:id`: Exclui um veículo com base no ID.

A estrutura de um objeto de veículo é a seguinte:

```json
{
 "id": "cd99557a-8750-463e-a3fa-7f7bd9ecf37a",
 "locadora": "Movida",
 "modelo": "Virtus",
 "marca": "Volkswagen",
 "ano": 2023,
 "motor": "1.0",
 "portas": 4,
 "cambio": "Automatico",
 "ar_condicionado": true,
 "updatedAt": "2023-10-23T14:37:35.917Z",
 "createdAt": "2023-10-23T14:37:35.917Z"
}
```

## Critérios de Avaliação

A avaliação será baseada nos seguintes critérios:

- Conformidade com os requisitos do projeto.
- Qualidade do código, incluindo organização, legibilidade e boas práticas.
- Funcionalidade correta e completa das operações CRUD.
- Documentação clara e instruções de uso.

## Entrega

Você deve entregar o projeto em um repositório Git (por exemplo, no GitHub) até a data limite especificada. Certifique-se de incluir um README atualizado no repositório que explique como configurar e executar o projeto.

## Prazo

O prazo para a entrega deste desafio é **TBD**.

Boa sorte e divirta-se desenvolvendo o projeto! Se tiver alguma dúvida, não hesite em entrar em contato. Estamos ansiosos para ver suas soluções.
