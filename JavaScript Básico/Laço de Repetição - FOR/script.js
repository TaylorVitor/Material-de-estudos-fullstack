

let opcoes

for(let timer = 2010; timer >= 1970; timer--) {
  opcoes += `<option>${timer}</option>`
}

document.querySelector("#ano").innerHTML = opcoes




let lista = ""

let clients = ["Taylor", "Vitor", "Maicon", "Alessandro"] 

for(let count = 0; count <= clients.length - 1 ; count++) {
  lista += `<li>${clients [count]}</li>`
}

document.querySelector("#clientList").innerHTML = lista


let numeros = ""

let eu = prompt("Insira um numero")

let listNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

for(let i = 0 ; i <= listNumbers.length - 1; i++) {
  numeros += `<li>${listNumbers [i] * eu}</li>`
}

document.querySelector("#tabela").innerHTML = numeros