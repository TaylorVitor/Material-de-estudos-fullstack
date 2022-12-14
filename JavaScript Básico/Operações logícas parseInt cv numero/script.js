
let promptNota1 = prompt("Digite sua primeria nota")
let promptNota2 = prompt("Digite sua segunda nota")

let nota1 = parseInt(promptNota1)
let nota2 = parseInt(promptNota2)

let mediaMinima = 7

let media = (nota1 + nota2) / 2
console.log(media)

if(media >= mediaMinima) {
    console.log("Você passou de ano")

} else if (media === mediaMinima) {
    console.log("Você quase não passou de ano")

} else {
    console.log("Você infelizmente não passou de ano")
}


if(media >= mediaMinima && media === 10) {
    console.log("Você foi muito bem")
}


//parseInt converte elementos em numeros//