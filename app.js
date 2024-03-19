var textInput = document.querySelector("#input-mensagem");
var output = document.querySelector("#output-mensagem")



function criptografar(){
    var texto = textInput.value;

    var textoCriptografado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output-mensagem').innerHTML = textoCriptografado

}

function descriptografar() {
    var texto = textInput.value;

    var textoDescriptografado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output-mensagem').innerHTML = textoDescriptografado
 
}

