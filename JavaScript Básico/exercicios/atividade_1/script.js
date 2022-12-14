
let none = ""


function sendInfo() {
    let namePerson = prompt("Qual o seu nome?")

    let yourAge = prompt("Qual a sua idade?")

    if(namePerson === "Thomas Anderson") {
    document.write( `<h1> Olá ${namePerson} Você é ator do filme matrix e </h1>`)
   
    } else {
    document.write(`<h1>Olá ${namePerson}, </h1>`)

    } if(yourAge >= 18) {

    document.write(`<h2>Você é maior de idade </h2>`)

    } else if (yourAge < 18) {
    document.write( `<h2>Você é menor de idade</h2>`)

    } else (yourAge === none)
        alert("Preencha os campos corretamente")
        document.write("<h1>Indisponivel</h1>")
    }