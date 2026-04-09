programa {
  funcao inicio() {
    inteiro m[3][3]
inteiro menor

para (inteiro i = 0; i < 3; i++) {
    para (inteiro j = 0; j < 3; j++) {
        leia(m[i][j])
    }
}

menor = m[0][0]

para (inteiro i = 0; i < 3; i++) {
    para (inteiro j = 0; j < 3; j++) {
        se (m[i][j] < menor) {
            menor = m[i][j]
        }
    }
}

escreva("Menor: ", menor, "\n")

se (menor * 13 > m[0][0]) {
    escreva("Condicao verdadeira")
} senao {
    escreva("Condicao falsa")
}
  }
}
