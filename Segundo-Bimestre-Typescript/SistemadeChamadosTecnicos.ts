interface atendimentos{
    id:number;
    solicitante:string;
    descricao: string;
    prioridade: 'Baixa' | 'Média' | 'Alta';
    resolvido: boolean;
};

const chamados:atendimentos[] = [];
chamados.push({
    id:1, solicitante: "Ana Silva", descricao: "Erro ao acessar o portal do colaborador.", prioridade: "Alta", resolvido: false
});

chamados.push({
  id: 2, solicitante: "Carlos Oliveira", descricao: "Solicitação de nova licença de software.", prioridade: "Baixa", resolvido: true
});

chamados.push({
  id: 3, solicitante: "Mariana Costa", descricao: "Internet lenta no setor de marketing.", prioridade: "Média", resolvido: false
});

chamados.push({
  id: 4, solicitante: "Roberto Souza", descricao: "Servidor de banco de dados offline.", prioridade: "Alta", resolvido: false
});

chamados.push({
  id: 5, solicitante: "Juliana Lima", descricao: "Troca de teclado e mouse.", prioridade: "Baixa", resolvido: true
});

chamados.push({
  id: 6, solicitante: "Fernando Dias", descricao: "Esqueci a senha do e-mail corporativo.", prioridade: "Alta", resolvido: false
});

for(let i = 0; i < chamados.length; i++){
    if(chamados[i].prioridade == 'Alta'){
        console.log("PRIORIDADE: ALTA");
        console.log("id: ", chamados[i].id, "," , "Nome: ", chamados[i].solicitante, "," ,"descrição:", chamados[i].descricao,"prioridade: ", chamados[i].prioridade, "," , "resolvidos: ", chamados[i].resolvido,".");
    }
    else if(chamados[i].prioridade == 'Média'){
        console.log("PRIORIDADE: MEDIA");
        console.log("id: ", chamados[i].id, "," , "Nome: ", chamados[i].solicitante, "," ,"descrição:", chamados[i].descricao,"prioridade: ", chamados[i].prioridade, "," , "resolvidos: ", chamados[i].resolvido,".");
    }

    else if(chamados[i].prioridade == 'Baixa'){
        console.log("PRIORIDADE: BAIXA");
        console.log("id: ", chamados[i].id, "," , "Nome: ", chamados[i].solicitante, "," ,"descrição:", chamados[i].descricao,"prioridade: ", chamados[i].prioridade, "," , "resolvidos: ", chamados[i].resolvido,".");
    };
    
};