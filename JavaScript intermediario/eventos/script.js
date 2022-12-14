

let botaoClique = document.querySelector("#botaoClique")

let bg = document.querySelector(".bg")

let aberto = false

botaoClique.addEventListener("click", () => {
    
    if(aberto === true) {
        aberto = false
        bg.classList.remove("aberto")

    } else if(aberto === false) {
        aberto = true
        bg.classList.add("aberto")
    }


})



/*
let botaoClique = document.querySelector("#botaoClique")

let bg = document.querySelector(".bg")

let contador = 0

function cliqueBotao() {
    contador++

    console.log("Mensage 1")

    if(contador >= 5) {
        botaoClique.removeEventListener("click", cliqueBotao)
    }
}

botaoClique.addEventListener("click", cliqueBotao)

*/