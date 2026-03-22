programa {
  funcao inicio() {
    cadeia dados[3][2]

    para(inteiro l = 0; l < 3; l++) {
      escreva("Aluno ", l+1, "\n")
    
    escreva("Nome: ")
    leia(dados[l][0])

    escreva("Disciplina favorita: ")
    leia(dados[l][1])
    escreva("\n")
        }
    

    escreva("\nPauta de Turma: \n")

    para (inteiro l = 0; l < 3; l++){
      escreva("Nome: ", dados[l][0], " | Disciplina: ", dados[l][1],"\n")
      
      }
      escreva("\n")
    }
  }
}
 