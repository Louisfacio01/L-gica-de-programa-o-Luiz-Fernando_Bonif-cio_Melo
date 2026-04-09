programa {
    funcao inicio() {
        real temp[7]
        inteiro contador = 0

        para (inteiro i = 0; i < 7; i++) {
            escreva("Digite a temperatura do dia ", i+1, ": ")
            leia(temp[i])

            se (temp[i] > 30) {
                contador++
            }
        }

        escreva("Dias com temperatura superior a 30 graus: ", contador)
    }
}