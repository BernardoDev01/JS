let i = prompt('Digite sua idade: ')

if( i >= 0 && i <= 15 ) {
    document.write('Criança')
}else if(i >= 16 && i <= 30) {
    document.write('Jovem')
}else if ( i >= 31 && i <= 60){
    document.write('Adulto')
}else {
    document.write('Idoso')
}