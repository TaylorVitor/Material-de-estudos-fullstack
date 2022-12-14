let inputnota1 = prompt	('Digite sua primeira nota')
let inputnota2 = prompt ('Digte sua segunda nota')

let nota1 = parseInt(inputnota1)
let nota2 = parseInt(inputnota2)

let mediaMinima = 7
let media = (nota1 + nota2) /2

if (media >= mediaMinima){
    document.write('Voce passou de ano')
} else if (media < mediaMinima){
    document.write('vOCE NÃO PASSOU :(')
}

document.write('<br>')

if (media >= mediaMinima && media === 10){
    document.write('Voce tirou de 10')
} else if (media >= mediaMinima && media === 8){
    document.write('voce tiraou 8')
}

console.log(media)