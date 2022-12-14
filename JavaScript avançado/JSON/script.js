

/*

JSON

JAVASCRIPT OBJECT NOTATION

O formato JSON é utilizado para estruturar dados em formato de texto e permitir a troca de dados entre aplicações de forma simples, leve e rápida. 

*/


const objeto = {
    nome: "Taylor",
    idade: 21
}


const json = JSON.stringify(objeto)

const jsonParseado = JSON.parse(json)

console.log(jsonParseado.idade)

