programa {
  funcao inicio() {
    inteiro m[3][3]
inteiro soma = 0
inteiro cont = 0

para (inteiro i = 0; i < 3; i++) {
    para (inteiro j = 0; j < 3; j++) {
        leia(m[i][j])

        se (m[i][j] > 5 e m[i][j] % 2 != 0) {
            soma = soma + m[i][j]
        }
    }
}

se (cont > 0) {
    escreva("Media: ", soma / cont)
} senao {
    escreva("Nenhum valor valido")
}
  }
}
