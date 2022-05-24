function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if (hora >= 0 && hora < 12){
        img.src = './Images/dia.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora <= 18){
        img.src = './Images/tarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        img.src = './Images/noite.jpg'
        document.body.style.background = '#515154'
    }
}