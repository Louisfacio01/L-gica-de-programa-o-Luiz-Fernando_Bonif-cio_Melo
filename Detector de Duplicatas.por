programa {
    funcao inicio() {
        inteiro v[5]
        logico repetido = falso

        para (inteiro i = 0; i < 5; i++) {
            escreva("Digite o valor ", i+1, ": ")
            leia(v[i])
        }

        para (inteiro i = 0; i < 5; i++) {
            para (inteiro j = i + 1; j < 5; j++) {
                se (v[i] == v[j]) {
                    repetido = verdadeiro
                }
            }
        }

        se (repetido) {
            escreva("Existe numero repetido")
        } senao {
            escreva("Nao existe numero repetido")
        }
    }
}