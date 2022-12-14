

function nomeIdade (nomeIdade){
    
    
let nome = prompt('Qual é o seu nome')
let idade = prompt('Qual a sua idade')
prompt('necessario preencher')

if(nome === 'Thomas Anderson'){
    document.write(`Bem-vindo ${nome}, você é personagem do filme Matrix,`)
}else{
    document.write(`Olá ${nome},  ` )
}

if (idade >= 18){
    document.write('e você é maior de idade')
}else if (idade < 18){
    document.write('você é menor de idade,')
}


}    


