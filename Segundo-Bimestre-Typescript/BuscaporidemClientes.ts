interface UsuarioCliente {
    id: number;
    nome: string;
    email: string;
    ativo: boolean;
};
import promptSync from 'prompt-sync';
const prompt = promptSync();

 // BUSCADOR DO DEMOIN CREDOOOOOO TREM CHATO DO CAPIROTOOOOO REMULOOOOOOOOOO    

const clientes: UsuarioCliente[] = [];

clientes.push({
    id: 1, nome: "Ricardo Almeida", email: "ricardo.a@email.com", ativo: true
});

clientes.push({
    id: 2, nome: "Beatriz Soares", email: "b.soares@email.com", ativo: false
});

clientes.push({
    id: 3, nome: "Lucas Mendes", email: "lucas.m@email.com", ativo: true
});

clientes.push({
    id: 4, nome: "Fernanda Rocha", email: "f.rocha@email.com", ativo: true
});

clientes.push({
    id: 5, nome: "Tiago Souza", email: "tiago.s@email.com", ativo: false
});

clientes.push({
    id: 6, nome: "Camila Nunes", email: "camila.n@email.com", ativo: true
});


const IDserch = Number(prompt("Qual é o ID que você gostaria de procurar:"));

const clienteEncontrado = clientes.find(cliente => cliente.id === IDserch);

if(clienteEncontrado){
    console.log("cliente localizado");
    console.log(clienteEncontrado.nome, "|", clienteEncontrado.email, "|", "ativo:", clienteEncontrado.ativo, "|", clienteEncontrado.id);
}
else{
    console.log("clientenao encontrado");
};