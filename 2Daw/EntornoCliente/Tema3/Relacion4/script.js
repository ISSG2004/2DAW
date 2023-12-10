/*
Crear un vector con 10 valores aleatorios comprendidos entre 1 y 500. Luego crea
otros dos vectores y copia los elementos menores a 250 en el segundo vector y los
mayores o iguales a 250 en el tercer vector. Imprimir los tamaños del segundo y tercer
vector. Imprimir los tres vectores
*/
function ej45() {
    // Crear un vector con 10 valores aleatorios entre 1 y 500
    const vectorOriginal = Array.from({ length: 10 }, () => Math.floor(Math.random() * 500) + 1);

    // Crear otros dos vectores
    const vectorMenor250 = [];
    const vectorMayorIgual250 = [];

    // Copiar elementos en los vectores correspondientes
    vectorOriginal.forEach(elemento => {
        if (elemento < 250) {
        vectorMenor250.push(elemento);
        } else {
        vectorMayorIgual250.push(elemento);
        }
    });

    // Función para mostrar un vector en el DOM
    function mostrarVector(id, vector, mensaje) {
        const contenedor = document.getElementById(id);
        const nuevoElemento = document.createElement('p');
        nuevoElemento.textContent = `${mensaje}: [${vector.join(', ')}]`;
        contenedor.appendChild(nuevoElemento);
    }

// Mostrar los resultados en el DOM
mostrarVector('vectorCompleto', vectorOriginal, 'Vector Original');
mostrarVector('menores', vectorMenor250, 'Segundo Vector (menor a 250)');
mostrarVector('mayores', vectorMayorIgual250, 'Tercer Vector (mayor o igual a 250)');
document.getElementById('menores').textContent = `Tamaño del segundo vector (menor a 250): ${vectorMenor250.length}`;
document.getElementById('mayores').textContent = `Tamaño del tercer vector (mayor o igual a 250): ${vectorMayorIgual250.length}`;
}
/*
Crear un vector de 1000 elementos que representen los números  de una rifa. Las
posiciones indicaran los números que tienen premio. Almacena en dichas posiciones,
generadas de forma aleatoria, 10 premios con las cantidades 1000,2000,3000 etc. .
Imprime los números con premio y las cantidades de los mismos
*/
function ej46() {
    var rifa=[];
    for (let i = 0; i < 1000; i++) {
        rifa.push(parseInt(Math.random()*1000));
    }
    var premiados = [];
    for (let i = 0; i < 10; i++) {
        premiados.push(rifa[parseInt(Math.random()*rifa.length)]);
    }

    //Mostramos los números premiados y sus premios (el primero será 1000, el segundo 2000, etc)
    document.getElementById("premios").innerHTML = "Los 10 números premiados y sus premios son:<br>" +
    premiados[0] + " tiene de premio: 1000<br>" +
    premiados[1] + " tiene de premio: 2000<br>" +
    premiados[2] + " tiene de premio: 3000<br>" +
    premiados[3] + " tiene de premio: 4000<br>" +
    premiados[4] + " tiene de premio: 5000<br>" +
    premiados[5] + " tiene de premio: 6000<br>" +
    premiados[6] + " tiene de premio: 7000<br>" +
    premiados[7] + " tiene de premio: 8000<br>" +
    premiados[8] + " tiene de premio: 9000<br>" +
    premiados[9] + " tiene de premio: 10000";
}
/* 
Crear un vector con 5 valores aleatorios comprendidos entre 1 y 1000. Luego extrae
los dos últimos elementos, súmalos y muestrarlos. Imprimir también el tamaño final del
vector.
*/
function ej47() {
    var numeros=[];
    for (let i = 0; i < 5; i++) {
        numeros[i]=parseInt(Math.random()*1000);
    }
    var suma = 0;
    suma = numeros[4]+ numeros[3];
    document.getElementById("suma").innerHTML = "La suma de los dos últimos valores es "+suma;
    document.getElementById("mostrar").innerHTML="Los dos últimos valores son: "+numeros[3]+" y "+numeros[4];
}

/*
Crea un script que nos permita almacenar por teclado los sueldos de un conjunto de
empleados. Finaliza la carga al ingresar cero. Muestra por pantalla los sueldos ordenados
de mayor a menor.
*/
function ej50(){
    var sueldos=[],sueldos2=[];
    var numero;
    var j=0;
    var salir=true;
    while (salir){
        numero=parseInt(prompt("Ingrese el sueldo del empleado"));
        if (numero!=0) {
            sueldos[j]=numero;
            j++;
        }else{
            salir=false;
        }
    }
    sueldos.sort;
    //Otra forma de ordenar al reves
    /*
        array.sort(function (a, b) {
                return b - a;
            });
    */
    j=0;
    for (let i = sueldos.length; i >= 0 ; i--) {
        sueldos2[j]=sueldos[i];
        j++;
    }
    document.getElementById("sueldos").innerHTML=sueldos2;
}
/* 
Crear un vector con una lista de 10 valores aleatorios. Luego borra los componentes
donde hay un 2 y al mismo tiempo insertar dos elementos con el valor 1.
*/
function ej51(){
    var lista=[];
    for (let i = 0; i < 10; i++) {
        lista[i]=parseInt(Math.random()*11);
    }
    for (let i = 0; i < lista.length; i++) {
        if (lista[i]===2){
            lista.splice(i,1,1,1);
        }
    }
    document.getElementById("lista").innerHTML=lista;
}
/* 
Crear un vector de 10 elementos con valores aleatorios comprendidos entre 0 y 1000.
Buscar el menor y después generar otro vector a partir de dicha posición hasta el final
*/
function ej52() {
    // Crear un vector de 10 elementos con valores aleatorios entre 0 y 1000
    var vector1 = [];
    for (var i = 0; i < 10; i++) {
        vector1[i] = Math.floor(Math.random() * 1001);
    }

    // Obtener el valor más pequeño y su posición en vector1
    var menor = Math.min(...vector1);
    var posMenor = vector1.indexOf(menor);

    // Generar un array a partir de la posición del menor valor
    var vector2 = vector1.slice(posMenor);

    // Mostrar el nuevo vector
    document.getElementById("mostrarLista").innerHTML = vector2;
}

/*
Crear un vector con los nombres de 5 personas. Imprimelos despues  por pantalla
uno debajo de otro utilizando el método join para generar un string y añadele entre
elementos la marca html <br>
*/
function ej53() {
    var vector=[
        "manolo","juan","benito","paco","bartolo"
    ];
    document.getElementById("53").innerHTML=vector.join("<br>");
}
/* 
    Crear un vector de 10 elementos. Inicializa los valores del vector cuando se crea.
    Inicializa dos variables que resulten de llamar primero al método toString() y la segunda
    variable inicializala llamando al método join() sin parámetros. Muestra un mensaje si el
    resultado de la ejecución de los dos métodos retorna el mismo valor (empleando un if
    para comparar los string) 
*/
function ej55() {
    // Crear un vector de 10 elementos e inicializar los valores
var vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Inicializar dos variables usando toString() y join()
var toStringResult = vector.toString();
var joinResult = vector.join();

// Comparar los resultados y mostrar un mensaje
if (toStringResult === joinResult) {
    window.alert("Los resultados de toString() y join() son iguales.");
} else {
    window.alert("Los resultados de toString() y join() son diferentes.");
}

}