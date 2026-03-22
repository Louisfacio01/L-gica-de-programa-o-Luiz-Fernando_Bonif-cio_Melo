programa {
    funcao inicio() {
        inteiro v[5]
        inteiro soma = 0

        para (inteiro i = 0; i < 5; i++) {
            escreva("Digite o valor ", i+1, ": ")
            leia(v[i])
            soma = soma + v[i]
        }

        escreva("Soma total: ", soma)
    }
}