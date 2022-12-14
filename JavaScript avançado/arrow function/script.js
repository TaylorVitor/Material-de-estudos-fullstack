

/* ARROW FUNCTIONS

ES6

As funções de seta nos permite escrever uma sintaxe de função mais curta


*/

const soma = (parm1 , parm2) => {
    return parm1 + parm2
}

let result = soma(5, 5)

console.log(result)



// Retorno implicito (Aqui é um return)

const valor = (valor1, valor2) => valor1 + valor2

let value =  valor(10, 10)

console.log(value)


//Quando for com um paramentro pode remover os parenteses 

const teste = (test1) => test1

console.log(teste("Hello world"))



const botao = document.querySelector("#botao")

botao.onclick = () => {
    console.log(this)
}