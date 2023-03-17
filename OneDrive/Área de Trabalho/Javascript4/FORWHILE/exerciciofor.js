// Questão 1
var contimpar = 0;

for(var i = 1; i <= 30; i++){
    if(i % 2 != 0){
       console.log(i)
    }
}

// Questão 2
var soma = 0
for(var i = 1; i <= 70; i++){
    if(i % 7 == 0){
       soma++
    }
}
console.log(soma)
// QUESTÃO 3

var valor1 = parseInt(prompt("Digite o primeiro valor"));
var valor2 = parseInt(prompt("Digite o segundo valor"));

var somapares = 0;
var somaimpares = 0;

for(var i=valor1; i <= valor2; i++){
    if(i % 2 == 0) {
        somapares++
    } else {
        somaimpares++
    }
}

console.log("QTDE de pares: " + somapares);
console.log("QTDE de impares: " + somaimpares);


// Questao 4


var valor1 = parseInt(prompt("Digite o primeiro valor"));
var valor2 = parseInt(prompt("Digite o primeiro valor"));
 
var mult11 = 0
for(var i = valor1; i <= valor2; i++){
    if (i % 11 == 0){
        mult11 +=i
    }
}

console.log(mult11);



// Questão 5



var valor1 = parseInt(prompt("Digite o primeiro valor"));

var soma = 0;

for(var i = 1; i <= valor1; i++){
    soma += i 
}
console.log(soma);


// Questão 6

var tabuada = parseInt(prompt("Digte o numero da tabuada"))

for(var i = 0; i <= 10; i++){
    console.log(tabuda + "x" + i + "=" + (tabuada * i));
}


 
//  Questão 7
var n = parseInt(prompt("Digite o numero"));

var contimpar = 0   

for(var i = 0;  contimpar < n; i++){
    if(i % 2 != 0){
        contimpar++;
        console.log(i);
    }
}



//  Questão 






/*Crie um programa que entre com os dados de altura e sexo de 5 pessoas.
 Imprima na tela quantas pessoas são do sexo masculino e quantas pessoas são do sexo feminino. 
 Mostre também qual é a maior altura e se essa altura é de um homem ou uma mulher.
 */
