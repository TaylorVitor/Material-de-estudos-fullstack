


const clientes = [
    {name: "Rodrigo", lastName: "Santos"},
    {name: "Marcos", lastName: "Weber"},
    {name: "Vinicius", lastName: "Oliveira"}
]

console.log(clientes)


/* Monta pra mim um Array que vai ter o nome e sobrenome de cada um dos clientes que estão
no array.

*/

const listaClientes = clientes.map((cliente) =>{
    return cliente.name + " " + cliente.lastName
})

console.log(listaClientes)


/*
            FORMATO IMPLICITO
const listaClientes = clientes.map(cliente => cliente.name + " " + cliente.lastName)

console.log(listaClientes)

*/

