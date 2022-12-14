

let contador = document.querySelector("#contador")

let count = 0

let interval = setInterval(function(){
  count
  contador.innerHTML = count
},10)


let botaMenos = document.querySelector(".botaoMenos")

botaMenos.addEventListener("click", function(){
  interval = setInterval(function(){
    count--
    contador.innerHTML = count
    clearInterval(botaMenos)
  },10)

  botaMenos.style.backgroundColor = "red"
  clearInterval(botaoMais)
  
})

let botaoMais = document.querySelector(".botaoMais")

botaoMais.addEventListener("click", function(){
  interval = setInterval(function(){
    count++
    contador.innerHTML = count
  },10)

  clearInterval(botaMenos)
  botaoMais.classList.add("green")

})
