programa {
  funcao inicio() {
    inteiro m[4][4]
inteiro cont = 0

para (inteiro i = 0; i < 4; i++) {
    para (inteiro j = 0; j < 4; j++) {
        leia(m[i][j])

        se (m[i][j] > 10) {
            cont++
        }
    }
}

se (cont > 4) {
    escreva("Densidade Alta")
} senao {
    escreva("Sistema Estavel")
}
  }
}
