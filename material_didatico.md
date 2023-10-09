# Texto Base

Esse texto apresenta um introdutório dos aspectos relacionados ao desenvolvimento web. Esses aspectos são divididos em duas vertentes, _frontend_ e _backend_.

## FrontEnd

### HTML - Estrutura Básica
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu Projeto</title>
</head>
<body>
  <!-- Conteúdo do projeto aqui -->

</body>
</html>
```

### Tags Adicionais
- `<div>`: Bloco de divisão para estruturar o layout.
- `<span>`: Pequena unidade de texto sem formatação específica.
- `<form>`: Inicia um formulário.
- `<input>`: Caixa de entrada para formulários.
- `<select>`, `<option>`: Criar listas suspensas.

### CSS (Cascading Style Sheets)
### Estilizando Elementos
```css
body {
  font-family: 'Roboto', sans-serif;
  background-color: #f8f8f8;
  color: #333;
  margin: 0;
  padding: 0;
}

.container {
  width: 80%;
  margin: auto;
}

header {
  background-color: #007bff;
  color: #fff;
  padding: 1rem 0;
  text-align: center;
}

button {
  background-color: #4caf50;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
}
```

### JavaScript
### Manipulação Simples de DOM
```html
<!-- HTML -->
<button onclick="mostrarMensagem()">Clique-me</button>

<script>
  // JavaScript
  function mostrarMensagem() {
    alert("Olá, estagiário!");
  }
</script>
```

### Eventos e Formulários
```html
<!-- HTML -->
<form onsubmit="validarForm()">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" required>
  
  <input type="submit" value="Enviar">
</form>

<script>
  // JavaScript
  function validarForm() {
    // Lógica de validação aqui
  }
</script>
```

Este projeto inicial oferece uma estrutura HTML mais completa, introduzindo novas tags como `<div>`, `<span>`, `<form>`, `<input>`, `<select>`, `<option>`, e aprimora o estilo CSS para criar um layout mais agradável. O exemplo JavaScript demonstra tanto manipulação de DOM quanto a validação de formulário.


## Backend


Quando se fala em termos de web, frontend e backend são termos recorrentes. O frontend consiste em código que é processado no lado do cliente (ou seja, no navegador de quem está acessando o website). Já o backend faz referência a códigos que são executados a nível de servidor.


Existem linguagens que são utilizadas no backend, tais como: Node JS, Java, PHP e Python. Neste texto vamos trabalhar com Node JS.


### O que será feito


Vamos construir uma API REST. Esse serviço deve ser capaz de executar as quatro operações básicas: GET, POST, PUT e DELETE. Essas operações serão feitas sobre uma tabela que chamaremos de `firms`. Em outros termos, é uma tabela de _firmas_ que possui as seguintes colunas: name (nome), address (endereço), descrição (description).


### Especificações Técnicas


Esse tutorial deve ser feito de preferência em um computador com Linux (Ubuntu, Debian, Mint - afinal você quer se tornar um dev web, não é mesmo?), com Node JS LTS (versão 18) e o npm
(instalador de pacotes Node).


Você também deverá ter o _docker_ configurado em sua máquina uma vez que esse serviço consegue containerizar serviços, tal como um banco de dados em MySQL.


### Iniciando a aplicação


O primeiro ponto consiste em iniciar o banco de dados. Para isso abra um terminal do seu computador e digite o seguinte comando (supondo que o Docker esteja instalado em sua máquina):


```
mkdir /tmp/mysql-data
docker run --name basic-mysql --rm -v /tmp/mysql-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=ANSKk08aPEDbFjDO -e MYSQL_DATABASE=testing -p 3307:3306 -it mysql:8.0
```


Neste caso você está executando duas operações:


1 - criando uma pata, em tmp, chamada mysql-data
2 - criando o container de um banco de dados em MySQL com a base chamada 'testing', na porta 3307, usuário root e a senha ANSKk08aPEDbFjDO.


Após isso, crie um diretório em algum lugar de seu computador (se você estiver usando linux, use o comando `mkdir`) chamado my_app.




```
mkdir my_app
```




Acesse esse diretório `cd my_app`


Digite os seguintes comandos:




```
npm install express
```


Express é a biblioteca que usaremos para fazer a camada HTTP e REST do serviço. Digite também o seguinte comando:


```
npm install sequelize
```




A _lib sequelize_ é um _ORM_ utilizada para fazer a interface com o banco de dados.




Após a execução desse processo observe que foi criado uma pasta chamada node_modules, que é onde os pacotes são armazenados. Não apenas isso, como também foi criado um arquivo chamado _package.json_. Este, por sua vez, contêm informações envolvendo a versão dos pacotes, comandos de execução, entre outras questões que situam a aplicação.


Execute também o seguinte comando


```
npm install nodemon
```


Com essa biblioteca não há necessidade de ficar derrubando a api toda vez que a atualização de código acontecer. Para isso, dentro de package.json crie a seguinte estrutura:




```
...
"scripts": {
    "start": "./node_modules/nodemon/bin/nodemon.js index.js "
},
"dependencies": {
"express": "^4.18.2",
...
```


Ou seja, adicione o atributo _scripts_ com o apontamento para script de nodemon. Feito isso, a subida da api se dá por executar o seguinte comando: `npm run start`na raiz do projeto.


### Criando a estrutura


Como você pode observar no atributo _scripts_ dentro do package.json - o comando _start_ aponta para o arquivo _index.js_. Logo, crie esse arquivo na raiz do projeto.


Faça as importações dos serviços necessários, da seguinte forma:


```
const sequelize = require('sequelize')
const express = require('express')
```


feito isso, acesse o objeto `Sequelize` dentro do atributo `sequelize`, da seguinte forma:


```
const Sequelize = sequelize.Sequelize
```


Então faça um `new` dessa classe criando seu objeto, assim:


```
const connection = new Sequelize(
    'testing',
    'root',
    'ANSKk08aPEDbFjDO',
    {
        dialect: "mysql",
        host: 'localhost',
    port: 3307
    }
);
```


Observe que os atributos passados nessa classe são os dados do banco. Esses atributos também podem ser fornecidos por meio de um .env (assim é mais elegante).


Uma vez feito isso, vamos criar a `model` (classe que representa a tabela dentro banco de dados).


```


const Firm = connection.define('firm', {
    name: {
        type: Sequelize.STRING,
    },
    address: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.TEXT
    }
})


connection.sync({force: true})
```


É digno de nota que a tabela não precisa existir dentro do banco de dados, pois a execução da model efetua essa criação automaticamente em `connection.sync({force: true})`.




Feito isso, podemos iniciar a camada HTTP/REST do serviço - isso é feito na seguinte operação:


```
const app = express()
```


Como os serviços mais modernos se comunicam usando JSON, vamos anexar a seguinte linha


```
app.use(express.json());
```


para que o nosso serviço seja capaz de usar essa operacionalidade.


### POST


Dentro de uma API REST, o verbo _POST_ é utilizado para realizar o registro de dados. Neste caso queremos fazer o registro de uma informação no banco de dados. Para isso, podemos adicionar o seguinte código:




```


app.post('/', (req, res) => {
    const resp = {}

    try {
        Firm.build(req.body).save()
        resp.status = "ok"
    } catch (error) {
        resp.status = 'fail'
    }

    res.json(resp)
})
```


O `try catch` fornece uma tentativa de erro. Mediante a model _Firm_ efetuamos o insert dos dados. Os atributos do JSON passado para a model devem possuir os mesmos nomes das colunas da tabela.


Segue a estrutura do curl (você pode importar no Postman para avaliar o formato).




```
curl --location 'localhost:3000' \
--header 'Content-Type: application/json' \
--data '{
"name":"Matilha Feliz",
"address":"Endereço 1",
"description": "Melhor Pet do Mundo"
}'
```


__Observação__ para tornar a api operacional deste já, adicione no final do script (e essa informação deve ficar sempre no final) as seguintes linha de código:


```


const port = 3000

app.listen(port, () => {
  console.log(`On port ${port}`)
})
```


E então efetue um _start_ do serviço.




### GET
Rotas GET são feitas para efetuar consulta de algum dado. Para acessar esses dados escritos na tabela, podemos criar a seguinte rota:




```
app.get('/', (req, res) => {
    const resp = {}

    try {
        Firm.findAll()
        .then(e => {
            res.json(e)
        })
        
    } catch (error) {
        resp.status = 'fail'

        res.json(resp)
    }
})
```


Neste caso, todos os registros estarão retornando para o cliente final. Pense como você pode melhorar esse retorno adicionando paginação.


### GET com pesquisa por id


Uma rota get com pesquisa por id pode ser feita da seguinte forma.


```
app.get('/:id', (req, res) => {
    const resp = {}

    try {
        Firm.findAll({
            where:{
                id:req.params.id
            }
        })
        .then(e => {
            res.json(e)
        })
        
    } catch (error) {
        console.log(error)
        resp.status = 'fail'

        res.json(resp)
    }
})
```

### O código como um todo


```
const sequelize = require('sequelize')
const express = require('express')

const Sequelize = sequelize.Sequelize 

const connection = new Sequelize(
    'testing',
    'root',
    'ANSKk08aPEDbFjDO', 
    {
        dialect: "mysql",
        host: 'localhost',
        port: 3307
    }
);

const Firm = connection.define('firm', {
  name: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT
  }
})

connection.sync({force: true}) //sync to your database!


const app = express()
app.use(express.json());


app.get('/', (req, res) => {
    const resp = {}

    try {
        Firm.findAll()
        .then(e => {
            res.json(e)
        })
        
    } catch (error) {
        resp.status = 'fail'

        res.json(resp)
    }
})

app.get('/:id', (req, res) => {
    const resp = {}

    try {
        Firm.findAll({
            where:{
                id:req.params.id
            }
        })
        .then(e => {
            res.json(e)
        })
        
    } catch (error) {
        console.log(error)
        resp.status = 'fail'

        res.json(resp)
    }
})

app.post('/', (req, res) => {
    const resp = {}

    try {
        Firm.build(req.body).save()
        resp.status = "ok"
    } catch (error) {
        resp.status = 'fail'
    }

    res.json(resp)
})


app.put('/:id', (req, res) => {
    const resp = {}

    try {
        Firm.findOne({
            where:{
                id:req.params.id
            }
        })
        .then(e => {
            e.update(req.body)
            
            res.json(e)
        })
        
    } catch (error) {
        resp.status = 'fail'

        res.json(resp)
    }
})

app.delete('/:id', (req, res) => {
    let resp = {}

    try {
        Campus.destroy({
            where:{
                id:req.params.id
            }
        })
  
        resp = {
            status:'ok'
        }
    } catch (error) {
        resp.status = 'fail'

        res.json(resp)
    }

    res.json(resp)
})

const port = 3000

app.listen(port, () => {
  console.log(`On port ${port}`)
})
```