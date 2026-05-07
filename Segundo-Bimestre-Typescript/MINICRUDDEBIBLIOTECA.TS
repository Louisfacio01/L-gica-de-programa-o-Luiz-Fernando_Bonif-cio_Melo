import promptSync from 'prompt-sync';
const prompt = promptSync();

interface Livro {
    id: number;
    titulo: string;
    autor: string;
    disponivel: boolean;
}

const biblioteca: Livro[] = [];

biblioteca.push({ id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis", disponivel: true });
biblioteca.push({ id: 2, titulo: "O Alquimista", autor: "Paulo Coelho", disponivel: true });
biblioteca.push({ id: 3, titulo: "1984", autor: "George Orwell", disponivel: false });
biblioteca.push({ id: 4, titulo: "O Hobbit", autor: "J.R.R. Tolkien", disponivel: true });
biblioteca.push({ id: 5, titulo: "Clean Code", autor: "Robert Martin", disponivel: true });
biblioteca.push({ id: 6, titulo: "TypeScript Moderno", autor: "Luiz Fernando", disponivel: true });

let continuar = true;

while (continuar) {
    console.log(`
    --- SISTEMA DA BIBLIOTECA ---
    1. Cadastrar | 2. Listar | 3. Emprestar | 4. Devolver | 5. Sair
    `);

    const opcao = prompt("Escolha: ");

    if (opcao === "1") {
        const id = Number(prompt("ID: "));
        const titulo = prompt("Título: ");
        const autor = prompt("Autor: ");
        biblioteca.push({ id, titulo, autor, disponivel: true });
        console.log("Cadastrado com sucesso!");

    } else if (opcao === "2") {
        console.log("\n--- LISTA DE LIVROS NO SISTEMA ---");
        for (let i = 0; i < biblioteca.length; i++) {

            const status = biblioteca[i].disponivel ? "DISPONÍVEL" : "EMPRESTADO";
            console.log(`[ID: ${biblioteca[i].id}] Livro: ${biblioteca[i].titulo} | Status: ${status}`);
        }

    } else if (opcao === "3") {
        const idBusca = Number(prompt("ID para empréstimo: "));
        const livro = biblioteca.find(l => l.id === idBusca);

        if (livro && livro.disponivel) {
            livro.disponivel = false;
            console.log(`Sucesso! Você pegou: ${livro.titulo}`);
        } else {
            console.log("Atenção: Livro não disponível ou ID inexistente!");
        }

    } else if (opcao === "4") {
        const idBusca = Number(prompt("ID para devolução: "));
        const livro = biblioteca.find(l => l.id === idBusca);

        if (livro) {
            livro.disponivel = true;
            console.log(`Obrigado! "${livro.titulo}" está de volta na estante.`);
        } else {
            console.log("Erro: Livro não identificado.");
        }

    } else if (opcao === "5") {
        continuar = false;
        console.log("Encerrando...");
    }
}