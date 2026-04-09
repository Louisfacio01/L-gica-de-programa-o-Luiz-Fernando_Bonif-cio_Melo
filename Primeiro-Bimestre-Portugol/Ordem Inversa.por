programa {
    funcao inicio() {
        inteiro v[5]

        para (inteiro i = 0; i < 5; i++) {
            escreva("Digite o valor ", i+1, ": ")
            leia(v[i])
        }

        escreva("\nOrdem inversa:\n")

        para (inteiro i = 4; i >= 0; i--) {
            escreva(v[i], "\n")
        }
    }
}