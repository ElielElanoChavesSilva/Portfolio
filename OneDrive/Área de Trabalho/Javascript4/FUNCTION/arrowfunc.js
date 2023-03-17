const soma=(v1,v2)=>{
    let res = v1+v2
    return res
 }
 console.log(soma(10,20))


 const num=(...valores)=>{
    let n = valores.length
    let quant=0
    for(var i=0; i < n; i++){
        quant+=valores[i]
    }
    return quant
 } 
 console.log(num(1,2,40));