let a = 20
let b = 60
let c = null

document.write ('A:' + a + '<br/>')
document.write ('B:' + b + '<br/>')
document.write ('C:' + c + '<br/>')

document.write ('<hr />')

c = a
a = b
b = c
c = null

document.write ('A:' + a + '<br/>')
document.write ('B:' + b + '<br/>')
document.write ('C:' + c + '<br/>')