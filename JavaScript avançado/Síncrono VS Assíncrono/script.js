
/* 

Síncrono VS Assíncrono

SINCRONO = é aquele que acontece em sequência e ordenado, seguindo uma fila.

ASSINCRONO =  só começa após o atual ser concluído.

*/


// ASSINCRONO

function primeira() {
    console.log("Primeira")
}



function segunda() {
    console.log("segunda")
}

setTimeout(primeira, 3000)

segunda()




// SINCRONO

function primeira() {
    console.log("Primeira")
    for(let index; index < 1000; index++) {

    }
}


function segunda() {
    console.log("segunda")
}

primeira()

segunda()
