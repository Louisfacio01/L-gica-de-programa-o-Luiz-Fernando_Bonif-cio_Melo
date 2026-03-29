programa {
  funcao inicio() {
    inteiro m[4][4]

para (inteiro i = 0; i < 4; i++) {
    para (inteiro j = 0; j < 4; j++) {
        se (i + j == 2) {
            m[i][j] = 10
        } senao {
            m[i][j] = 0
        }
    }
}

para (inteiro i = 0; i < 4; i++) {
    para (inteiro j = 0; j < 4; j++) {
        escreva(m[i][j], " ")
    }
    escreva("\n")
}
  }
}
