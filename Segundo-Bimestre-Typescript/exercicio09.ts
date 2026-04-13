let saldo = 1000

while (saldo > 0){
    if (saldo >= 300){
        saldo -= 300
        console.log("saque efetuado", saldo)
    }    
    else{
        console.log("saldo indisponivel", saldo)
        break
    }
    
}