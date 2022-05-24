function vezes(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let ms = document.getElementById('msg')
    if (num.value.length == 0){
        alert("Por favor digite um numero")
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tab.value = `tab ${c}`
            tab.appendChild(item)
            c++           
        }
    } 
} 

//alterações que fiz 

function mais(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        alert("Por favor digite um numero")
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} + ${c} = ${n + c}`
            tab.value = `tab ${c}`
            tab.appendChild(item)
            c++
        }
    }
}

function menos(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        alert("Por favor digite um numero")
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} - ${c} = ${n - c}`
            tab.value = `tab ${c}`
            tab.appendChild(item)
            c++
        }
    }
}

function divisao(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        alert("Por favor digite um numero")
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} / ${c} = ${n / c}`
            tab.value = `tab ${c}`
            tab.appendChild(item)
            c++
        }
    }
}