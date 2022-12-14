
//Seletor por id
document.querySelector('#titulo').innerHTML = 'Exemplo'

//Seletor por tag
document.querySelector('a').innerHTML = 'titulo ancora'

//Seletor anônimo 
let ancoras = document.querySelectorAll('a')
ancoras.forEach(function(elemento){
    elemento.innerHTML = 'teste'
})

let boxes = document.querySelectorAll('.box')
boxes.forEach(function(box, index){
    box.innerHTML = 'box' + (index + 1)
})



// estilizar uma tag (' ')
// estilizar uma id ('#')
// estilizar uma classe (. )