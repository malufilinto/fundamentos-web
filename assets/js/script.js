/* 
Case Sensitive(reconhece diferenças entre maiusculas e minusculas para as palavras reservadas)

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementByClassName()
por Seletor: querySelector(necessário #)

*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto =  document.querySelector("#assunto")

/* Envio fake*/
let nomeOk = false
let emailOk = false
let assuntoOk = false

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3){
        txtNome.innerHTML = "Nome inválido!"
        txtNome.style.color = "yellow"
        nomeOk = true
    }

    else{
        txtNome.innerHTML = "Nome válido!"
        txtNome.style.color = "white"
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
       
       if (email.value.indexOf("@")== -1 ){
        txtEmail.innerHTML ="E-mail inválido!"
        txtEmail.style.color = "yellow"
        emailOk = true
       }
       
       else{
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "white"
       }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
       
       if (assunto.value.length >= 100){
        txtAssunto.innerHTML ="Texto muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.color = "yellow"
        txtAssunto.style.display = "block"
        assuntoOk = true
       }

       else{
       
       }

}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulário enviado com sucesso!")
    }
    else{
        alert("Favor preenha o formulário corretamente")
    }
}