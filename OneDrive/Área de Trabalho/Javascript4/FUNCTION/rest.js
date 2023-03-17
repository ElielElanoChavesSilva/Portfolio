function soma(...valores){
    let tam=valores.length
    var res =0
    for(var i=0; i < tam; i++){
        res+=valores[i]
    }
    return res 
}
console.log(soma(10,1,10));