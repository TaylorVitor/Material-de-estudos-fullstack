

const clientes = [
    {name: "Rodrigo", score:40 },
    {name: "Marcos", score: 54},
    {name: "Vinicius", score: 92},
    {name: "Mateus", score: 23},
    {name: "Nicolas", score: 60},
]

//accumulator
//current

const clienteScore = clientes.reduce((acc, curr) => {
    if(curr.score >= 50) {
        acc.pass.push(curr)
        
    } else {
        acc.fail.push(curr)
    }

    return acc
}, {
    pass:[],
    fail:[]
})

console.log(clienteScore)






const numeros = [1,2,3,4,5]

const numerosFinal = numeros.reduce((acc,curr)=>{
    acc += `${curr + curr}`

    return acc
}, "")

console.log(numerosFinal)

