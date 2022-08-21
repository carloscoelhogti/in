/*
import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'*/



 


function getFilme(){
  const dominio = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2'
  const urlfilmes = 'https://api.themoviedb.org/3/movie/'
  let codigofilme = Math.floor(Math.random() * 800)
  const indice = '?api_key=a109f258c3bfe35feabf217c4c6ba586'
  const url = urlfilmes + codigofilme + indice
  //520 é um codigo que nao tem filme
  console.log(codigofilme)
  console.log(url)

  axios.get(url)
  .then( response => {
    const data = response.data
    const folder = data.poster_path
    const filme = data.title
    const resumo = data.overview
    const ano = data.release_date
    const diretor = data.tagline
    const site = data.homepage
    const nota = data.vote_average / 0.1

    const avaliacao = nota.toFixed(2)
    
    console.log(data)
    console.log('Folder:', folder)
    console.log('Filme:',filme)
    console.log('Resumo:', resumo)
    console.log('Ano: ', ano)
    console.log('Diretor:', diretor)
    console.log('Site:', site)
    console.log('Nota:', nota, '% de aceite!')

    document.getElementById("folder_filmes").src= (dominio + folder)
    document.getElementById("info_filme").innerHTML= filme
    document.getElementById("info_resumo").innerHTML= resumo
    document.getElementById("info_ano").innerHTML= `Ano: ${ano}`
    document.getElementById("info_diretor").innerHTML= `Diretor: ${diretor}`
    document.getElementById("info_site").innerHTML= site
    document.getElementById("info_texto").innerHTML= 'Aceitação do público de:'
    document.getElementById("info_nota").innerHTML= avaliacao + '%.'
    
    var divativa_info = document.getElementById('div_info').style.display = 'none'
    var divativa_posts = document.getElementById('div_posts').style.display = 'block'
  
  })
  .catch( error => {
    console.log(error)
    //document.getElementById("info_resumo").innerHTML= "Erro"
    var divativa_info = document.getElementById('div_info').style.display = 'block'
    var divativa_posts = document.getElementById('div_posts').style.display = 'none'

  }
    )
  
}



