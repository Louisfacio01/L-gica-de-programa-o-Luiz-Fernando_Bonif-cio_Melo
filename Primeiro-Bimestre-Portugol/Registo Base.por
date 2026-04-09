programa {
  funcao inicio() {
    inteiro dados[2][2]

    para(inteiro l = 0; l < 2; l++) {

    para(inteiro c = 0; c < 2; c++) {
    escreva("Digite o valor para a posição [", l, "][", c, "]: ")
    leia(dados[l][c])
      
        }
    }

    escreva("\nTabela\n")

    para (inteiro l = 0; l < 2; l++){
      para(inteiro c = 0; c <  2; c++){
        escreva(dados[l][c], " ")
      }
      escreva("\n")
    }
  }
}
 