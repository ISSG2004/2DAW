var frases1 = [
    "Queridos compañeros ",
    "Por otra parte,y dados los condicionamientos actuales ",
    "Asimismo, ",
    "Sin embargo no hemos de olvidar que ",
    "De igual manera, ",
    "La práctica de la vida cotidiana prueba que, ",
    "No es indispensable argumentar eI peso y la significación de estos problemas ya que, ",
    "Las expenencias ricas y diversas muestran que, ",
    "El afán de organización, pero sobre todo ",
    "Los superiores principios ideológicos, condicionan que ",
    "Incluso, bien pudiéramos atrevemos a sugerir que ",
    "Es obvio señalar que, " ,
    "Pero pecaríamos de insinceros soslayásemos que, ",
    " Y además, quedaríamos inmersos en la más abyecta de las estulticias si no fueramos consacientes de que, ",
    "Por último, y como definitivo elemento esclarecedor, cabe añadir que, "
];//constante con el bloque 1 de frases
var frases2 = [
    "la realización de las premisas del programa ",
    "la complejidad de los estudios de los dirigentes ",
    "el aumento constante, en cantidad y en extensión, de nuestra actividad ",
    "la estructura actual de la organización ",
    "el nuevo modelo de actividad de la organización, ",
    "el desarrollo continuo de distintas formas de actividad ",
    "nuestra actividad de información y propaganda ",
    "el reforzamiento y desarrollo de las estructuras ",
    "la consulta con los numerosos militantes ",
    "el inicio de la acción general de formación de las actitudes ",
    "un relanzamiento específico de todos los sectores implicados ",
    "la superación de experiencias periclitadas ",
    "una aplicación indiscriminada de los factores confluyentes ",
    "la condición sine qua non rectora del proceso ",
    "el proceso consensuado de unas y otras aplicaciones concurrentes "
];//constante con el bloque 2 de frases

var frases3 = [
    "nos obliga a un exhaustivo análisis ",
    "cumple un rol escencial en la formación ",
    "exige la precisión y la determinación ",
    "ayuda a la preparación y a la realización ",
    "garantiza la participación de un grupo importante en la formación ",
    "cumple deberes importantes en la determinación ",
    "facilita la creación ",
    "obstaculiza la apreciación de la importancia ",
    "ofrece un ensayo interesante de verificación ",
    "implica el proceso de reestructuración y modernización ",
    "habrá de significar un auténtico y eficaz punto de partida ",
    "permite en todo caso explicitar las razones fundamentales ",
    "asegura, en todo caso, un proceso muy sensible de inversión ",
    "radica en una elaboración cuidadosa y sistemática de las estrategias adecuadas ",
    "deriva de una indirecta incidencia superadora "
];//constante con el bloque 3 de frases

var frases4 = [
    "de las condiciones financieras y administrativas existentes.",
    "de las directivas de desarrollo para el futuro.",
    "del sistema de participación general.",
    "de las actitudes de los miembros hacia sus deberes ineludibles.",
    "de las nuevas proposiciones.",
    "de las direcciones educativas en el sentido del progreso.",
    "del sistema de formación de cuadros que corresponda a las necesidades.",
    "de las condiciones de las actividades apropiadas.",
    "del modelo de desarrollo.",
    "de las formas de acción.",
    "de las básicas premisas adoptadas.",
    "de toda una casuística de amplio espectro.",
    "de los elementos generadores.",
    "para configurar una interface amigable y coadyuvante a la reingeniería del sistema.",
    "de toda una serie de criterios ideológicamente sistematizados en un frente común de actuación regeneradora."
];//constante con el bloque 4 de frases
    function formarFrase() {//Metodo para formar las frases
        var frasesConcatenadas="";//acumular las frases
        var longitud = frases1.length-1;  
        //generamos los numeros random
        let random1 = generarRandom(longitud);
        let random2 = generarRandom(longitud);
        let random3 = generarRandom(longitud);
        let random4 = generarRandom(longitud);
        //frase con los 4 extractos concatenados
        frasesConcatenadas = frases1[random1] + frases2[random2] + frases3[random3] + frases4[random4];
        //eliminamos las frases de la posicion generada mediante el random
        frases1.splice(random1, 1);
        frases2.splice(random2, 1);
        frases3.splice(random3, 1);
        frases4.splice(random4, 1);
        return frasesConcatenadas;//devolvemos una frase
    }
    function generarRandom(longitud) {//generar random
        return parseInt(Math.random() * longitud);
    }
    
    function mostrarFrases() {//funcion que muestra las frases
        if(frases1.length<=0){//Si ya no queda nada en los arrays mostramos una alerta para que no se siga generando nada
            alert("Ya no se pueden generar más frases");
        } else {//Si quedan frases imprimimos la frase
            document.getElementById("discurso").innerHTML += formarFrase()+"<br>";
        }
    }
//Parte de cookies
    //metodo para reiniciar la cookie
    function reiniciarCookie() {
        setCookie('contador', '0', 365);
    }
    //llammos al metodo para que cada vez que la web se inicie la cookie se ponga a 0
    reiniciarCookie();
    //obtener el valor de la cookie
    function contarClics() {
        // Verificar si la cookie 'contador' existe
        let contador = getCookie('contador');

        // Si no existe, inicializarlo a 0
        if (contador === '') {
            contador = 0;
        } else {
        // Si existe, convertirlo de cadena a número
            contador = parseInt(contador);
        }
        // Incrementar el contador
        contador++;
        // Almacenar el contador en la cookie
        setCookie('contador', contador.toString(), 365);
        //mostrar cuantas veces has pulsado el boton
        document.getElementById("mostrarCookie").innerHTML ="Has pulsado "+contador+ " veces." ;
    }

    // Obtener el botón y agregar un evento de clic
    const miBoton = document.getElementById('miBoton');
    // Función para obtener el valor de una cookie
    function getCookie(nombre) {
        const nombreEQ = nombre + '=';
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
            }
            if (cookie.indexOf(nombreEQ) === 0) {
                return cookie.substring(nombreEQ.length, cookie.length);
            }
        }
        return '';
    }

    // Función para establecer el valor de una cookie
    function setCookie(nombre, valor, dias) {
        const fechaExpiracion = new Date();
        fechaExpiracion.setDate(fechaExpiracion.getDate() + dias);
        const cookieValue = escape(valor) + ((dias === null) ? '' : '; expires=' + fechaExpiracion.toUTCString());
        document.cookie = nombre + '=' + cookieValue + '; path=/';
    }
    //metodo para usar todos los metodos
    function ejecutarPrograma(){
        miBoton.addEventListener('click', contarClics);//creamos el evento. El segundo metodo de este llamaría a la función contar clicks
        //mostrarFrases();
    }
    //metodo para reiniciar los arrays de frases
    function reiniciarFrases(){
        frases1 = [
            "Queridos compañeros ",
            "Por otra parte,y dados los condicionamientos actuales ",
            "Asimismo, ",
            "Sin embargo no hemos de olvidar que ",
            "De igual manera, ",
            "La práctica de la vida cotidiana prueba que, ",
            "No es indispensable argumentar eI peso y la significación de estos problemas ya que, ",
            "Las expenencias ricas y diversas muestran que, ",
            "El afán de organización, pero sobre todo ",
            "Los superiores principios ideológicos, condicionan que ",
            "Incluso, bien pudiéramos atrevemos a sugerir que ",
            "Es obvio señalar que, " ,
            "Pero pecaríamos de insinceros soslayásemos que, ",
            " Y además, quedaríamos inmersos en la más abyecta de las estulticias si no fueramos consacientes de que, ",
            "Por último, y como definitivo elemento esclarecedor, cabe añadir que, "
        ];//constante con el bloque 1 de frases
        frases2 = [
            "la realización de las premisas del programa ",
            "la complejidad de los estudios de los dirigentes ",
            "el aumento constante, en cantidad y en extensión, de nuestra actividad ",
            "la estructura actual de la organización ",
            "el nuevo modelo de actividad de la organización, ",
            "el desarrollo continuo de distintas formas de actividad ",
            "nuestra actividad de información y propaganda ",
            "el reforzamiento y desarrollo de las estructuras ",
            "la consulta con los numerosos militantes ",
            "el inicio de la acción general de formación de las actitudes ",
            "un relanzamiento específico de todos los sectores implicados ",
            "la superación de experiencias periclitadas ",
            "una aplicación indiscriminada de los factores confluyentes ",
            "la condición sine qua non rectora del proceso ",
            "el proceso consensuado de unas y otras aplicaciones concurrentes "
        ];//constante con el bloque 2 de frases
        
        frases3 = [
            "nos obliga a un exhaustivo análisis ",
            "cumple un rol escencial en la formación ",
            "exige la precisión y la determinación ",
            "ayuda a la preparación y a la realización ",
            "garantiza la participación de un grupo importante en la formación ",
            "cumple deberes importantes en la determinación ",
            "facilita la creación ",
            "obstaculiza la apreciación de la importancia ",
            "ofrece un ensayo interesante de verificación ",
            "implica el proceso de reestructuración y modernización ",
            "habrá de significar un auténtico y eficaz punto de partida ",
            "permite en todo caso explicitar las razones fundamentales ",
            "asegura, en todo caso, un proceso muy sensible de inversión ",
            "radica en una elaboración cuidadosa y sistemática de las estrategias adecuadas ",
            "deriva de una indirecta incidencia superadora "
        ];//constante con el bloque 3 de frases
        
        frases4 = [
            "de las condiciones financieras y administrativas existentes.",
            "de las directivas de desarrollo para el futuro.",
            "del sistema de participación general.",
            "de las actitudes de los miembros hacia sus deberes ineludibles.",
            "de las nuevas proposiciones.",
            "de las direcciones educativas en el sentido del progreso.",
            "del sistema de formación de cuadros que corresponda a las necesidades.",
            "de las condiciones de las actividades apropiadas.",
            "del modelo de desarrollo.",
            "de las formas de acción.",
            "de las básicas premisas adoptadas.",
            "de toda una casuística de amplio espectro.",
            "de los elementos generadores.",
            "para configurar una interface amigable y coadyuvante a la reingeniería del sistema.",
            "de toda una serie de criterios ideológicamente sistematizados en un frente común de actuación regeneradora."
        ];//constante con el bloque 4 de frases
    }
    //metodo para reiniciar el programa
    function reiniciarPrograma() {
        reiniciarCookie();
        reiniciarFrases();
        document.getElementById("discurso").innerHTML="";
        document.getElementById("mostrarCookie").innerHTML ="Has pulsado 0 veces." ;
    }
