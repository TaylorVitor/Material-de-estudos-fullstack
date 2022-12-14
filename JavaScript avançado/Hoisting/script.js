

/* 
   Hoisting (IÇAR, ERGUER)

   Hoisting é comportamento padrão do JavaScript de mover as declarações para o topo de um escopo.

   */ 

   function teste() {
       outraFuncao()

        function outraFuncao() {
            console.log("Sou a outra função")
        }
   }

   teste()

