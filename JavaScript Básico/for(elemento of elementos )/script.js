

let clientes = [
  {
    nome: "Taylor",
    idade: 22,
    linguagens: ["JavaScript", "TypeScript", "PHP"]
  },

  {
    nome: "Guilherme",
    idade: 25,
    linguagens: ["PHP", "C#", "C++"]
  },

  {
    nome: "Breno",
    idade: 29,
    linguagens: ["R", "Ruby", "Assembly"]
  }
]

let htmlClients = ""

for(let cliente of clientes) {

  let listLinguagens = ""

  for(let linguagen of cliente.linguagens) {
    listLinguagens += `<li>${linguagen}</li>`
  }
  
  htmlClients += `
    <li>
      <b>Nome:</b>${cliente.nome}<br>
      <b>idade:</b>${cliente.idade}<br>
      <b>Linguagens</b>
    <ul>
        ${listLinguagens}
    </ul>
  </li>`
}

document.querySelector("#listaClientes").innerHTML = htmlClients