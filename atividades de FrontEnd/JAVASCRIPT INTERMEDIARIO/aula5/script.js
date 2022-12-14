

let botaoTeste = document.querySelector('#botaoTeste')

let contador = 0

function cliqueBotao (){
    contador++

    console.log('mesagem 1')

    if (contador >= 6)

    botaoTeste.removeEventListener('click', cliqueBotao)
}

// addEventListener
botaoTeste.addEventListener('click', cliqueBotao )

