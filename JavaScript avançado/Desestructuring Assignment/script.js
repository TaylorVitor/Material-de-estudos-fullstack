
/*

 Destructuring Assignment

 Este recurso permite extrair de um Array ou Object valores e transformar em uma variável ou constante, no exemplo abaixo utilizamos o destructuring para converter objetos de um Array em uma constante:

 const obj = {
    name: "luiz",
    idade: 12
}

forma certa
const {name, idade} = obj

console.log(name)


*/



function transformarJson(response) {
    return response.json()
}

function exibirNaTela(dados) {
    console.log("exibir na Tela", dados)
}

function exibirErro() {
    console.log("Ops deu erro")
}


const botaoCarregar = document.querySelector("#botaoCarregar")

botaoCarregar.onclick = aoClicarNoBotao


async function aoClicarNoBotao() {
    const dados = await fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(transformarJson)
    .catch(exibirErro)

    const {name, email, phone} = dados

    console.log(name, email, phone)
}
 