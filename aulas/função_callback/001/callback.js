function ea(id, callbackSucesso, callbackErro){
    //lógica: recuperar o id via requisição http
    if (true) {
        callbackSucesso('Funções de callback em JS', 'Funções de callback são muito usadas.')
    } else {
        callbackErro('Erro ao recuperar dados.')
    }
}

var callbackSucesso = function(titulo, descricao){
    document.write('<h1>' + titulo + '</h1>')
    document.write('<hr />')
    document.write('<p>' + descricao + '<p>')
}
var callbackErro = function(erro) {
    document.write('<p><b>Erro:</b>' + erro + '</p>')

}
ea(1, callbackSucesso, callbackErro)