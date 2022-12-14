
/*

FETCH

Fetch trabalha com promises em vez de callbacks

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

botaoCarregar.onclick = () => 
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(transformarJson)
        .then(exibirNaTela)
        .catch(exibirErro)

