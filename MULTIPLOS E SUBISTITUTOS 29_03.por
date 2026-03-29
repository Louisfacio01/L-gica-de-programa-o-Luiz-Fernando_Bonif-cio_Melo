programa {
  funcao inicio() {
    inteiro m[4][4]
inteiro cont = 0

para (inteiro i = 0; i < 4; i++) {
    para (inteiro j = 0; j < 4; j++) {
        leia(m[i][j])

        se (m[i][j] % 2 == 0) {
            m[i][j] = 76
            cont++
        }
    }
}

escreva("Trocados: ", cont, "\n")

para (inteiro i = 0; i < 4; i++) {
    para (inteiro j = 0; j < 4; j++) {
        escreva(m[i][j], " ")
    }
    escreva("\n")
}
  }
}
