programa {
  funcao inicio() {
    inteiro dados[4][4]

    para(inteiro l = 0; l < 4; l++){
      para(inteiro c = 0; c < 4; c++){
        escreva("Digite valor [", l, "][", c, "]: ")
        leia(dados[l][c])
      }
    }
    escreva("\nDiagonal Principal:\n")

    para (inteiro l = 0; l < 4; l++){
      para(inteiro c = 0; c < 4; c++){
        se (l == c){
          escreva(dados [l][c], " ")
        }
      }
    }
  }
}
