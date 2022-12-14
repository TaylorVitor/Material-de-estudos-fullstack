

let botaoCadastrar = document.querySelector("#botaoCadastrar")

let toast = document.querySelector(".toast")


botaoCadastrar.onclick = function(){
    toast.classList.add('confirmado')


    setTimeout(function(){
      toast.classList.remove('confirmado')   
    }, 2000)
}
