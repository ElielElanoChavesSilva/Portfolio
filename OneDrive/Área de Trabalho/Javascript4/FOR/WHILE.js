//Questão 4

var numero = parseInt(prompt("Digite o numero"));
 
var i = 0
while(i <= numero){
    if (i % 11 == 0){
        console.log(i);
    }
    i++
}

//Quetão 5

var numero = parseInt(prompt("Digite o primeiro numero"));

var soma = 0
var i = 0
while(i <= numero){
    soma += i
    i++ 
    console.log(soma);
}

//Questao 6


var tabuada = parseInt(prompt("Digte o numero da tabuada"))
 var i = 0
while(i <= 10){
    console.log(tabuada + "x" + i + "=" + (tabuada * i));
    i++
}

//Questão 7

var n = parseInt(prompt("Digite o numero"));

var contimpar = 0   

var i = 0

while(contimpar < n){
    if(i % 2 != 0){
        contimpar++;
        console.log(i);
    }
i++
}

let n1 = 10
let n2 = 14

let res =( n1 < n2)  ? "Verdadeiro" : "falso"

console.log(res)