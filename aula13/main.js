// var num = 1
// try {
//     num.toUpperCase();
// }
// catch (err) {
//     alert(err.name)
// }
// finally{
//     console.log("terminei :)")
// }

// try{
//      const valor = 10 / 0;
//      console.log("valor:", valor);
// } catch (erro) {
//     console.error("ocorreu um errinho:", erro.message);
// } finally{
//     console.log("esse código é executado independentermente de exceções")
// }

try {
    var nome = document.getElementById("nome").value
    cadastroUsuario(nome)
}
catch (e){
    alert("algo deu errado " + e.message)
}
finally{

}
function validarIdade(idade){
    if ( typeof idade !== 'number' || idade < 0){
        throw "a idade deve ser positivo";
    }
   if (idade < 18){
    throw "você tem que ser de maior man";
   }
   console.log("acesso permitido. Bem vindo!")
}
try {
    validarIdade(15);
}
catch (erro){
    console.error('ocorreu um erro:', erro);
}