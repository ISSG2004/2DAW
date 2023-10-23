//Hecho por Ismael sánchez 2DAW
/*
Realizar una pequeña aplicación en JavaScript que muestre lo siguiente:  

Tabla de multiplicar del 7. Tabla de sumar del 8. Tabla de dividir del 9.  

Utilizar los tres tipos de bucles que hay en JavaScript (para cada número un tipo de bucle diferente).  

Sabiendo que cuando desplazamos 1 bit a la derecha dividimos un entero por 2 y cuando lo desplazamos a la izquierda estamos multiplicando por 2.  

Que tu aplicación también imprima el resultado de las siguientes operaciones empleando desplazamiento de bits:  

125 / 8 =

 40 x 4= 

 25 / 2=

 10 x 16= 
*/ 
//tabla del 7
    let tablaDel7=document.getElementById("tabla7");//hacemos que la variable tablaDel7 busque en el HTML un elemento con la ID tabla7
    let numero;//declaramos la variable que va a almacenar los resultados de las operaciones
    for (let i = 0; i <=10; i++) {
        numero=i*7;//realizamos la operacion de calculo
        tablaDel7.innerHTML+=`<li>7 x ${i} = ${numero}</li>`;//dandole valor a la variable emparejada con la ID conseguimos que en el html se reemplace por los resultados obtenidos
    }
//tabla del 8 
    let tablaDel8=document.getElementById("tabla8");//hacemos que la variable tablaDel8 busque en el HTML un elemento con la ID tabla8
    let numero2;//declaramos la variable que va a almacenar los resultados de las operaciones
    let j=0;//declaramos e inicializamos a 0 la variable de control del bucle
    while (j <= 10) {
        numero2=j*8;//realizamos la operacion de calculo
        tablaDel8.innerHTML+=`<li>8 x ${j} = ${numero2}</li> `;//dandole valor a la variable emparejada con la ID conseguimos que en el html se reemplace por los resultados obtenidos
        j++;//incrementamos uno en la variable de control del bucle
    }
//tabla del 9

    let tablaDel9=document.getElementById("tabla9");//hacemos que la variable tablaDel9 busque en el HTML un elemento con la ID tabla9
    let numero3;//declaramos la variable que va a almacenar los resultados de las operaciones
    k=0;//declaramos e inicializamos a 0 la variable de control del bucle
    do {
       numero3=k*9;//realizamos la operacion de calculo
       tablaDel9.innerHTML+= `<li>9 x ${k} = ${numero3}</li> `;//dandole valor a la variable emparejada con la ID conseguimos que en el html se reemplace por los resultados obtenidos
       k++;//incrementamos uno en la variable de control del bucle
    } while (k <= 10);
//Primera operacion de desplazamiento de bits
//125 / 8
    let operacion1=document.getElementById("op1");
    let resultadoOp1 = 125 >> 3; // Realiza la operación desplazando 3 bits a la derecha(div entre 8)
    operacion1.innerHTML +=`125 / 8 en desplazamiento de bits ${resultadoOp1}`;
//Segunda operacion de desplazamiento de bits
//40 x 4
    let operacion2=document.getElementById("op2");
    let resultadoOp2 = 40 << 2; // Realiza la operación desplazando 2 bits a la izquierda(mult por 4)
    operacion2.innerHTML +=`40 x 4 en desplazamiento de bits ${resultadoOp2}`;

//tercera operacion de desplazamiento de bits
//25 / 2
    let operacion3=document.getElementById("op3");
    let resultadoOp3 = 25 >> 2; // Realiza la operación desplazando 1 bits a la derecha(div entre 2)
    operacion3.innerHTML +=`25 / 2 en desplazamiento de bits ${resultadoOp3}`;

//cuarta operacion de desplazamiento de bits
// 10 x 16
    let operacion4=document.getElementById("op4");
    let resultadoOp4 = 40 << 4; // Realiza la operación desplazando 4 bits a la izquierda(mult por 16)
    operacion4.innerHTML +=`10 x 16 en desplazamiento de bits ${resultadoOp4}`;
