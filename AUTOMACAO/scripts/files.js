//Efetuando a leitura do arquivo
{
    let fs = require('fs'); //variavel deve ser criada para que possamos ler o arquivo
    fs.readFile("AUTOMACAO/Report/MCABalEntrada.txt",'utf8', function(err,data){
        //Enviando para o console o resultado da leitura
        console.log(data);
    });
    }
    
    {
    let fs = require('fs'); //variavel deve ser criada para que possamos ler o arquivo
    fs.readFile("AUTOMACAO/Report/ANTENABALENTLADOA.txt",'utf8', function(err,data){
        //Enviando para o console o resultado da leitura
        console.log(data);
    });
    }
    
    {
    let fs = require('fs'); //variavel deve ser criada para que possamos ler o arquivo
    fs.readFile("AUTOMACAO/Report/ANTENABALENTLADOB.txt",'utf8', function(err,data){
        //Enviando para o console o resultado da leitura
        console.log(data);
    });
    }
