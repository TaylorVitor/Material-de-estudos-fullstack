

let formulario = document.querySelector("#formCadastro")

formulario.onsubmit = function(event){
  event.preventDefault()

  let temErro = false

  let inputNome = document.forms["formCadastro"]["nome"]

  if(!inputNome.value) {
    temErro = true
    inputNome.classList.add("inputErro")

    let span = inputNome.nextSibling.nextSibling
    span.innerText = "Preencha o campo"

  } else{
    inputNome.classList.remove("inputErro")
    let span = inputNome.nextSibling.nextSibling
    span.innerText = ""
  }


  let inputEmail = document.forms["formCadastro"]["email"]
  
  if(!inputEmail.value) {
    temErro = true
    inputEmail.classList.add("inputErro")

    let span = inputEmail.nextSibling.nextSibling
    span.innerText = "Preencha o campo email"
    

  } else{
    inputEmail.classList.remove("inputErro")

    let span = inputEmail.nextSibling.nextSibling
    span.innerText = ""
}

let selectCidade = document.forms["formCadastro"]["cidade"]

if(!selectCidade.value) {
  temErro = true
  selectCidade.classList.add("inputErro")

  let span = selectCidade.nextSibling.nextSibling.innerText = "Selecione sua cidade"

} else {
  selectCidade.classList.remove("inputErro")

  let span = selectCidade.nextSibling.nextSibling
  span.innerText = ""
}

if(!temErro) {
  formulario.submit()
}


}



