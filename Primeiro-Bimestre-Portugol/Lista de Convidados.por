programa {
    funcao inicio() {
        cadeia nomes[5]

        para (inteiro i = 0; i < 5; i++) {
            escreva("Digite o nome ", i+1, ": ")
            leia(nomes[i])
        }

        escreva("\nLista de Convidados:\n")

        para (inteiro i = 0; i < 5; i++) {
            escreva(nomes[i], "\n")
        }
    }
}