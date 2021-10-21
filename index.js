console.log("Testando script externo");

function clickBotao(){
    alert("Hello Dev!")
    document.getElementById("ParagrafoTeste").innerHTML="Texto Alterado via Botão";//altera texto no elemento
}

function DesligarLampada(){
    document.getElementById("lampada").src ="lampadaapagada.gif";//altera imagem do img
    //alert("Lampada Desligada");//exibe alerta na pagina
}

function LigarLampada(){
    document.getElementById("lampada").src = "lampadaviva.gif"
    //alert("Lampada Ligada")
}