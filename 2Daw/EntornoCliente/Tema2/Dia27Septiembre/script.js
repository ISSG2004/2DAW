function intentos() {
    var nota= window.prompt("Introduce la nota");
    var contador=1;
    while(nota<0||nota>10&&contador<3) {
        nota=window.prompt("Introduciste una nota no válida");
        contador++;
    }
    if (contador==1) {
       document.getElementById("info").innerHTML="Introduciste una nota valida("+nota+") a la primera"; 
       if (nota>=5) {
        document.getElementById("info2").innerHTML="Estas aprobado";
       }else{
        document.getElementById("info2").innerHTML="Estas suspenso";
       }
    }else if (nota>10||nota<0) {
        document.getElementById("info").innerHTML="No introduciste una nota válida" ;
    }else{
        document.getElementById("info").innerHTML="Introduciste una nota válida ("+nota+") en "+contador+" intentos";
        if (nota>=5) {
            document.getElementById("info2").innerHTML="Estas aprobado";
           }else{
            document.getElementById("info2").innerHTML="Estas suspenso";
           }
    }

    
       
    
}
        