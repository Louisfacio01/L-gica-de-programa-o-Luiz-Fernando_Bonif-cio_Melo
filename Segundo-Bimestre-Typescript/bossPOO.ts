import PromptSync from "prompt-sync";
const prompt = PromptSync()

interface Automovel {
    id: number;
    marca: string;
    modelo: string;
    valorDia: number;
    liberado: boolean;
}

const frota: Automovel[] = [];

frota.push({ id: 1, marca: "Toyota", modelo: "Corolla", valorDia: 250, liberado: true });
frota.push({ id: 2, marca: "Honda", modelo: "Civic", valorDia: 240, liberado: true });
frota.push({ id: 3, marca: "Fiat", modelo: "Uno", valorDia: 80, liberado: false });
frota.push({ id: 4, marca: "VW", modelo: "Gol", valorDia: 100, liberado: true });
frota.push({ id: 5, marca: "Chevrolet", modelo: "Onix", valorDia: 120, liberado: true });
frota.push({ id: 6, marca: "Hyundai", modelo: "HB20", valorDia: 110, liberado: false });
frota.push({ id: 7, marca: "Jeep", modelo: "Renegade", valorDia: 200, liberado: true });

console.log("ola, seja bem-vindo ao luizmotors");

const cadastr =  Number(prompt("gostaria de fazer:\nCadastro = (0) \nListar todos = (1) \nListar disponiveis = (2) \nAlugar = (3) \nDevolver = (4) \nRemover = (5) ou Sair = (6) \nRESPONDA AQUI===> "));


if(cadastr === 0){

          console.log("QUE OTIMO!!!!!!\n");
          console.log("Primeiro, qual a marca do seu carro?\n");

          const respost0 =  Number(prompt("toyota (0)\n Honda(1)\n Fiat(2)\n VW(3)\C hevrolet(4)\n Hyundai(5)\n Jeep(6) \nESCREVA SEU CARRO AQUI ==> "));

                              if(respost0 > 0){

                                        console.log("CADASTRO CONCLUIDO");
                              };

}

else if(cadastr === 1){

    console.log(frota);

}

else if (cadastr === 2){

          for(let i = 0; i < frota.length; i++){

                    if(frota[i]?.liberado == true){

                        console.log(`DISPONIVEIS: | ${frota[i]?.marca} | ${frota[i]?.modelo} | ${frota[i]?.liberado  == true}`);

                    };

          };
}

else if (cadastr === 3){

                    const perguntAlug = Number(prompt("Qual marca de carro você gostaria ??\n toyota (0)\n Honda(1)\n Fiat(2)\n VW(3)\n hevrolet(4)\n Hyundai(5)\n Jeep(6) \nESCREVA SEU CARRO AQUI ==> "));

                              if(perguntAlug > 0){

                                        for(let i = 0; i < 1; i++){

                                                  frota[i]?.liberado==false;
                                                  console.log("CARRO FOI AGENDADO PARA DATA....");
                              };
          };
}

else if (cadastr === 4){

                    const perguntAlug = Number(prompt("Qual marca e o nome do carro que você gostaria de devolver ?? \n toyota (0)\n Honda(1)\n Fiat(2)\n VW(3)\C hevrolet(4)\n Hyundai(5)\n Jeep(6) \nESCREVA SEU CARRO AQUI ==>  "));

                              if(perguntAlug >= 0){

                                        for(let i = 0; i < 1; i++){

                                                  frota[i]?.liberado==true;
                                                  console.log(frota);
                                                  console.log("CARRO FOI DEVOLVIDO....");
                              };
          };
}

else if (cadastr === 5){

                    for(let i = 0; i < frota.length; i++){
                              console.log(frota[i]?.marca, "|", frota[i]?.modelo);

                    };

          const lixeira = Number(prompt("QUAL CADASTRO VOCE GOSTARIA DE APAGAR: \n toyota (0)\n Honda(1)\n Fiat(2)\n VW(3)\C hevrolet(4)\n Hyundai(5)\n Jeep(6) \nESCREVA SEU CARRO AQUI ==> ",));

                    frota.splice(lixeira, 1);
                    console.log("SEU CADASTRO FOI EXCLUIDO COM SUCESSO");
                    console.log(frota);

}

else (cadastr === 6)
    console.log("APP FINALIZADO");