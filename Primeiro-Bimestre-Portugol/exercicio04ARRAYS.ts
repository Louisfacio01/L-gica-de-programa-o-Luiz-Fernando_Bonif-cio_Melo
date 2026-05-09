import PromptSync from "prompt-sync"
const prompt = PromptSync()

let blacklist:string [] = ["rui", "jose"]

const quest = String(prompt("QUAL O NOME DE USUARIO?? "))

if(blacklist.includes(quest)){
    console.log("ACESSO NEGADO")
}
else{
    console.log("ACEITO")
}