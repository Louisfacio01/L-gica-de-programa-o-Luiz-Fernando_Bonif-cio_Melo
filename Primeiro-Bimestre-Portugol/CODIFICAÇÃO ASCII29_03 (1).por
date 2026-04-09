programa {
  funcao inicio() {
    inteiro m[3][3]
inteiro somaASCII = 1200

para (inteiro i = 0; i < 3; i++) {
    para (inteiro j = 0; j < 3; j++) {
        m[i][j] = 0
    }
}

para (inteiro i = 0; i < 3; i++) {
    m[i][1] = somaASCII
}

para (inteiro i = 0; i < 3; i++) {
    para (inteiro j = 0; j < 3; j++) {
        escreva(m[i][j], " ")
    }
    escreva("\n")
}
  }
}
