var fs = require("fs") // variavel para importas biblioteca fs
console.log("1")
    fs.readFile("c://MCA.txt","utf-8",function(err, data) { // metodo le o arquivo
            if (err){
                console.log(err)
                
            } else  {
                console.log(data)
                console.log("Pronto")                
            }
        })

console.log("2")