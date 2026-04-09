programa {
    funcao inicio() {
        cadeia tab[3][3]
        logico venceuX = falso
        logico venceuO = falso

        para (inteiro l = 0; l < 3; l++) {
            para (inteiro c = 0; c < 3; c++) {
                escreva("Digite X ou O para [", l, "][", c, "]: ")
                leia(tab[l][c])
            }
        }

        para (inteiro l = 0; l < 3; l++) {
            se (tab[l][0] == tab[l][1] e tab[l][1] == tab[l][2]) {
                se (tab[l][0] == "X") {
                    venceuX = verdadeiro
                } senao se (tab[l][0] == "O") {
                    venceuO = verdadeiro
                }
            }
        }

        para (inteiro c = 0; c < 3; c++) {
            se (tab[0][c] == tab[1][c] e tab[1][c] == tab[2][c]) {
                se (tab[0][c] == "X") {
                    venceuX = verdadeiro
                } senao se (tab[0][c] == "O") {
                    venceuO = verdadeiro
                }
            }
        }

        se (tab[0][0] == tab[1][1] e tab[1][1] == tab[2][2]) {
            se (tab[0][0] == "X") {
                venceuX = verdadeiro
            } senao se (tab[0][0] == "O") {
                venceuO = verdadeiro
            }
        }

        se (tab[0][2] == tab[1][1] e tab[1][1] == tab[2][0]) {
            se (tab[0][2] == "X") {
                venceuX = verdadeiro
            } senao se (tab[0][2] == "O") {
                venceuO = verdadeiro
            }
        }

        escreva("\nTabuleiro:\n")
        para (inteiro l = 0; l < 3; l++) {
            para (inteiro c = 0; c < 3; c++) {
                escreva(tab[l][c], " ")
            }
            escreva("\n")
        }

        escreva("\n")

        se (venceuX) {
            escreva("O jogador X venceu!")
        } senao se (venceuO) {
            escreva("O jogador O venceu!")
        } senao {
            escreva("Empate / Ninguem venceu")
        }
    }
}