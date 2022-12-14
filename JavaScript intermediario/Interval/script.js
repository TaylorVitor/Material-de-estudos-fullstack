

let contador = document.querySelector("#contador") 

let count = 0

let interval = setInterval(function(){
  count++

  contador.innerHTML = count
}, 10)  



let botaoPause = document.querySelector("#botao") 

botaoPause.onclick = function(){
  clearInterval(interval)
}
