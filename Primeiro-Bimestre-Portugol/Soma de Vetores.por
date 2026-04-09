programa {
    funcao inicio() {
        inteiro A[5]
        inteiro B[5]
        inteiro C[5]

        para (inteiro i = 0; i < 5; i++) {
            escreva("Digite A[", i, "]: ")
            leia(A[i])
        }

        para (inteiro i = 0; i < 5; i++) {
            escreva("Digite B[", i, "]: ")
            leia(B[i])
        }

        para (inteiro i = 0; i < 5; i++) {
            C[i] = A[i] + B[i]
        }

        escreva("\nVetor C:\n")

        para (inteiro i = 0; i < 5; i++) {
            escreva(C[i], "\n")
        }
    }
}