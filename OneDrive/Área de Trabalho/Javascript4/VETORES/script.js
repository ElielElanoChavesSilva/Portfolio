let numero = []
numero[0] = parseInt(prompt("Digite 5 valores inteiros para leitura."));
numero[1] = parseInt(prompt("Digite 5 valores inteiros para leitura."));
numero[2] = parseInt(prompt("Digite 5 valores inteiros para leitura."));
numero[3] = parseInt(prompt("Digite 5 valores inteiros para leitura."));
numero[4] = parseInt(prompt("Digite 5 valores inteiros para leitura."));

let contpar = 0
let contimpar = 0 
for(let i=0; i < numero.length;i++) {
    if(numero[i] % 2 == 0){
        contpar++
    } else{
        contimpar++
    }
}
console.log(" contém " + contimpar + " numeros impares e " + contpar  +  " numeros pares ");




