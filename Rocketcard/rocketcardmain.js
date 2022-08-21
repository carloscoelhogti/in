const url = 'https://api.github.com/users/carloscoelhogti'

function getUser(){
axios.get(url)
.then( responses => {
    const data = responses.data
    console.log(data)
    var user = data.login
    var avatar = data.avatar_url
    var seguidores = data.followers
    var seguindo = data.following
    var respositorios = data.public_repos
    var compania = data.company
    var cidade = data.location
    var site = data.html_url
    console.log(user,avatar, seguidores, seguindo, respositorios, compania, cidade)
    document.getElementById('img_logo').src = avatar
    document.getElementById('txt_user').innerHTML = user
    document.getElementById('img_avatar').src = avatar
    document.getElementById('txt_seguidores').innerHTML = `${seguidores} seguidores`
    document.getElementById('txt_seguindo').innerHTML = `${seguindo} seguindo`
    document.getElementById('txt_repos').innerHTML = `${respositorios} respositórios`
    document.getElementById('txt_company').innerHTML = compania
    document.getElementById('txt_cidade').innerHTML = cidade
    document.getElementById('txt_site').href = site
    document.getElementById("txt_site").textContent = site
    document.getElementById("txt_site").title = site

})
.catch( error => {
    console.log(error)
})
}
getUser()

function changeBackground(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    document.getElementById("div_card").style.backgroundColor = bgColor
}

function cont(){
    var conteudo = document.getElementById('div_card').innerHTML;
    tela_impressao = window.open();
    tela_impressao.document.write(conteudo);
    tela_impressao.window.print();
    tela_impressao.window.close();
 }