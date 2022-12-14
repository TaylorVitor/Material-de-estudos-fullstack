let opcoes

for (let contador = 2022; contador >= 1900; contador--){
    opcoes += `<option>${contador}</option>`
}

document.querySelector('#ano').innerHTML = opcoes


let lista = ''

let clientes = ['Thiago', 'Rafael', 'Taylor', 'Gabriel']

for (let contador = 0; contador <= clientes.length - 1; contador ++)
    lista += `<li>${clientes[contador]} - ${contador}</li>`

    document.querySelector('#listaClientes').innerHTML = lista
