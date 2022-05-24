function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo =  document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel Contar'
    } else{
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){ //caso deixem campo zerado será alertado e alterado para 1
            alert("Passo inválido. Considerando passo 1") //poderia tb definir o campo com valor minimo 1
            p = 1
            document.getElementById('txtp').value = p
        }
        if( i < f){ //contagem crescente
            for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}` //copia o unicode e joga entre chaves sem o U pois é um objeto
            }
            
        } else{ //contagem decrescente
            for (let c = i; c>=f; c-= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}