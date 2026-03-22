programa {
    funcao inicio() {
        cadeia nomes[10]
        cadeia busca
        logico encontrado = falso

        para (inteiro i = 0; i < 10; i++) {
            escreva("Digite o nome ", i+1, ": ")
            leia(nomes[i])
        }

        escreva("Digite o nome para pesquisa: ")
        leia(busca)

        para (inteiro i = 0; i < 10; i++) {
            se (nomes[i] == busca) {
                encontrado = verdadeiro
            }
        }

        se (encontrado) {
            escreva("Nome encontrado")
        } senao {
            escreva("Nome nao encontrado")
        }
    }
}