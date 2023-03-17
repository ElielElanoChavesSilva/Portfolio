var botao=document.getElementById('botao')

var cores=['red','green','blue','orange','purple'];
var coratual=0

botao.addEventListener("click", ()=>{
    botao.style.backgroundColor = cores[coratual]
    coratual++
    if(coratual > 4){
        coratual=0
    }
})