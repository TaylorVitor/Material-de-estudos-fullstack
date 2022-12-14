

const clientes = [
    {
        name: "Breno",
        lastName: "Souza"
    },

    {
        name: "Felipe",
        lastName: "Oliveira"
    },

    {
        name: "Maria",
        lastName: "Clara"
    },

    {
        name: "Pedro",
        lastName: "Scoob"
    }
]


const clientesLista = clientes.map (cliente => cliente.name + " " + cliente.lastName)

console.log(clientesLista)