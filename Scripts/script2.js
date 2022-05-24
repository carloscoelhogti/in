function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente')
    }else{
        //window.alert('Tudo OK')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('width', '500px')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','./Images/menino.jpg')
                document.body.style.background = '#bdccfa'
            }else if (idade <= 21 ){
                //jovem
                img.setAttribute('src','./Images/homem_jovem.jpg')
                document.body.style.background = '#a3b9fc'
            }else if(idade > 21 && idade <= 50){
                //adulto
                img.setAttribute('src','./Images/homem_adulto.jpg')
                document.body.style.background = '#7b9afb'
            }else if (idade <= 100) {
                //idoso
                img.setAttribute('src','./Images/homem_velho.jpg')
                document.body.style.background = '#557dfb'
            }else{
                //mumia
                img.setAttribute('src','./Images/mumia.jpg')
                document.body.style.background = 'black'
                //res.innerHTML = `Você é ${genero} múmia com ${idade} anos.`
            }


        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','./Images/menina.jpg')
                document.body.style.background = '#eabcfb'
            }else if (idade <= 21 ){
                //jovem
                img.setAttribute('src','./Images/mulher_jovem.jpg')
                document.body.style.background = '#e297fc'
            }else if(idade > 21 && idade < 50){
                //adulto
                img.setAttribute('src','./Images/mulher_adulta.jpg')
                document.body.style.background = '#d56afb'
            }else if (idade <= 100){
                //idoso
                img.setAttribute('src','./Images/mulher_velha.jpg')
                document.body.style.background = '#c940fa'
            }else{
                //mumia
                img.setAttribute('src','./Images/mumia.jpg')
                document.body.style.background = 'black'
                //res.innerHTML = `Você é ${genero} múmia com ${idade} anos.`
            }
        }
        res.innerHTML = `O sexo informado é ${genero} e com ${idade} anos.`
        res.appendChild(img)
    }
}