programa {
    funcao inicio() {
        real notas[4]
        real soma = 0
        real media

        para (inteiro i = 0; i < 4; i++) {
            escreva("Digite a nota ", i+1, ": ")
            leia(notas[i])
            soma = soma + notas[i]
        }

        media = soma / 4

        escreva("Media: ", media)
    }
}