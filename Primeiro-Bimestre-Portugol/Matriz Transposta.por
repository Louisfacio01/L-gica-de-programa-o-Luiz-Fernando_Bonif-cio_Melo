programa {
    funcao inicio() {
        inteiro A[2][3]
        inteiro B[3][2]

        para (inteiro l = 0; l < 2; l++) {
            para (inteiro c = 0; c < 3; c++) {
                escreva("Digite valor [", l, "][", c, "]: ")
                leia(A[l][c])
            }
        }

        para (inteiro l = 0; l < 2; l++) {
            para (inteiro c = 0; c < 3; c++) {
                B[c][l] = A[l][c]
            }
        }

        escreva("\nMatriz B (Transposta):\n")

        para (inteiro l = 0; l < 3; l++) {
            para (inteiro c = 0; c < 2; c++) {
                escreva(B[l][c], " ")
            }
            escreva("\n")
        }
    }
}