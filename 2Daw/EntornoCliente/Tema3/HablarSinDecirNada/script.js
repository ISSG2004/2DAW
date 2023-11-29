function formarFrase() {
    const frases1 = [
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
    const frases2 = [
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

    const frases3 = [
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

    const frases4 = [
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
        var frasesConcatenadas="";//acumular las frases
        var todasLasFrases=[14];
        var longitud = calcularLongitud();  
        for(let i=0;i<todasLasFrases.length;i++){
            let random1=generarRandom(longitud);
            let random2=generarRandom(longitud);
            let random3=generarRandom(longitud);
            let random4=generarRandom(longitud);
            frasesConcatenadas=frases1[random1]+frases2[random2]+frases3[random3]+frases4[random4];
            todasLasFrases[i]=frasesConcatenadas;
            frases1.splice(random1);
            frases2.splice(random2);
            frases3.splice(random3);
            frases4.splice(random4);
            longitud--;//decrementar en uno los rangos en los que se genera el random
        }
        return todasLasFrases;
}
function calcularLongitud() {
    return 14;
}
function generarRandom(longitud) {//metodo que genera un random
    return parseInt(Math.random()*longitud);
}
function mostrarFrases() {
    let todasLasFrases=formarFrase();
    let contador=0;
    let frasesMostradas="";
    frasesMostradas=frasesMostradas+todasLasFrases[contador];
    document.getElementById("discurso").innerHTML=frasesMostradas;
    contador++;
    
}
