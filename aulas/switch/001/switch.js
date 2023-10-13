let paramentro = prompt('Digite um número: ')
//Switch devolve conforme o seu tipo. número=número escrita=escrita.
switch(parseInt(paramentro)) {
    case 1:
        document.write('paramentro 01')
        break
    
    case 2:
        document.write('paramentro 02')
        break
    
    case '3':
        document.write('paramentro 03')
        break

    default:
        document.write('default')
}