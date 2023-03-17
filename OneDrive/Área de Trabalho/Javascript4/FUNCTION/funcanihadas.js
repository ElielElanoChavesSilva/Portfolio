const cal=val=>{
    let res=0
    for(v of val){
        res+=v
    } 
    return res  
} 

const soma=(...valores)=>{
    return cal(valores)
}

console.log(soma(10,20,30))