
/* 

LOCAL STORAGE

ARMAZENAMENTO LOCAL 

PODEMOS ARMAZENAR DETERMINADO DADOS NO USUARIO.

*/


const tarefas = [
   { tarefa: "Estudar javascript"},
    {tarefa: "Estudar Node.js"},
    {tarefa: "Estudar react.js"},
]

const tarefasJson = JSON.stringify(tarefas)

localStorage.setItem("Tarefa", tarefasJson)

const listasTarefasSalvas = localStorage.getItem("tarefas")

const listasTarefasObj = JSON.parse(listasTarefasSalvas)

console.log(listasTarefasObj)