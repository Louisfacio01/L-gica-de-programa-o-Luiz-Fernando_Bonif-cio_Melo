programa {
    funcao inicio() {
        inteiro v[10]

        para (inteiro i = 0; i < 10; i++) {
            escreva("Digite o valor ", i+1, ": ")
            leia(v[i])
        }

        escreva("\nNumeros pares:\n")

        para (inteiro i = 0; i < 10; i++) {
            se (v[i] % 2 == 0) {
                escreva(v[i], "\n")
            }
        }
    }
}