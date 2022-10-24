//https://expressjs.com/pt-br/starter/installing.html
//https://expressjs.com/pt-br/4x/api.html#express

const express = require('express')
const cors = require('cors')

const app = express()


app.listen('3000')

app.use(cors()) //PERMITE TROCA DE DADOS ENTRE DOIS DOMINIO DIFERENTES

//MIDDLEWARE - PARA CONVERTER OS DADOS EM JSON
//app.use(express.json()) <- ESTE FOI TROCADO PARA AUMENTAR O LIMITE DE PARAMETROS AO ENVIAR O STRING BASE64
var bodyParser = require('body-parser'); // ESTE MIDDLE É USADO PARA AUMENTAR OS PARAMETROS RECEBIDOS PELO SERVIDOR EXPRESS QUANDO RECEBE O BASE 64
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//EXECUTA DEPOIS DO MIDDLEWARE

//ARRAY DE ATIVOS

let ativos = 
[ 
    {
        CODIGO:101010,
        DESCRICAO:"DESCRICAO",
        SERIAL:"SERIAL",
        PATRIMONIO:"010101",
        SITUACAO:"SEM PLAQUETA DE PATRIMÔNIO",
        FILIAL:"FILIAL",
        CENTRO_DE_CUSTO:"CENTRO DE CUSTO",
        CATEGORIA:"CATEGORIA",
        QR_CODE:"QR",
        CADASTRADOR:"carlos.coelho.gti@outlook.com",
        DATA_CADASTRO:"26/09/2022",
        BAIXA:"BAIXAR",
        DESCARTE:"NÃO DESCARTAR",
        LINK_IMAGEM:"https://picsum.photos/350"
      },  
      {
        CODIGO:707070,
        DESCRICAO:"TESTES",
        SERIAL:"707070A",
        PATRIMONIO:"707070",
        SITUACAO:"SEM PLAQUETA DE PATRIMÔNIO",
        FILIAL:"SALVADOR",
        CENTRO_DE_CUSTO:"ADMINISTRATIVO",
        CATEGORIA:"ACCESSORIES",
        QR_CODE:"QR",
        CADASTRADOR:"carlos.coelho.gti@outlook.com",
        DATA_CADASTRO:"26/09/2022",
        BAIXA:"NÃO BAIXAR",
        DESCARTE:"DESCARTAR",
        LINK_IMAGEM:"blob:http://127.0.0.1:5501/37497802-20ae-4f88-b7f2-1baaeef0b977"
      },
      {
        CODIGO:808080,
        DESCRICAO:"COMPUTADOR",
        SERIAL:"808080A",
        PATRIMONIO:"808080",
        SITUACAO:"SEM PLAQUETA DE PATRIMÔNIO",
        FILIAL:"SALVADOR",
        CENTRO_DE_CUSTO:"ADMINISTRATIVO",
        CATEGORIA:"ACCESSORIES",
        QR_CODE:"QR",
        CADASTRADOR:"carlos.coelho.gti@outlook.com",
        DATA_CADASTRO:"26/09/2022",
        BAIXA:"BAIXAR",
        DESCARTE:"NÃO DESCARTAR",
        LINK_IMAGEM:"https://picsum.photos/350"
      },
      {
        CODIGO:909090,
        DESCRICAO:"NOTEBOOK",
        SERIAL:"909090A",
        PATRIMONIO:"909090",
        SITUACAO:"SEM PLAQUETA DE PATRIMÔNIO",
        FILIAL:"SALVADOR",
        CENTRO_DE_CUSTO:"ADMINISTRATIVO",
        CATEGORIA:"ACCESSORIES",
        QR_CODE:"QR",
        CADASTRADOR:"carlos.coelho.gti@outlook.com",
        DATA_CADASTRO:"26/09/2022",
        BAIXA:"NÃO BAIXAR",
        DESCARTE:"NÃO DESCARTAR",
        LINK_IMAGEM:"sem_imagem.jpg"
      },
      {
        CODIGO:260922,
        DESCRICAO:"SERVIDOR",
        SERIAL:"260922212613A",
        PATRIMONIO:"260922",
        SITUACAO:"SEM PLAQUETA DE PATRIMÔNIO",
        FILIAL:"SAO PAULO",
        CENTRO_DE_CUSTO:"ADMINISTRATIVO",
        CATEGORIA:"ACCESSORIES",
        QR_CODE:"QR",
        CADASTRADOR:"carlos.coelho.gti@outlook.com",
        DATA_CADASTRO:"26/09/2022",
        BAIXA:"NÃO BAIXAR",
        DESCARTE:"NÃO DESCARTAR",
        LINK_IMAGEM:"https://picsum.photos/350"
      },
      {
        CODIGO:202020,
        DESCRICAO:"RACK",
        SERIAL:"260922222021A",
        PATRIMONIO:"202020",
        SITUACAO:"SEM PLAQUETA DE PATRIMÔNIO",
        FILIAL:"SALVADOR",
        CENTRO_DE_CUSTO:"1010115 - ADMINISTRATIVO - SÃO PAULO",
        CATEGORIA:"DESKTOPS",
        QR_CODE:"QR",
        CADASTRADOR:"carlos.coelho.gti@outlook.com",
        DATA_CADASTRO:"26/09/2022",
        BAIXA:"BAIXAR",
        DESCARTE:"DESCARTAR",
        LINK_IMAGEM:"https://firebasestorage.googleapis.com/v0/b/cadti-581fe.appspot.com/o/260922222021-260922215028?alt=media&token=18ac93d2-2944-48af-9d18-144a4adff8c5"
      }
]

//ARRAY DE FILIAIS

let filiais = [
    {
        "CEP": "01001000",
        "NOME": "SÃO PAULO",
        "ESTADO": "SP"
    },
    {
        "CEP": "20021000",
        "NOME": "RIO DE JANEIRO",
        "ESTADO": "RJ"
    },
    {
        "CEP": "78000000",
        "NOME": "CUIABÁ",
        "ESTADO": "MT"
    },
    {
        "CEP": "78000200",
        "NOME": "SORRISO",
        "ESTADO": "MT"
    }
]

let centros = [
    {
        "CENTRO": "1010115",
        "SETOR": "ADMINISTRATIVO",
        "FILIAL": "SÃO PAULO"
    },
    {
        "CENTRO": "1010133",
        "SETOR": "ALMOXARIFADO",
        "FILIAL": "SÃO PAULO"
    },
    {
        "CENTRO": "1010333",
        "SETOR": "ARMAZEM",
        "FILIAL": "SÃO PAULO"
    },
    {
        "CENTRO": "1010201",
        "SETOR": "COMERCIAL",
        "FILIAL": "SÃO PAULO"
    },
    {
        "CENTRO": "1010301",
        "SETOR": "INDUSTRIA",
        "FILIAL": "SÃO PAULO"
    },
    {
        "CENTRO": "1010240",
        "SETOR": "MANUTENÇÃO",
        "FILIAL": "SÃO PAULO"
    },
    {
        "CENTRO": "1010241",
        "SETOR": "MECÂNICA",
        "FILIAL": "SÃO PAULO"
    },
    {
        "CENTRO": "1010242",
        "SETOR": "ELÉTRICA",
        "FILIAL": "SÃO PAULO"
    },
]

let categorias = [
    {
        "CODIGO": 1,
        "NOME":"AUTOMAÇÃO"
    },
    {
        "CODIGO": 2,
        "NOME":"DESKTOPS"
    },
    {
        "CODIGO": 3,
        "NOME":"NOTEBOOKS"
    },
    {
        "CODIGO": 4,
        "NOME":"SERVERS"
    },
    {
        "CODIGO": 5,
        "NOME":"NETWORKING"
    }
]


//GET EXIBE OS DADOS
app.route('/').get((req, res) => {
    res.json(ativos)
    console.log(`${ativos.length} ativos no patrimônio.`)
    const lastAdded = ativos[ativos.length - 1].CODIGO
    console.log(`Último ativo adicionado: ${lastAdded}.`)
   
})

//GET USANDO QUERY  HTTP://LOCALHOST:3000?name="Carlos"&cidade="São Paulo"
app.route('/').get((req, res) => res.send(`${req.query}`))

//GET USANDO BODY
//app.route('/').get((req, res) => res.send(`${req.body}`))

//GET DADOS USANDO PARAMETROS HTTP://LOCALHOST:3000/Carlos Coelho

app.route('/:codigo').get((req, res) => {
    const ativoCodigo = req.params.codigo
    const ativo = ativos.find( ativo => Number(ativo.CODIGO) === Number(ativoCodigo)) //PESQUISA O CODIGO NO ARRAY

    if(!ativo){
        //return res.send('Ativo não encontrado') //INFORMA VIA TEXT NO HTML
        return res.json('Ativo não encontrado!') //INFORMA VIA JSON NO HTML
    }
    res.json(ativo) //IMPRIME NO NAVEGADOR OS VALORES
    console.log('# ATIVO RESULTANTE DA PESQUISA #')
    console.log(`CODIGO: ${ativo.CODIGO}`) //GERA NO CONSOLE O DADO DO REFERIDO CODIGO
    console.log(`DESCRICAO: ${ativo.DESCRICAO}`)
    console.log(`SERIAL: ${ativo.SERIAL}`)
    console.log(`PATRIMONIO: ${ativo.PATRIMONIO}`)
    console.log(`SITUACAO: ${ativo.SITUACAO}`)
    console.log(`FILIAL: ${ativo.FILIAL}`)
    console.log(`CENTRO_DE_CUSTO: ${ativo.CENTRO_DE_CUSTO}`)
    console.log(`CATEGORIA:${ativo.CATEGORIA}`)
    console.log(`QR_CODE: ${ativo.QR_CODE}`)
    console.log(`CADASTRADOR: ${ativo.CADASTRADOR}`)
    console.log(`DATA_CADASTRO: ${ativo.DATA_CADASTRO}`)
    console.log(`BAIXA: ${ativo.BAIXA}`)
    console.log(`DESCARTE: ${ativo.DESCARTE}`)
    //console.log(`LINK_IMAGEM: ${ativo.LINK_IMAGEM}`) //RETIRADO PARA NAO PESAR O PROCESSAMENTO DO SERVIDOR EXPRESS
    console.log('---')

})


//POST PARA PAGINA DE ATIVOS
app.route('/add').post((req,res) => {
    //const lastCodigo = ativos[ativos.length - 1].CODIGO
    ativos.push({
        CODIGO: req.body.CODIGO,
        DESCRICAO: req.body.DESCRICAO.toUpperCase(),
        SERIAL: req.body.SERIAL.toUpperCase(),
        PATRIMONIO: req.body.PATRIMONIO,
        SITUACAO: req.body.SITUACAO,
        FILIAL: req.body.FILIAL,
        CENTRO_DE_CUSTO: req.body.CENTRO_DE_CUSTO,
        CATEGORIA: req.body.CATEGORIA,
        QR_CODE: req.body.QR_CODE,
        CADASTRADOR: req.body.CADASTRADOR,
        DATA_CADASTRO: req.body.DATA_CADASTRO,
        BAIXA: req.body.BAIXA,
        DESCARTE: req.body.DESCARTE,
        LINK_IMAGEM: req.body.LINK_IMAGEM
    })

    res.send(`Dados { ${JSON.stringify(req.body)} } recebidos com sucesso!`)
    console.log(`Ativo ${req.body.CODIGO} cadastrado com sucesso.`)
})

//ATUALIZA OS DADOS
app.route('/add/:codigo').put((req, res) => {
    const ativoCodigo = req.params.codigo
    const ativo = ativos.find( ativo => Number(ativo.CODIGO) === Number(ativoCodigo)) //PESQUISA O CODIGO NO ARRAY

    if(!ativo){
        //return res.send('Ativo não encontrado') //INFORMA VIA TEXT NO HTML
        return res.json('Ativo não encontrado') //INFORMA VIA JSON NO HTML
    }
    const updatedAtivo = {
        ... ativo,
        
        DESCRICAO: req.body.DESCRICAO.toUpperCase(),
        SERIAL: req.body.SERIAL.toUpperCase(),
        PATRIMONIO: req.body.PATRIMONIO,
        SITUACAO: req.body.SITUACAO,
        FILIAL: req.body.FILIAL,
        CENTRO_DE_CUSTO: req.body.CENTRO_DE_CUSTO,
        CATEGORIA: req.body.CATEGORIA,
        QR_CODE: req.body.QR_CODE,
        CADASTRADOR: req.body.CADASTRADOR,
        DATA_CADASTRO: req.body.DATA_CADASTRO,
        BAIXA: req.body.BAIXA,
        DESCARTE: req.body.DESCARTE,
        LINK_IMAGEM: req.body.LINK_IMAGEM
    }
    ativos = ativos.map(ativo => {
        if( Number(ativo.CODIGO) === Number(ativoCodigo)){
            ativo = updatedAtivo
        }
        return ativo
    })
    res.send(`Os dados do ativo ${ativo.CODIGO} foram atualizados.`)
    console.log(`Os dados do ativo ${ativo.CODIGO} foram atualizados.`)
} )


// DELETA DADOS USANDO VARIAVEIS, METODO PARAMS
app.route('/add/delete/:codigo').delete((req, res) => {
    const ativoCodigo = req.params.codigo
    ativos = ativos.filter( ativo => Number(ativo.CODIGO) !== Number(ativoCodigo))
    res.send(`Ativo ${req.params.codigo} excluido.`)
    console.log(`Ativo ${req.params.codigo} excluido.`)

    console.log(`${ativos.length} ativos ainda no patrimônio.`)

    
})

//GET PARA PAGINA SOBRE
app.route('/sobre').get((req, res) => res.send("Sobre"))

//GET PARA PAGINA FILIAIS
app.route('/list/filiais').get((req, res) => {    
    res.json(filiais)
    const lastFilial = filiais[filiais.length - 1].NOME
   console.log(`${filiais.length} filiais cadastradas.`)
   console.log(`Última filial cadastrada: ${lastFilial}.`)
})

//GET PARAMS FILIAIS
app.route('/list/filiais/:codigo').get((req, res) => {
    const codigoFilial = req.params.codigo
    const filial = filiais.find( filial => Number(filial.CEP) === Number(codigoFilial)) //PESQUISA O CODIGO NO ARRAY
    
    if (!filial) {
        return res.json('Filial não encontrada!') //INFORMA VIA JSON NO HTML        
    }else{
        res.json(filial) //IMPRIME NO NAVEGADOR OS VALORES
        console.log(`Filial: ${filial.NOME}`) //GERA NO CONSOLE O DADO DO REFERIDO CODIGO
    }

})

//POST PARA PAGINA FILIAIS
app.route('/list/filiais/add').post((req, res) => {
    filiais.push({
        CEP: req.body.CEP,
        NOME: req.body.NOME.toUpperCase(),
        ESTADO: req.body.ESTADO.toUpperCase()
    })
    res.send(`Dados { ${JSON.stringify(req.body)}} recebidos com sucesso!`)
    console.log(`Filial ${req.body.NOME} cadastrada com sucesso!`)
})

//PUT PARA PAGINA FILIAIS
app.route('/list/filiais/upd/:codigo').put( (req, res) => {
    const codigoFilial = req.params.codigo
    const filial = filiais.find( filial => Number(filial.CEP) === Number(codigoFilial)) //PESQUISA O CODIGO NO ARRAY

    if(!filial){
        return res.json('Filial não encontrada')
    }
    const updateFilial = {
        ... filial,
            //CEP: req.body.CEP,
            NOME: req.body.NOME.toUpperCase(),
            ESTADO: req.body.ESTADO.toUpperCase()
        }
    filiais = filiais.map( filial => {
        if(Number(filial.CEP) === Number(codigoFilial)){
            filial = updateFilial
        } 
        return filial
    })
    res.send(`Os dados da filial ${filial.CEP} foram atualizados.`)
    console.log(`Os dados da filial ${filial.CEP} foram atualizados.`)
})

//DELETE PARA PAGINA FILIAIS
app.route('/list/filiais/delete/:codigo').delete((req, res) => {
    const codigoFilial = req.params.codigo
    filiais = filiais.filter( filial => Number(filial.CEP) !== Number(codigoFilial)) //PESQUISA O CODIGO NO ARRAY

        res.send(`Filial ${req.params.codigo} excluida.`)
        console.log(`Filial ${req.params.codigo} excluida.`)
        console.log(`${filiais.length} filiais cadastradas.`)
})

//GET PARA PAGINA CENTRO DE CUSTO

app.route('/list/centrodecusto').get((req, res) => {
    res.json(centros)
    const lastCentro = centros[centros.length - 1].CENTRO
    const lastFilial = centros[centros.length - 1].FILIAL
    console.log(`${centros.length} centros de custos cadastrados.`)
    console.log(`Último centro de custo cadastrado: ${lastCentro} - ${lastFilial}`)
})
//GET PARAMS PARA PAGINA CENTRO DE CUSTO
app.route('/list/centrodecusto/:codigo').get((req, res) => {
    const codigoCentro = req.params.codigo
    const centro = centros.find( centros => Number(centros.CENTRO) === Number(codigoCentro))

    if(!centro){
        return res.json('Centro de Custo não encontrado!')
    }else{
        res.json(centro)
        console.log(`Centro de Custo: ${centro.CENTRO} - ${centro.SETOR}`)
    }
})

//POST PARA PAGINA CENTRO DE CUSTO

app.route('/list/centrodecusto/add').post((req, res) => {
    centros.push({
        CENTRO: req.body.CENTRO,
        SETOR: req.body.SETOR,
        FILIAL: req.body.FILIAL
    })
    res.send(`Dados {${JSON.stringify(req.body)}} recebidos com sucesso!`)
    console.log(`Dados {${JSON.stringify(req.body.CENTRO)}} recebidos com sucesso!`)
})

//PUT PARA PAGINA CENTRO DE CUSTO

app.route('/list/centrodecusto/upd/:codigo').put((req, res) => {
    const codigoCentro = req.params.codigo
    const centro = centros.find( centros => Number(centros.CENTRO) === Number(codigoCentro))

    if(!centro){
        return res.json('Centro de Custo não encontrado!')
    }
    const updateCentro = {
        ... centro,
        //CENTRO: req.body.CENTRO,
        SETOR: req.body.SETOR,
        FILIAL: req.body.FILIAL
    }
    centros = centros.map( centro => {
        if(Number(centro.CENTRO) === Number(codigoCentro)){
            centro = updateCentro
        }
        return centro
    })
    res.send(`Os dados do centro de custo: ${centro.CENTRO} foram atualizados.`)
    console.log(`Os dados do centro de custo: ${centro.CENTRO} foram atualizados.`)
})

//DELETE PARA PAGINA CENTRO DE CUSTO
app.route('/list/centrodecusto/delete/:codigo').delete((req, res) => {
    const codigoCentro = req.params.codigo
    centros = centros.filter( centro => Number(centro.CENTRO) !== Number(codigoCentro)) //PESQUISA O CODIGO NO ARRAY

        res.send(`Centro de Custo ${req.params.codigo} excluido.`)
        console.log(`Centro de Custo ${req.params.codigo} excluido.`)
        console.log(`${centros.length} centros de custo cadastrados.`)
})

//GET PARA PAGINA CATEGORIAS
app.route('/list/categorias').get((req, res) => {
    res.json(categorias)
    const lastCategoria = categorias[categorias.length - 1].NOME

    console.log(`${categorias.length} categorias cadastradas.`)
    console.log(`Ultima categoria cadastrada: ${lastCategoria}`)
})

//GET PARAMS PARA PAGINA CATEGORIAS
app.route('/list/categorias/:nome').get((req, res) => {
    const codigoCategoria = req.params.nome
    const categoria = categorias.find(categorias => String(categorias.NOME) === String(codigoCategoria).toUpperCase())

    if(!categoria){
        return res.json('Categoria não encontrada')
    }else{
        res.json(categoria)
        console.log(`Categoria: ${categoria.NOME}`)
    }
})

//POST PARA PAGINA DE CATEGORIAS
app.route('/list/categorias/add').post((req, res) => {
    const lastCodigo = categorias[categorias.length - 1].CODIGO
    geraCodigo = Number(lastCodigo) + Number(1)

    categorias.push ({
        CODIGO: geraCodigo,
        NOME: req.body.NOME.toUpperCase()
    })
    res.send(`Dados {${JSON.stringify(req.body)}} recebidos com sucesso!`)
    console.log(`Dados {${JSON.stringify(req.body.NOME)}} recebidos com sucesso!`)
})
//PUT PARA PAGINA DE CATEGORIAS
app.route('/list/categorias/upd/:codigo').put((req, res) => {
    const codigoCategoria = req.params.codigo
    const categoria = categorias.find(categorias => Number(categorias.CODIGO) === Number(codigoCategoria))
    
    if(!categoria){
        return res.json('Categoria não encontrada')
    }
    const updateCategoria = {
        ...categoria,
        //CODIGO: req.body.CODIGO,
        NOME: req.body.NOME
    }
    categorias = categorias.map( categoria => {
        if(Number(categoria.CODIGO) === Number(codigoCategoria)){
            categoria = updateCategoria
        }
        return categoria
    })
    res.send(`Os dados da categoria ${categoria.CODIGO} foram atualizados.`)
    console.log(`Os dados da categoria ${categoria.CODIGO} foram atualizados.`)
})

//DELETE PARA PAGINA CATEGORIAS
app.route('/list/categorias/delete/:codigo').delete((req, res) => {
    const codigoCategoria = req.params.codigo
    categorias = categorias.filter(categorias => Number(categorias.CODIGO) !== Number(codigoCategoria))

    res.send(`Categoria ${req.params.codigo} excluida.`)
    console.log(`Categoria ${req.params.codigo} excluida.`)
    console.log(`${categorias.length} categorias cadastradas.`)
})