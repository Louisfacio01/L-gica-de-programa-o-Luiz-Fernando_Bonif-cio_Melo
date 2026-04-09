programa {
  funcao inicio() {
    inteiro dados[2][3]

    para(inteiro l = 0; l < 2; l++){
      para(inteiro c = 0; c < 3; c++){
        escreva("Digite valor [", l, "][", c, "]: ")
        leia(dados[l][c])
      }
    }
    para(inteiro l = 0; l < 2; l++){
      para(inteiro c = 0; c < 3; c++){
        dados[l][c] = dados [l][c] * 2
      }
    }
    escreva("\n Matriz Final: \n")

    para(inteiro l = 0; l < 2; l++){
      para(inteiro c = 0 ; c < 3; c++){
        escreva(dados[l][c], " ")
      }
      escreva("\n")
    }
  }
}