programa {
    funcao inicio() {
        inteiro v[10]
        inteiro maior

        para (inteiro i = 0; i < 10; i++) {
            escreva("Digite o valor ", i+1, ": ")
            leia(v[i])

            se (i == 0) {
                maior = v[i]
            } senao {
                se (v[i] > maior) {
                    maior = v[i]
                }
            }
        }

        escreva("Maior valor: ", maior)
    }
}