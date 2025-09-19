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