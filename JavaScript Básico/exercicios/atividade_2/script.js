

let mathTable = document.getElementById("mathTable")

let list = document.createElement("ul")
console.log(list)


let calculate = prompt("Qual numero você deseja calcular? ")

list = ""

listMath = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let count = 0; count <= listMath.length - 1; count++) {
    list += `<li>${[count] * calculate}</li>`
}

document.querySelector("#listMath").innerHTML = list


