programa {
    funcao inicio() {
        inteiro dados[4][4]
        inteiro contador = 0

        para (inteiro l = 0; l < 4; l++) {
            para (inteiro c = 0; c < 4; c++) {
                escreva("Digite valor [", l, "][", c, "]: ")
                leia(dados[l][c])

                se (dados[l][c] % 2 != 0) {
                    contador++
                }
            }
        }

        escreva("Quantidade de numeros impares: ", contador)
    }
}