programa {
    funcao inicio() {
        inteiro dados[3][3]

        para (inteiro l = 0; l < 3; l++) {
            para (inteiro c = 0; c < 3; c++) {
                escreva("Digite valor [", l, "][", c, "]: ")
                leia(dados[l][c])
            }
        }

        escreva("\nTabela:\n")
        para (inteiro l = 0; l < 3; l++) {
            para (inteiro c = 0; c < 3; c++) {
                escreva(dados[l][c], " ")
            }
            escreva("\n")
        }

        inteiro somaX = 0
        inteiro somaY = 0
        inteiro somaZ = 0

        para (inteiro l = 0; l < 3; l++) {
            para (inteiro c = 0; c < 3; c++) {

                se (l == 0) {
                    somaX = somaX + dados[l][c]
                }
                senao se (l == 1) {
                    somaY = somaY + dados[l][c]
                }
                senao {
                    somaZ = somaZ + dados[l][c]
                }

            }
        }

       escreva("\nSoma X (linha 0): ", somaX, "\n")
       escreva("Soma Y (linha 1): ", somaY, "\n")
       escreva("Soma Z (linha 2): ", somaZ, "\n")
    }
}