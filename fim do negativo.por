programa {
  funcao inicio() {
    inteiro idade

    escreva("Digite a sua idade: ")
    leia(idade)

    enquanto (idade < 0 ou idade > 120) {
      escreva("Idade inválida!")
      leia(idade)
    }

    escreva("Idade válida ", idade)
  }
}