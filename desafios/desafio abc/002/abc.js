let a = 100
let b = 200
let c = 300
let d = null

document.write('A:' + a + '<br/>')
document.write('B:' + b + '<br/>')
document.write('C:' + c + '<br/>')
document.write('D:' + d + '<br/>')

document.write('<hr />')

d = c 
b = b 
c = a
a = d
d = null

document.write('A:' + a + '<br/>')
document.write('B:' + b + '<br/>')
document.write('C:' + c + '<br/>')
document.write('D:' + d + '<br/>')