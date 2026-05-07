import promptSync from 'prompt-sync';
const prompt = promptSync();

interface Item {
    id: number;
    nome: string;
    valor: number;
    ativo: boolean;
}

const catalogo: Item[] = [];

catalogo.push({ id: 1, nome: "Notebook", valor: 3500, ativo: true });
catalogo.push({ id: 2, nome: "Mouse Wireless", valor: 120, ativo: true });
catalogo.push({ id: 3, nome: "Monitor 24", valor: 900, ativo: false });
catalogo.push({ id: 4, nome: "Teclado Mecânico", valor: 250, ativo: true });
catalogo.push({ id: 5, nome: "Headset", valor: 180, ativo: true });
catalogo.push({ id: 6, nome: "Webcam HD", valor: 300, ativo: false });
catalogo.push({ id: 7, nome: "Suporte Articulado", valor: 150, ativo: true });

const exclusor = Number(prompt(" qual o ID que voce deseja apagar: "));
const BUSCADOR = catalogo.findIndex(produto => produto.id === exclusor);

if(exclusor > 0){
    catalogo.splice(BUSCADOR, 1)
    console.log("EXCLUIDO")
}

else if(exclusor < 0){
    console.log("nao existe")
};