# Projeto Básico: Introdução a HTML, CSS e JavaScript

## HTML (Hypertext Markup Language)
### Tags Básicas
- `<html>`: Define o início e o fim do documento HTML.
- `<head>`: Contém informações sobre o documento, como o título.
- `<body>`: Contém o conteúdo principal do documento.
- `<h1>` a `<h6>`: Cabeçalhos, indicando a hierarquia do texto.
- `<p>`: Parágrafo.
- `<a>`: Link.
- `<img>`: Inserir imagens.
- `<ul>`, `<ol>`, `<li>`: Listas não ordenadas e ordenadas.

## CSS (Cascading Style Sheets)
### Conceitos Básicos
- Seletor: Identifica o elemento a ser estilizado.
- Propriedade: Atributo a ser estilizado.
- Valor: Valor da propriedade.

### Exemplo de Estilo
```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

h1 {
  color: #333;
}

p {
  font-size: 16px;
}

a {
  text-decoration: none;
  color: #0066cc;
}
```

## JavaScript
### Eventos
- `onclick`: Ativado quando um elemento é clicado.
- `onsubmit`: Ativado quando um formulário é enviado.

### Exemplo de Uso
```html
<button onclick="exibirMensagem()">Clique-me</button>

<form onsubmit="validarFormulario()">
  <!-- campos do formulário aqui -->
  <input type="submit" value="Enviar">
</form>

<script>
  function exibirMensagem() {
    alert("Botão clicado!");
  }

  function validarFormulario() {
    // lógica de validação aqui
  }
</script>
```

Este README fornece uma introdução básica a HTML, CSS e JavaScript, cobrindo tags essenciais, conceitos de estilização e exemplos simples de eventos em JavaScript. Ideal para estagiários começando a explorar o desenvolvimento web.
