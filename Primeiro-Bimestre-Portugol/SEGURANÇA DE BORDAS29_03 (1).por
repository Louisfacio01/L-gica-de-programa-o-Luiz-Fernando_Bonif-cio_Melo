programa {
  funcao inicio() {
    inteiro m[4][4]
inteiro soma = 0

para (inteiro i = 0; i < 4; i++) {
    para (inteiro j = 0; j < 4; j++) {
        leia(m[i][j])

        se (i == 0 ou i == 3 ou j == 0 ou j == 3) {
            soma = soma + m[i][j]
        }
    }
}

escreva("Soma das bordas: ", soma, "\n")

se (soma % 12 == 0) {
    escreva("Divisivel por 12, SIUUUUUUUUUUUUUUUUUUUUUU")
} senao {
    escreva("Nao divisivel, RONALDO TRISTE")
}
  }
}
