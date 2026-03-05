programa {
  funcao inicio() {
     real lado,area,base,altura,result
     inteiro opcao

    escreva("=====CALCULADORA DE AREAS=====\n")
    escreva("1--quadrado\n")
    escreva("2--retangulo\n")
    escreva("3--triangulo\n")
    leia(opcao)

    escolha (opcao)
    {
      caso 1:
      escreva("digite o lado ")
      leia(lado)
      result= lado * lado
      escreva("A area é: ",result)
      pare
      
      caso 2:
      escreva("digite a base ")
      leia (base)
      escreva("digitealtura ")
      leia(altura)
      result = base * altura
      escreva ("A area é: ", result)
      pare

      caso 3:
      escreva("digite a base ")
      leia(base)
      escreva("digite a altura ")
      leia(altura)
      result = base * altura / 2
      escreva("A area é: ",result)
      pare
    }

  }
}
