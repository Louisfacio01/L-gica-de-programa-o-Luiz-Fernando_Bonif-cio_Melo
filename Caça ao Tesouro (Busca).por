programa {
    funcao inicio() {
        inteiro dados[4][4]
        inteiro alvo
        logico encontrado = falso

        para (inteiro l = 0; l < 4; l++) {
            para (inteiro c = 0; c < 4; c++) {
                escreva("Digite valor [", l, "][", c, "]: ")
                leia(dados[l][c])
            }
        }

        escreva("Digite o valor alvo: ")
        leia(alvo)

        para (inteiro l = 0; l < 4; l++) {
            para (inteiro c = 0; c < 4; c++) {
                se (dados[l][c] == alvo) {
                    escreva("Alvo encontrado na linha ", l, ", coluna ", c, "\n")
                    encontrado = verdadeiro
                }
            }
        }

        se (encontrado == falso) {
            escreva("Valor nao encontrado")
        }
    }
}