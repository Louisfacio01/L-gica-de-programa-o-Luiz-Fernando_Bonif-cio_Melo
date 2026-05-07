interface equip {
    id:number
    nome:string
    emUso:boolean
    patrimonio:number
    
};

const açao: equip[] = [];

açao.push({id:1 , nome:"dell" , emUso:true , patrimonio:1200,});

açao.push({id:2 , nome:"lenovo" , emUso:false , patrimonio:2000,});

açao.push({id:3 , nome:"acer" , emUso:false , patrimonio:4000,});

açao.push({id:4 , nome:"pichau" , emUso:true , patrimonio:7000,});



for (let i = 0; i < açao.length; i++){
    if(açao[i].emUso = true){
        console.log("Há",açao[i].id, açao[i].nome, "com o valor de:", açao[i].patrimonio,)
    }
};