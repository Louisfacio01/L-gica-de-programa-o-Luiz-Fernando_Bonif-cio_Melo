import promptSync from 'prompt-sync';
const prompt = promptSync();

interface Pedido {
    id: number;
    cliente: string;
    valor: number;
    status: 'pendente' | 'enviado' | 'cancelado';
}

const pedidos: Pedido[] = [];

pedidos.push({ id: 1, cliente: "Lucas", valor: 150, status: "enviado" });
pedidos.push({ id: 2, cliente: "Maria", valor: 300, status: "pendente" });
pedidos.push({ id: 3, cliente: "Jose", valor: 50, status: "cancelado" });
pedidos.push({ id: 4, cliente: "Ana", valor: 200, status: "enviado" });

let totalEnviados = 0;
for (let i = 0; i < pedidos.length; i++) {
    if (pedidos[i].status === "enviado") {
        totalEnviados += pedidos[i].valor;
    }
}
console.log("Total financeiro de pedidos enviados: R$ " + totalEnviados);

const buscarId = Number(prompt("Digite o ID do pedido para alterar status: "));
const pedidoParaAlterar = pedidos.find(p => p.id === buscarId);

if (pedidoParaAlterar) {
    const novoStatus = prompt("Novo status (pendente/enviado/cancelado): ");
    pedidoParaAlterar.status = novoStatus as any;
    console.log("Status atualizado com sucesso!");
    console.log(pedidoParaAlterar);
} else {
    console.log("Pedido não encontrado.");
}