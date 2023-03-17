var num=[]
num[0]=parseInt(prompt("digite o numero"))
num[1]=parseInt(prompt("digite o numero"))
num[2]=parseInt(prompt("digite o numero"))

let m=0

for(var i=0; i < num.length; i++){
    if(num[i] > m){
        m += num[i]        
    }
}
console.log(m);
