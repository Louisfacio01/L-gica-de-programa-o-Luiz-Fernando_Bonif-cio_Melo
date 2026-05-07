interface catalogo {
    id:number;
    nome:string;
    valor:number;
    tipo:string;
};

const produtos: catalogo [] = [];

produtos.push({ id: 1, nome: "Teclado", valor: 120, tipo: "Periférico" });
produtos.push({ id: 2, nome: "Mouse", valor: 80, tipo: "Periférico" });
produtos.push({ id: 3, nome: "Monitor", valor: 900, tipo: "Hardware" });
produtos.push({ id: 4, nome: "Gabinete", valor: 250, tipo: "Hardware" });
produtos.push({ id: 5, nome: "Headset", valor: 200, tipo: "Áudio" });
produtos.push({ id: 6, nome: "Webcam", valor: 150, tipo: "Vídeo" });
produtos.push({ id: 7, nome: "Impressora", valor: 600, tipo: "Periférico" });

for(let i = 0; i < produtos.length; i++){
    if(produtos[i].valor > 100){
        console.log("produtos com valor maior que 100 reis reis.","id:",produtos[i].id,",", produtos[i].nome,",", produtos[i].tipo,",", produtos[i].valor,",")
    };
};

//simmmmmm remulo eu fiz esse negocio da , um por um nao foi IA