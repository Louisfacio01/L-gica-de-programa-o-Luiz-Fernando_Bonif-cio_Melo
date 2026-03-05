programa {
  funcao inicio() {
    cadeia dia

        escreva("Digite o dia da semana: ")
        leia(dia)

        se(dia == "Sabado" ou dia == "sabado" ou dia == "Domingo" ou dia == "domingo")
        {
            escreva("Descanso")
        }
        senao
        {
            escreva("Dia de trabalho")
        }
  }
}
