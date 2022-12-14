

let menu = document.querySelector(".menu")
let botaoMenu = document.querySelector(".botaoMenu")


let abrir = false

function abrirEfechar() {

    if(abrir === true) {
        abrir = false
        menu.classList.remove("aberto")
        botaoMenu.innerHTML = "Abrir"

    } else if(abrir === false) {
        abrir = true
        menu.classList.add("aberto")
        botaoMenu.innerHTML = "Fechar"
    }



}