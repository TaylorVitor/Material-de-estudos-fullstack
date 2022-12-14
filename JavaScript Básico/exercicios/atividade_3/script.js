

let listaAtores = [
    
    {
        nome: "Keanu Reeves",
        personagem: "neo",
        filme: "the matrix",
    },

    {
        nome: "David proser",
        personagem: "Darth vaden",
        filme: "star wars mission",
    },

    {
        nome: "Bruce waynes",
        personagem: "Batman",
        filme: "Batman - O inicio",
    }

]

let htmlAtores = ""

for(let listaAtor of listaAtores) {

    htmlAtores += `
    <ul id="listaAtores">
        <h1>${listaAtor.nome}</h1> <br> 
        <p>Interpretrou o ${listaAtor.personagem} no filme ${listaAtor.filme}</p>
    </ul>`
}


document.querySelector("#listaAtores").innerHTML = htmlAtores