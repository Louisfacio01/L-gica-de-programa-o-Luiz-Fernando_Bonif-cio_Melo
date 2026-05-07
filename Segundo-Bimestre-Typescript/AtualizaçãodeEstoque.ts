interface ItemEstoque{
    id:number;
    nome:string;
    quantidade:number;
    minimo:number;
}

import promptSync from 'prompt-sync';
const prompt = promptSync();

const estoque:ItemEstoque[] = [];

estoque.push({
    id:1, nome:"notebook", minimo:5,  quantidade:7,
});

estoque.push({
    id:2, nome:"mouse", minimo:5,  quantidade:10, 
});

estoque.push({
    id:4, nome:"gabinete", minimo:1, quantidade:3,
});

estoque.push({
    id:3, nome:"teclado", minimo:2,  quantidade:3, 
});


console.log("BEM VINDO AO ATACADOTECH");
console.log("INSTRUÇOES")
console.log("DIGITE ID = 1 PARA NOTEBOOKS");
console.log("Digite ID = 2 para mouse");
console.log("Digite ID = 3 para teclado");
console.log("Digite ID = 4 para gabinete");

const BUSCADOR = Number(prompt("ID: "));
const produtoEncontrado = estoque.find(produto => produto.id === BUSCADOR)

if(produtoEncontrado){
    console.log("PRODUTO ENCONTRADO NO CARRINHO");
    const Alterar = (prompt("Vocé gostaria de alterar a quantidade? ou remover o produto? (alterar/remover)"))
    if(Alterar === "alterar"){
        const novaQtd = Number(prompt("Digite a nova quantidade: "));
        produtoEncontrado.quantidade = novaQtd;
        console.log("quantidade atualizada", novaQtd)
    }

    //REMULO SERIO MN TIVE QUE USAR AJUDA DA IA NESSA AQ DE BAIXO O (.SPLICE)

    else if (Alterar === "remover") {
        const indice = estoque.indexOf(produtoEncontrado);
        estoque.splice(indice, 1);
        console.log("Produto removido do estoque!");
    
    }
};