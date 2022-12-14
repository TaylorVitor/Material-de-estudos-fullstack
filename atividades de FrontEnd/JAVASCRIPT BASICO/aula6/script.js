/*

string
number
boolean
array
object
undefined
null

*/

// string
let nome = 'Taylor'
console.log(nome)

// string - concatenada (não utilizado)
let sobrenome = 'Moraes'
// console.log(nome + ` ` + sobrenome)

//string literal
console.log(`${nome} ${sobrenome}`)


//number
let number = 35
console.log(number)
console.log(number + 10)

//number float
let porcentagem = 45.6
console.log(porcentagem + '%')



//boolean true or false
let maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = false
console.log(menorDeIdade)


//Array permite guardar mais de valor.
let habilidades = [ 'Javascript', 'PHP', 'python']
console.log(habilidades)
console.log(habilidades.length)
console.log(habilidades [1])


//Object Permite guardar um conjunto de informações.
let pessoa = {
    nome:'Fulano',
    sobrenome: 'carlso',
    idade: 25,
    habilidades: ['C#', 'c++', 'Java']
}

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.habilidades [2])
console.log(pessoa)


// JSON (JAVASCRIPT OBJECT NOTATION)
//Quando um sistema precisa ser transitado de um sistema para outro.


//undefined
let endereco
console.log(endereco)


//null

let cidade = null
console.log(cidade)