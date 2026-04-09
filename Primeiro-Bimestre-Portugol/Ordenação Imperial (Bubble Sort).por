programa {
    funcao inicio() {
        inteiro v[5]
        inteiro aux

        para (inteiro i = 0; i < 5; i++) {
            escreva("Digite o valor ", i+1, ": ")
            leia(v[i])
        }

        para (inteiro i = 0; i < 5; i++) {
            para (inteiro j = 0; j < 4; j++) {
                se (v[j] > v[j+1]) {
                    aux = v[j]
                    v[j] = v[j+1]
                    v[j+1] = aux
                }
            }
        }

        escreva("\nVetor ordenado:\n")

        para (inteiro i = 0; i < 5; i++) {
            escreva(v[i], "\n")
        }
    }
}