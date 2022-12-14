let clientes = [
    {
        nome:'Taylor',
        idade: 35,
        linguagens: ['JavaScript', 'PHP', 'Java']
    },
    {
        nome:'Paulo',
        idade: 32,
        linguagens: ['C#', 'C++', 'C']  
    },
    {
        nome:'Pedro',
        idade: 22,
        linguagens: ['go', 'Closure', 'R']
    }
]

let htmlClientes = ''

for(let cliente of clientes){

    let listaLinguagens = ''

    for(let linguagem of cliente.linguagens){
        listaLinguagens += `<li>${linguagem}</li>`
    }
    
    htmlClientes += `
        <li >
            <b>Nome:</b> ${cliente.nome}<br>
            <b>Idade:</b> ${cliente.idade}<br>
            <b>Linguagens</b> <br>
            <ul>
                ${listaLinguagens}
            </ul>
        </li> 
    `
}

document.querySelector('#listaClientes').innerHTML = htmlClientes