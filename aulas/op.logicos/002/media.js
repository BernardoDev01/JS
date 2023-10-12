let name = prompt(' Digite o nome do aluno: ')
let nota = prompt(' Digite a nota do aluno: ')
let f = prompt(' Digite a quatidade de faltas: ')

let m = 7
let faltas = 15

if(nota >= m && f <= faltas){
    document.write(`${name} Aprovado`)
} else {
    document.write('Reprovado')
}