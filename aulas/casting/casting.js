let vari01 = prompt('Digite algum número:')
let vari02 = prompt('Digite outro número:')

vari01 = parseInt(vari01) //parseInt = Transforma string em número (preserva a parte inteira do número)
vari02 = parseInt(vari02)

document.write(vari01 + vari02)


let p = 10.5
let b = 20.5

p = parseFloat(p)//parseFloat = Conserva a fração do número
b = parseInt(b)

console.log(p)
console.log(b)


let m = 10
let n = 20

document.write(m.toString() + n.toString())//toString = Transforma a variável em string.