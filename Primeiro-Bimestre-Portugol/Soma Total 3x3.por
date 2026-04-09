programa {
  funcao inicio() {
    inteiro dados[3][3]

    para(inteiro l = 0; l < 3; l++) {
       para(inteiro c = 0; c < 3; c++) {
    escreva("Digite o valor para a posição [", l, "][", c, "]: ")
    leia(dados[l][c])
      
        }
    }

    escreva("\nTabela\n")

    para (inteiro l = 0; l < 3; l++){
      para(inteiro c = 0; c <  3; c++){
        escreva(dados[l][c], " ")
      }
      escreva("\n")
    }
    inteiro soma = 0

    para(inteiro l = 0; l < 3; l++){
      para(inteiro c = 0; c < 3; c++){
        soma = soma + dados[l][c]
      }
    }
    escreva("Soma Total: ", soma)
  }
}
 