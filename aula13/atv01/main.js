try {
    var nome = document.getElementById("nome").value
    cadastroUsuario(nome)
}
catch (e){
    alert("algo deu errado " + e.message)
}