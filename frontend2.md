# Projeto Inicial: HTML, CSS e JavaScript

## HTML (Hypertext Markup Language)
### Estrutura Básica
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

## CSS (Cascading Style Sheets)
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

## JavaScript
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
