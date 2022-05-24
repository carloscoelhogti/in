
function entrar(){
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    if ((usuario ==="") || (senha ==="")){
        console.log("Usuário e/ou Senha em branco. Favor Preencher");
        alert("Usuário e/ou Senha em branco. Favor Preencher")
    }
    
    else{
        console.log("O seu usuario é: " + usuario + " e sua senha: " + senha)
        alert("O seu usuario é: " + usuario + " e sua senha: " + senha + ". \n" + "Cuidado voçê não deveria clicar em links desconhecidos.\nSeus dados foram copiados e serão usados para todos os fins.")
        document.getElementById("alerta").innerHTML = "INFECTADO"
    }
}
function exibirusuario(usuario){
    console.log(usuario)
    alert(usuario)
}
function exibirsenha(senha){
    console.log(senha)
    alert(senha)
}
function limpar(){
    document.getElementById("usuario").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("alerta").innerHTML = "Nenhum Virus";
}
function sair(){
    alert("Obrigado por me fornecer seus dados!")
    window.close()
}
