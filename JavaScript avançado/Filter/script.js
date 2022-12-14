


const clientes = [
    {name: "Rodrigo", lastName: "Santos", age: 22},
    {name: "Marcos", lastName: "Weber", age: 27},
    {name: "Vinicius", lastName: "Oliveira", age: 15},
    {name: "Mateus", lastName: "Viera", age: 17},
    {name: "Nicolas", lastName: "Sunssão", age: 25},
]

const clientesIdades = clientes.filter(cliente => {
    let retorno = false

    if(cliente.age >= 18) {
        retorno = true

    }

    return retorno
})


console.log(clientesIdades)



/* const clientesIdades = clientes.filter(cliente => cliente.age >= 18 */