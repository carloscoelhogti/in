function calcularIMC(){
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var imc = peso / (altura * altura);
    console.log(imc);
    var imcorporeo = imc.toFixed(2)
    alert('O valor do IMC é: ' + imcorporeo)
    document.getElementById("resultado").innerHTML = "Seu IMC é: " + imcorporeo
    document.getElementById("indiceimc").innerHTML = " O seu índice está " + indiceimc
    var indiceimc = "";
    if (imc < 18.5){
        indiceimc = "Abaixo do Normal";
    } else if ( imc >= 18.5 && imc < 25){
        indiceimc = "Dentro do Normal";
    } else if (imc >= 25 && imc < 30){
        indiceimc = "Acima do Normal"
    }else if (imc > 30){
        indiceimc = "Risco de Vida. Fuja para as Montanhas"
    }
    document.getElementById("indiceimc").innerHTML = " O seu índice está: " + indiceimc
    
}
function limpar(){
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("resultado").innerHTML = "Nenhum Cálculo Realizado";
    document.getElementById("indiceimc").innerHTML = "Nenhum Índice de Base";
}