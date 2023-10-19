//global
let serie = 'Friends'
//bloco
if(true){
    var s = 'Diário de um vampiro'
    document.write(serie)
}
document.write(s)

document.write('<br/>') 

//função
function x(){

    var s2 = 'HIMYM'
    document.write(serie)
    document.write(s)
}
x()
//escopo do tipo função e bloco = usam variavel do tipo global.
//variavel declarada dentro de bloco sofrem elevação.
document.write('<br/>') 

