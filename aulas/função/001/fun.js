let largura = prompt ('Digite a largura: ')
let comprimento = prompt('Digite o comprimento: ')


largura = parseInt(largura)
comprimento = parseInt(comprimento)
//Nomear a função
function calcularAreaTerreno (largura, comprimento) {
    let area = largura * comprimento
    document.write('O terreno possui ' + area + ' metros quadrados.')
}
calcularAreaTerreno(largura, comprimento)
    document.write(area)