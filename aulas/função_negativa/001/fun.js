//propriedade length
document.write('Bernardo Valle'.length)

document.write('</br>')

//propriedade charAt
document.write('Bernardo'.charAt(5))

document.write('</br>')

//propriedade indexOf
let nome = ' Bernardo Valle '
document.write(nome.indexOf('a'))
//Quando não existir o caractere é retornado -1.

document.write('</br>')

//propriedade replace
document.write(nome.replace('Valle','Tadeu'))

document.write('</br>')

//propriedade Substr
document.write(nome.substr(6, 4))

document.write('</br>')

//propriedade ToLowerCase
document.write(nome.toLowerCase())

document.write('</br>')

//propriedade toUpperCase
document.write(nome.toUpperCase())

document.write('</br>')

//propriedade trim
document.write('-' + nome.trim() + '-')