programa {
  funcao inicio() {
    inteiro dados[3][4]

    para(inteiro l = 0; l < 3; l++){
      para(inteiro c = 0; c < 4; c++){
        escreva("Digite valor [", l, "][", c, "]: ")
        leia(dados[l][c])
      }
    }
    inteiro maior = dados[0][0]
    inteiro menor = dados[0][0]

    para(inteiro l = 0; l < 3; l++){
      para(inteiro c = 0 ; c < 4; c++){
        se (dados[l][c] > maior){
          maior = dados[l][c]
        }
        se(dados[l][c] < menor ){
          menor = dados [l][c]
        }
      }
    }
    escreva("\n Maior Valor: ", maior, "\n")
    escreva("Menor Valor: ", menor)
  }
}