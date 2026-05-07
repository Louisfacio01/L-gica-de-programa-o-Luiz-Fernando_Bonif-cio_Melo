interface aluno{
    nome:string;
    nota1:number;
    nota2:number;
    turma:string;
};

const lista: aluno[] = [];

lista.push({
    nome:"Jose", nota1: 8, nota2: 10, turma:"A",
});

lista.push({
    nome:"Igor", nota1: 5, nota2: 10, turma:"A",
});

lista.push({
    nome:"Gustavo", nota1: 8, nota2: 8, turma:"A",
});

lista.push({
    nome:"Luiz", nota1: 10, nota2: 10, turma:"A",
});

lista.push({
    nome:"Pescocinho", nota1: 2, nota2: 3, turma:"A",
});


for(let i = 0; i < lista.length; i++){
    let media = lista[i].nota1 + lista[i].nota2 / 2;

    console.log(lista[i].nome, "notas =", "(", lista[i].nota1,")", "(", lista[i].nota1,")", "e sua media é: ", media);
};