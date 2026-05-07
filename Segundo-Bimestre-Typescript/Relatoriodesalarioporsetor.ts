import promptSync from 'prompt-sync';
const prompt = promptSync();

interface Colaborador {
    id: number;
    nome: string;
    setor: string;
    salario: number;
}

const colaboradores: Colaborador[] = [];

colaboradores.push({ id: 1, nome: "Ana Silva", setor: "RH", salario: 3500 });
colaboradores.push({ id: 2, nome: "Pedro Lima", setor: "TI", salario: 5000 });
colaboradores.push({ id: 3, nome: "Carla Souza", setor: "TI", salario: 4500 });
colaboradores.push({ id: 4, nome: "Marcos Rocha", setor: "Vendas", salario: 2800 });
colaboradores.push({ id: 5, nome: "Julia Mendes", setor: "RH", salario: 3200 });
colaboradores.push({ id: 6, nome: "Roberto Dias", setor: "Financeiro", salario: 4000 });
colaboradores.push({ id: 7, nome: "Fernanda Luz", setor: "Vendas", salario: 3100 });

let somaSalarios = 0;
for (let i = 0; i < colaboradores.length; i++) {
    somaSalarios += colaboradores[i].salario;
}

console.log("Total gasto com salários: R$ " + somaSalarios);

const setorBusca = prompt("Digite o setor para filtrar: ");

const filtrados = colaboradores.filter(c => c.setor === setorBusca);

if (filtrados.length > 0) {
    console.log("Colaboradores do setor " + setorBusca + ":");
    console.log(filtrados);
} else {
    console.log("Nenhum colaborador encontrado nesse setor.");
}