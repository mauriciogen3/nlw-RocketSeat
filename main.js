// const github = 'mauriciogen3'
// const youtube = 'junior8m'
// const facebook = 'mauriciogen3'
// const instagram = 'mauFsJr'
// const twitter = 'junior8m'

const linksSocialMedia = {
  github: 'mauriciogen3',
  youtube: 'junior8m',
  facebook: 'mauriciogen3',
  instagram: 'mauFsJr',
  twitter: 'junior8m'
}

// function changeSocialMediaLinks() {
//MODELO ANTIGO DE PEGAR ALGUMA INFORMAÇÃO PELO ID

document.getElementById('userName').textContent = 'Mauricio Junior'

//MODELO NOVO DE PEGAR UMA INFORMACAO E SUBSTITUIR NA PAGINA
// userName.textContent = 'Mauricio junior'
//for: Utilizamos quando trabalhamos com repeticoes. A formula primitiva do For é: for( let i = 0; i<=10; i++){}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => alert(data.bio))
}
getGitHubProfileInfos()
