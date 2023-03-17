let numero1 = 10

let numero2 = 11

switch((numero2 % 2==0) && (numero1 % 2 !=0)){
    case true:
        console.log("verdadeiro");
        break
    case false:
        console.log("falso");
        break
    default:
        console.log("Não foi encontrado");
        break
}