# Organize a estrutura do meu projeto

Atualmente tenho a seguinte estrutura:
```
root-
  |- about.md
  |- contacts.md
  |- index.html
  |- readme.md
  |- script.js
  |- style.css

```

Quero a seguinte estrutura:
```
root-
  |- assets/
    |- imgs/
    |- contents/
      |- home.md
      |- about.md
      |- contacts.md
  |- src/
    |- app.js
    |- pages/
  |- styles/
    |- style.css
  |- readme.md
  |- index.html

```

script.js:
```
async function renderMarkdown(page) {
    try {
        const response = await fetch(`${page}.md`);
        if (!response.ok) {
            throw new Error(`Erro ao buscar o arquivo: ${response.statusText}`);
        }
        const markdown = await response.text();
        const htmlContent = marked.parse(markdown);
        document.getElementById('content').innerHTML = htmlContent;
    } catch (error) {
        console.error('Falha ao renderizar o Markdown:', error);
        document.getElementById('content').innerHTML = `<p>Ocorreu um erro ao carregar o conteúdo.</p>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderMarkdown('readme');

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = event.target.dataset.page;
            renderMarkdown(page);
        });
    });
});

```
index.html:
```
<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enock</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <header>
    <nav>
      <ul>
        <li><a href="#" data-page="readme">Home</a></li>
        <li><a href="#" data-page="about">Sobre</a></li>
        <li><a href="#" data-page="contacts">Contato</a></li>
      </ul>
    </nav>
  </header>

  <main id="content">
  </main>

  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <script src="script.js"></script>
</body>

</html>

```

style.css:
```
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
}

header {
    background: #333;
    color: #fff;
    padding: 1rem 0;
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
}

nav li {
    margin: 0 15px;
}

nav a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
}

nav a:hover {
    color: #ffd700;
}

main {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

h1, h2, h3 {
    color: #333;
}

/* Adicione estilos para elementos de markdown, como links, listas, etc. */
a {
    color: #007bff;
}

ul, ol {
    margin-bottom: 1rem;
}

```