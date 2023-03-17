const aula=[...document.getElementsByClassName('aulas')]
const aula1=[...document.getElementsByClassName('c1')]
const aula2=[...document.getElementsByClassName('c2')]

console.log(aula);
console.log(aula1);
console.log(aula2);

aula1.map((el)=>{
    el.classList.add('destaque')
})



///linhalinhalinhalinhalinhalinhalinhalinhalinha

//atribui todos os operadores de um array

let codigos=[...document.getElementsByTagName('div')]
 
console.log(codigos); 

// recebe uma coleção/ HTMLColletion 
let codigos1=document.getElementsByTagName('div')
console.log(codigos1);



///linhalinhalinhalinhalinhalinhalinhalinhalinha




const dom1=document.getElementById("c1")  
const dom2=document.getElementById("c2")  
const dom3=document.getElementById("c3")  
const dom4=document.getElementById("c4")   

let arrayelement=[dom1,dom2,dom3,dom4]

for(d of arrayelement){
    
}

console.log(arrayelement);
