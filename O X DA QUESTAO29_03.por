programa {
  funcao inicio() {
    inteiro m[5][5]

para (inteiro i = 0; i < 5; i++) {
    para (inteiro j = 0; j < 5; j++) {

        se (i == j) {
            m[i][j] = 25
        }

        se (i + j == 4) {
            se (i == j) {
                m[i][j] = 31
            } senao {
                m[i][j] = 6
            }
        }
    }
}

para (inteiro i = 0; i < 5; i++) {
    para (inteiro j = 0; j < 5; j++) {
        escreva(m[i][j], " ")
    }
    escreva("\n")
}
  }
}
