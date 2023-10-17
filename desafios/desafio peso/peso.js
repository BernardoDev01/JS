let nome = prompt('Qual seu nome: ')
let altura = prompt('Qual sua altura em centímetros: ')
let peso = prompt('Qual seu peso: ')


altura = parseInt(altura)
peso = parseInt(peso)

altura = altura / 100
let m = peso / (altura * altura)

let clas = ""
if(m < 16) {
    clas = 'Baixo peso, muito grave!'
}else if (m >= 16 && m <= 16.99){
    clas = 'Baixo peso, grave!'
}else if (m >= 17 && m <= 18.49){
    clas = 'Baixo peso!'
}else if (m >= 18.50 && m <= 24.99){
    clas = 'Peso normal!'
}else if (m >= 25 &&  m <= 29.99){
    clas = 'Sobrepeso!'
}else if (m >= 30 && m <= 34.99){
    clas = 'Obesidade grau I, cuidado!'
}else if (m >= 35 && m <= 39.99){
    clas = 'Obesidade grau II, muito cuidado!'
}else {
    clas = 'Obesidade grau III, gravíssimo'
}

document.write(nome + " possui índice de massa corporal igual a " + m + ', sendo classificado como: ' + clas)